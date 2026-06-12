# juandaferrer.xyz - Personal Portfolio & Infrastructure Showcase

[![Infrastructure](https://img.shields.io/badge/Infrastructure-As__Code-blue?style=flat-square)](#)
[![OS Compliance](https://img.shields.io/badge/OS_Compliance-Enterprise__Linux-red?style=flat-square)](#)

Este repositorio contiene el código fuente, la configuración de despliegue y los artefactos de automatización de mi portafolio digital y sitio web personal. El objetivo de este proyecto es consolidar mi perfil técnico, exponer mis proyectos activos y demostrar buenas prácticas en administración de sistemas y soberanía tecnológica.

---


## 🚀 Arquitectura y Tecnologías

El sitio está diseñado bajo principios de alta disponibilidad, bajo consumo de recursos y automatización:

*   **Frontend:** HTML5, CSS3, JavaScript (diseño limpio, responsivo y sin bloatware).
*   **Hosting:** GitHub Pages (Despliegue continuo a través de GitHub Actions).
*   **DNS & Seguridad:** Cloudflare (Proxied, WAF reglas estrictas, gestión de SSL/TLS).
*   **Dominio:** Registrado en Porkbun.
*   **Notificaciones / Contacto:** Integración con Brevo para el backend de formularios de contacto y entrega de correos.

---

## 🛠️ Stack Tecnológico Global (Área de Enfoque)

Aunque este repositorio aloja el frontend, mi enfoque principal está en la infraestructura crítica:

*   **Sistemas Operativos:** RHEL (Red Hat Enterprise Linux), Debian GNU/Linux, Fedora.
*   **Automatización:** Ansible (Playbooks de configuración y aprovisionamiento).
*   **Orquestación:** Familiarizado con entornos de contenedores y bases de OpenShift.

---

## 📁 Estructura del Proyecto

```text
.
├── .github/workflows/   # Pipelines de CI/CD para despliegue automatizado
├── assets/             # Recursos estáticos (Imágenes, PDFs, CV)
├── css/                # Hojas de estilo estructuradas
├── js/                 # Lógica del lado del cliente (Formularios, interactividad)
├── index.html          # Landing page principal y portafolio
└── README.md           # Documentación del sistema
