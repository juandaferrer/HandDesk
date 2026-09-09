# juandaferrer.xyz - Personal Portfolio & Infrastructure Showcase

[![Infrastructure](https://img.shields.io/badge/Infrastructure-React%2FVite-blue?style=flat-square)](#)
[![OS Compliance](https://img.shields.io/badge/OS_Compliance-Enterprise__Linux-red?style=flat-square)](#)

Este repositorio contiene el código fuente, la arquitectura de despliegue y los componentes de automatización de mi portafolio digital y sitio web personal. Lejos de ser una simple página estática decorativa, este espacio está diseñado para consolidar mi perfil técnico, exponer proyectos de infraestructura y demostrar un estándar riguroso de ingeniería de sistemas y soberanía tecnológica.

---

## 🚀 Arquitectura y Tecnologías

El sitio está construido sobre un stack moderno y eficiente, priorizando la velocidad de carga, la resiliencia y cero desperdicio de recursos:

*   **Frontend:** React, TypeScript, Tailwind CSS, Vite y Lucide Icons (diseño modular, limpio, reactivo y libre de bloatware innecesario).
*   **Hosting & CI/CD:** Cloudflare Pages y GitHub Actions (pipeline automatizado para integración y despliegue continuo ante cada cambio).
*   **DNS & Seguridad Perimetral:** Cloudflare (Proxied, WAF con reglas estrictas, gestión estricta de SSL/TLS y mitigación activa).
*   **Dominio:** Registrado y gestionado vía Porkbun.

---

## 🛠️ Stack Tecnológico Global (Área de Enfoque)

Aunque este repositorio aloja el código del front y la interfaz web, mi enfoque principal y especialización técnica radican en la administración de infraestructura crítica:

*   **Sistemas Operativos:** RHEL (Red Hat Enterprise Linux), Fedora, Debian GNU/Linux (hardening y optimización de servidores a nivel de kernel y volumen).
*   **Automatización:** Ansible (despliegue de playbooks y aprovisionamiento declarativo).
*   **Contenedores & Orquestación:** Gestión de entornos containerizados y laboratorios basados en Red Hat / OpenShift.

---

## 📁 Estructura del Proyecto

```text
.
├── .github/workflows/      # Pipelines de CI/CD automatizados
├── public/                 # Recursos estáticos globales y assets multimedia
├── src/                    # Código fuente en React (Componentes, vistas y lógica)
├── index.html              # Punto de entrada del DOM y metadatos base
├── package.json            # Dependencias del proyecto y scripts de compilación
├── tsconfig.json           # Configuración estricta del compilador de TypeScript
├── vite.config.ts          # Configuración del empaquetador Vite
└── README.md               # Documentación técnica del sistema
