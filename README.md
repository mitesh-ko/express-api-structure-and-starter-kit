# Express API Structure and Starter Kit

---

This project is created to provide a structured and scalable starting point for building RESTful APIs using Express.js. It follows modern JavaScript (ES6+) standards and includes essential middleware and utilities for common API features like authentication, file handling, database integration, and more.

## Features

- Organized project structure for easy scalability
- Environment variable support via `.env`
- MongoDB integration using Mongoose
- Asynchronous route error handling
- File upload support
- CORS enabled
- Secure password hashing with bcrypt
- Date handling with dayjs

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB / Mongoose**
- **JavaScript (ES6)**

## Installed Packages

- [`express`](https://www.npmjs.com/package/express) – Web framework for building API endpoints
- [`mongoose`](https://www.npmjs.com/package/mongoose) – MongoDB ODM for schema-based data modeling
- [`bcrypt`](https://www.npmjs.com/package/bcrypt) – Password hashing
- [`dotenv`](https://www.npmjs.com/package/dotenv) – Loads environment variables from `.env` file
- [`cors`](https://www.npmjs.com/package/cors) – Enables CORS for API access
- [`body-parser`](https://www.npmjs.com/package/body-parser) – Middleware to parse incoming request bodies
- [`dayjs`](https://www.npmjs.com/package/dayjs) – Lightweight date library
- [`express-async-handler`](https://www.npmjs.com/package/express-async-handler) – Middleware to handle async errors
- [`express-fileupload`](https://www.npmjs.com/package/express-fileupload) – Simple file upload middleware

## Dev Dependencies
This project includes several developer tools to enhance code quality, enforce consistency, and streamline development.

### Linting & Code Quality
- **eslint** – Linting tool to enforce coding standards and catch errors early.
- **@eslint/eslintrc** – Provides compatibility for ESLint config files, especially useful for shared or legacy configs.
- **lint-staged** – Runs linters (like ESLint) only on staged Git files, improving performance during commits.

### Git Hooks
- **husky** – Enables Git hooks (e.g., pre-commit, pre-push) to run checks or scripts automatically.
   - Used with `lint-staged` to prevent committing code that doesn't meet linting standards.

### Development Workflow
- **nodemon** – Automatically restarts the server when file changes are detected, speeding up development.
- **migrate-mongo** – Handles versioned MongoDB migrations for database schema and data updates.
   - Useful for maintaining consistent DB structure across development, staging, and production.

These tools together help ensure high-quality, maintainable, and consistent code while making the development process faster and more efficient.

## API Documentation

This project includes comprehensive API documentation using **Swagger** and **Stoplight Elements**.

You can access the documentation in the following formats:

- **JSDoc Format**  
  API routes are documented inline using JSDoc-style comments, and automatically parsed by Swagger tools.

- **YAML Format**  
  A `openapi.yaml` file is generated and available for use with Swagger-compatible tools.

- **Stoplight Elements (Interactive UI)**  
  The `openapi.yaml` file is rendered using [Stoplight Elements](https://github.com/stoplightio/elements), offering a modern and interactive interface to explore and test the API.

### How to generate or update the YAML file

Run the following command to export the Swagger spec from JSDoc comments to a YAML file at project root:

```bash
npm run swagger:export
```

### Prerequisites

- Node.js (v20+ recommended)
- MongoDB (local or cloud)
