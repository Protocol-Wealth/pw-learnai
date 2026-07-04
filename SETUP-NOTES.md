# Beginner Setup Checklist

Follow this one-page checklist to verify your environment is ready.

## 🛠️ Step 1: Core Tooling & Verification

- [ ] **GitHub Account & SSH:** Ensure your GitHub account is authenticated and you can clone repositories.
- [ ] **Desktop / IDE Agent:** Install your preferred AI-assisted desktop editor or IDE extension (e.g., VS Code with Copilot, Cursor, or Claude Dev).
- [ ] **CLI Agent:** Ensure you have an AI-assisted command-line tool or terminal setup ready.

## ⚙️ Step 2: Repository Setup & Verification

- [ ] **Clone and Navigate:** Clone the repository locally and change directory into the root.
- [ ] **State Files Check:** Verify that config/state files (like `package.json`) are present in the root directory.
- [ ] **Build Project:** Run the verification build command in your terminal:

```bash
pnpm build
```

- [ ] **Verified Repo Check:** Confirm the build succeeds with zero errors to ensure a working local environment.

> **Note**
>
> This setup is static and client-only. No backend servers, telemetry tracking, environment secrets, or external runtime API calls are required to run this project.
