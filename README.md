# Playwright TypeScript Automation Tests

This repository contains automation tests written in Playwright with TypeScript for various scenarios such as metric conversions and weather verification. Follow the instructions below to set up, run, and manage the tests.

---

## Prerequisites

Ensure the following tools are installed:

1. **Node.js** (version 16 or higher)  
   Download and install from [Node.js Official Website](https://nodejs.org/).

2. **Package Manager**  
   - `npm` (comes with Node.js) or  
   - `yarn` (optional, install via `npm install -g yarn`).

3. **Playwright**  
   Installed as part of the project dependencies.

---

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/yonatansella/controlup
   cd controlup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## Running Tests

### Run All Tests
Run all tests in the project:
```bash
npx playwright test
```

### Run a Specific Test File
Run a specific test file:
```bash
npx playwright test tests/weather.spec.ts
```

### Run Tests in Headed Mode
Run tests in headed mode (visible browser):
```bash
npx playwright test --headed
```

### Generate a Test Report
Run tests and generate an HTML report:
```bash
npx playwright test --reporter=html
```

To view the report, open `playwright-report/index.html` in your browser.

---

## Project Structure

- **`src/logic/pages/`**  
  Contains Page Object Models (POM) for different pages.

- **`src/infra/`**  
  Infrastructure files like utilities, assertions, and helpers.

- **`src/tests/`**  
  Contains the test scripts.


