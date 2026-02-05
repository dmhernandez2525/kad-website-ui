# kad-website-ui Architecture

**Version:** 1.0.0
**Last Updated:** February 03, 2026

---

## System Overview

**KAD Website** is a portfolio/marketing website for KAD Consulting, LLC - an ERP development and strategy partner for growing brands. The site showcases the company's mission, services, process, and team.

## High-Level Diagram

```
Users / Operators
        │
        ▼
kad-website-ui Core
        │
        ├── Local State / Data Storage
        └── External Integrations / APIs
        │
        ▼
Outputs (UI, Reports, Exports, Logs)
```

## Technology Stack

| Layer | Current | Target |
|-------|---------|--------|
| Framework | React 17 + CRA | React 19 + Vite |
| Styling | SCSS | Tailwind CSS v4 |
| Components | Custom | shadcn/ui |
| Forms | react-hook-form | react-hook-form + Zod |
| Email | EmailJS | Resend |
| Deployment | Render | Render |

## Directory Structure (Top-Level)

```
docker-compose.yml
Dockerfile
nginx.conf
package-lock.json
package.json
public/
README.md
render.yaml
ROADMAP.md
src/
tsconfig.json
```

## Data Flow

1. User initiates action (UI/CLI/task).
2. Core logic processes input, validates rules, and triggers integrations.
3. State is persisted (local files, DB, or external systems).
4. Output is rendered to UI, exported, or logged.

## Deployment & Runtime

- Docker Compose
- Render deployment
- Node.js/JavaScript
- Dockerfile

## Security & Quality

- Follow global forbidden/required patterns and lint/typecheck rules
- No hardcoded secrets; use environment variables
- Log errors through approved logger patterns (no console.*)

## Observability

- Structured logs for key workflows
- Health checks for integrations and background tasks
