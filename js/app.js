const products=[
{id:'burger',name:'Hamburguesa Clásica',price:120},{id:'pizza',name:'Pizza Personal',price:180},{id:'tacos',name:'Orden de Tacos',price:95},{id:'soda',name:'Refresco',price:35},{id:'fries',name:'Papas Fritas',price:60},{id:'salad',name:'Ensalada',price:110}
];
let cart={}; let couponApplied=false; let orderStatus='SIN PEDIDO';
const $=id=>document.getElementById(id); const money=n=>`$${n.toFixed(2)}`;
function renderMenu(){ $('menu').innerHTML=products.map(p=>`<div class="product" data-testid="product-${p.id}"><h3>${p.name}</h3><div>${money(p.price)}</div><button data-testid="add-${p.id}" onclick="add('${p.id}')">Agregar</button></div>`).join(''); }
function add(id){cart[id]=(cart[id]||0)+1;render();} function qty(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];render();}
function subtotal(){return products.reduce((s,p)=>s+(cart[p.id]||0)*p.price,0)}
function discount(sub){return couponApplied && sub>200 && sub<1000 ? sub*.20:0} // intentional boundary defect
function shipping(sub){const plus=$('plus').checked;if(plus)return sub>=300?0:30;return sub>500?30:60} // intentional boundary defect at 500
function tip(){const raw=$('tip').value;const n=Number(raw);if(!Number.isFinite(n))return 0;return n;} // intentionally accepts decimals / out-of-range values
function render(){let html='';products.forEach(p=>{if(cart[p.id])html+=`<div class="cart-row"><span>${p.name}<br><small>${money(p.price)} c/u</small></span><span class="qty"><button onclick="qty('${p.id}',-1)">−</button> ${cart[p.id]} <button onclick="qty('${p.id}',1)">+</button></span></div>`});$('cart').innerHTML=html||'<p class="muted">Tu carrito está vacío.</p>';const sub=subtotal(),disc=discount(sub),ship=shipping(sub),t=tip();$('subtotal').textContent=money(sub);$('discount').textContent='-'+money(disc);$('shipping').textContent=money(ship);$('tipTotal').textContent=money(t);$('total').textContent=money(sub-disc+ship+t);}
$('applyCoupon').onclick=()=>{const code=$('coupon').value.trim();if(code==='STUDENT20'){couponApplied=true;$('couponMsg').textContent='Cupón aplicado.';$('couponMsg').className='message ok';}else{couponApplied=false;$('couponMsg').textContent='Cupón no válido.';$('couponMsg').className='message error';}render();};
$('plus').onchange=render;$('tip').oninput=render;
$('checkout').onclick=()=>{if(subtotal()===0){$('checkoutMsg').textContent='Agrega al menos un producto.';$('checkoutMsg').className='message error';return;}orderStatus='CONFIRMADO';$('orderStatus').textContent=orderStatus;$('checkoutMsg').textContent='Pedido creado correctamente.';$('checkoutMsg').className='message ok';$('statusMsg').textContent='';};
$('advance').onclick=()=>{const next={CONFIRMADO:'PREPARANDO',PREPARANDO:'EN CAMINO','EN CAMINO':'ENTREGADO'};if(next[orderStatus]){orderStatus=next[orderStatus];$('orderStatus').textContent=orderStatus;$('statusMsg').textContent='Estado actualizado.';}else{$('statusMsg').textContent='No es posible avanzar el estado.';}};
$('cancel').onclick=()=>{if(orderStatus==='CONFIRMADO'||orderStatus==='PREPARANDO'){orderStatus='CANCELADO';$('orderStatus').textContent=orderStatus;$('statusMsg').textContent='Pedido cancelado.';}else{$('statusMsg').textContent='El pedido no puede cancelarse en este estado.';}}; // intentional defect: PREPARANDO should not cancel
renderMenu();render();
