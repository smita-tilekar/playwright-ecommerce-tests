## Playwright E-Commerce Tests

### CI Status
[![CI](https://github.com/USER/REPO/actions/workflows/playwright.yml/badge.svg)](https://github.com/USER/REPO/actions/workflows/playwright.yml)

This is a UI automation framework built with Playwright and TypeScript.  
It tests the `saucedemo.com` e-commerce site using the Page Object Model (POM), with support for data-driven testing, config management, and HTML reporting.

## ✅ Features
- Page Object Model (POM) structure
- Data-driven tests using external JSON files
- Positive and negative login scenarios
- Full checkout flow with multiple data sets
- Sorting tests (price low to high, high to low)
- Cancel order and logout flows
- HTML test report via `npx playwright show-report`
- Config-driven base URL (in `config/app-config.json`)

## 🚀 CI Integration
This project can be integrated with GitHub Actions for Continuous Integration.

When configured, on each push or pull request:
- Code is checked out and dependencies installed
- Playwright and browsers are set up
- All tests run headlessly
- HTML report is generated and uploaded as an artifact

You can view the workflow under the Actions tab. Use a workflow like `actions/workflows/playwright.yml`.

## 🧪 Test Scenarios Covered
- Valid and invalid login attempts
- Add items to cart
- Checkout flow with dynamic user and product data
- Cancel order and return to homepage
- Product sorting validations

## 📁 Folder Structure
```
├── pages/           -> Page object files
├── tests/           -> Test specs (login, checkout, sorting, etc.)
├── testdata/        -> JSON test data (e.g., users.json)
├── utils/           -> Config loader and helpers
├── config/          -> app-config.json (env settings like baseUrl)
├── playwright-report/ -> HTML reports output
├── test-results/    -> Per-test artifacts (screenshots, videos)
└── playwright.config.ts
```

## ▶️ How to Run Tests
Install dependencies and browsers:
```bash
npm install
npx playwright install
```
Run all tests:
```bash
npx playwright test
```
Run a single spec:
```bash
npx playwright test tests/HomePage.spec.ts
```
Filter by test title:
```bash
npx playwright test -g "Sort items by Price Low to High"
```
Open HTML report:
```bash
npx playwright show-report
```
Headed/debug run (Windows PowerShell):
```powershell
$env:PWDEBUG=1
npx playwright test --headed
```

## 📸 Sample HTML Report
Playwright generates an HTML report after each run using `npx playwright show-report`. To avoid committing generated files, the report folder is typically excluded. If you want to show a sample:

- Folder: `SampleResult/`
- File: `ReportSS1.png`

## 💡 Notes
- Test data is stored externally in `testdata/` to support scalable, data-driven testing.
- The `playwright-report/` folder is generated and should not be committed.
- The base URL is read from `config/app-config.json` via `utils/config.ts`.
- Use custom env vars for secrets to avoid OS collisions (e.g., `E2E_USERNAME`, `E2E_PASSWORD`).

## 🧰 Tech Stack
- Playwright
- TypeScript
- Node.js
- JSON-based test data

## 👩‍💻 About Smita Tilekar — QA Engineer | Engineering in Computer Science


## ⚠️ Disclaimer
This project is part of a personal QA portfolio, created to demonstrate skills and experience. Please do not reuse or distribute without permission.

