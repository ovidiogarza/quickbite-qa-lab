# QuickBite QA Lab

**Aplicación educativa para Software Quality Assurance (SQA)**

QuickBite QA Lab es una aplicación web diseñada para practicar técnicas de aseguramiento y control de calidad de software mediante escenarios reales de prueba, identificación de defectos y automatización.

La aplicación contiene **defectos intencionales con fines educativos**, por lo que algunos comportamientos pueden no coincidir con los resultados esperados.

Este laboratorio se utiliza como recurso de apoyo para las materias del Tecnológico de Monterrey:

- **TC3004B – Planeación de Sistemas de Software**
- **TC3005B – Desarrollo e Implantación de Sistemas de Software**

> **Principio del laboratorio:** La Inteligencia Artificial puede proponer. El ingeniero debe validar y decidir.

---

## 1. Acceso a la aplicación

**Aplicación publicada (GitHub Pages):**

https://ovidiogarza.github.io/quickbite-qa-lab/

**Repositorio de código fuente:**

https://github.com/ovidiogarza/quickbite-qa-lab

La aplicación puede utilizarse directamente desde el navegador para realizar actividades de pruebas funcionales, exploratorias y automatizadas.

---

## 2. Objetivos educativos

QuickBite QA Lab permite desarrollar habilidades relacionadas con:

- Identificación y análisis de requerimientos.
- Diseño de escenarios y casos de prueba.
- Equivalence Partitioning y Boundary Value Analysis.
- Risk-Based Testing.
- Ejecución de pruebas funcionales.
- Exploratory Testing.
- Defect Reporting y clasificación de severidad.
- Automatización de pruebas E2E.
- Análisis de resultados y evidencias.
- Evaluación de criterios de calidad para liberación.

El propósito no es solamente encontrar defectos, sino aprender a documentarlos, reproducirlos, analizar su impacto y comunicar decisiones de calidad.

---

## 3. Uso por materia

### TC3004B – Quality Planning

La aplicación sirve como referencia para actividades de planeación y diseño de pruebas.

| Actividad | Objetivo |
|---|---|
| Test Strategy | Definir enfoque, alcance y prioridades de prueba |
| Test Plan | Organizar recursos, actividades y criterios |
| Test Case Design | Diseñar escenarios, casos y datos de prueba |
| Risk-Based Testing | Priorizar pruebas según probabilidad e impacto |
| Requirements Traceability | Relacionar requerimientos con casos de prueba |
| Static Reviews | Analizar documentos SRS y SDD cuando estén disponibles |

**Entregable relacionado:** Software Quality Portfolio – Planning Baseline.

### TC3005B – Quality Execution

QuickBite se utiliza como sistema bajo prueba para ejecutar y automatizar actividades de calidad.

| Actividad | Objetivo |
|---|---|
| Test Execution | Ejecutar casos y registrar resultados |
| Defect Management | Documentar defectos con pasos y evidencia |
| Risk-Based Testing | Evaluar riesgos y recomendaciones de liberación |
| Cypress Automation | Automatizar escenarios funcionales E2E |
| Regression Testing | Verificar comportamientos después de cambios |
| Quality Metrics | Analizar resultados, cobertura y tendencias |
| CI/CD | Explorar la automatización de verificaciones y despliegues |

Los contenidos de Unit Testing con Jest se desarrollan en el repositorio independiente de Software Quality Framework.

---

## 4. Arquitectura del laboratorio

QuickBite forma parte de un entorno educativo organizado en dos repositorios.

### Repositorio 1 – Application Under Test (AUT)

**QuickBite QA Lab**

https://github.com/ovidiogarza/quickbite-qa-lab

Responsabilidades:

- Contener el código de la aplicación web.
- Proporcionar funcionalidades para ejecutar pruebas.
- Mantener escenarios y defectos intencionales.
- Publicar la aplicación mediante GitHub Pages.
- Servir como sistema bajo prueba para Cypress.

### Repositorio 2 – Software Quality Framework

**TC3004B-TC3005B-Calidad**

https://github.com/ovidiogarza/TC3004B-TC3005B-Calidad

Responsabilidades:

- Documentación de calidad y trazabilidad.
- Diseño y ejecución de pruebas.
- Automatización E2E con Cypress.
- Unit Testing con Jest sobre módulos didácticos.
- Code Quality con ESLint y Prettier.
- Code Coverage.
- GitHub Copilot para actividades de QA.
- Integración continua mediante GitHub Actions (planeada).

**Decisión arquitectónica:** ambos repositorios permanecen separados para distinguir claramente el código de la aplicación de las herramientas y evidencias utilizadas para evaluar su calidad.

---

## 5. Estructura del proyecto

Estructura principal de QuickBite QA Lab:

```text
quickbite-qa-lab/
├── css/
├── js/
├── index.html
└── README.md
```

- `index.html`: página principal de la aplicación.
- `css/`: estilos visuales.
- `js/`: lógica de la aplicación.
- `README.md`: documentación del laboratorio.

La aplicación se publica como sitio web estático mediante GitHub Pages.

---

## 6. Defectos intencionales

QuickBite QA Lab contiene defectos introducidos deliberadamente para desarrollar habilidades de Software Quality Engineering.

Estos defectos forman parte de los escenarios de aprendizaje y no deben corregirse sin autorización del instructor.

Durante las actividades, los estudiantes deberán:

1. Identificar el comportamiento observado.
2. Compararlo contra el resultado esperado.
3. Determinar si existe un defecto.
4. Documentar los pasos para reproducirlo.
5. Clasificar su severidad.
6. Adjuntar evidencia.
7. Proponer una recomendación de calidad.

**Importante:** no todos los comportamientos inesperados representan necesariamente un defecto. Las conclusiones deben estar sustentadas en requerimientos y evidencia.

---

## 7. Automatización con Cypress

Las pruebas E2E se administran desde el repositorio:

https://github.com/ovidiogarza/TC3004B-TC3005B-Calidad

Cypress permite automatizar interacciones con la aplicación QuickBite publicada en GitHub Pages.

Entre los objetivos educativos se encuentran:

- Localización e interacción con elementos.
- Validación de resultados esperados.
- Uso de assertions.
- Pruebas positivas y negativas.
- Automatización de escenarios funcionales.
- Ejecución de Regression Tests.
- Captura y análisis de evidencias.

La disponibilidad y estabilidad de la aplicación publicada son precondiciones para ejecutar las pruebas E2E.

---

## 8. CI/CD – GitHub Actions

**Estado: integración planeada para TC3005B.**

La arquitectura propuesta contempla dos procesos complementarios.

### CI/CD de QuickBite

Flujo previsto:

```text
Code Change
     |
     v
Push / Pull Request
     |
     v
Application Validation
     |
     v
Quality Checks
     |
     v
Deploy to GitHub Pages
```

El objetivo es validar cambios antes de publicar nuevas versiones de la aplicación.

### Integración con el Software Quality Framework

Como evolución del laboratorio, se contempla ejecutar pruebas Cypress desde el repositorio de calidad después de un despliegue exitoso de QuickBite.

```text
QuickBite Deployment
        |
        v
GitHub Pages
        |
        v
Cypress E2E Tests
        |
