
# Express Calculator

This is a simple web-based calculator application built using Node.js, Express, and jQuery. It performs basic arithmetic operations and a few advanced calculations like percentage, GCD, and exponentiation.

## Project Structure

The project has the following structure:

- `.github/workflows/`: Contains the CI/CD pipeline for GitHub Actions.
- `src/`:
    - `modules/`: Contains the core logic for the calculator.
        - `calculation/`: Holds the main calculation functions.
            - `numberCruncher.js`: The central module for performing calculations based on the operator.
            - `util/`: Helper functions for specific calculations.
                - `exp.js`: Handles exponential calculations.
                - `gcd.js`: Handles Greatest Common Divisor (GCD) calculations.
                - `percentage.js`: Handles percentage calculations.
        - `server.js`: Sets up the Express server.
- `public/`:
    - `scripts/`:
        - `client.js`: Frontend JavaScript for handling user interactions and making API calls.
    - `stylesheets/`:
        - `styles.css`: Styles for the calculator's user interface.
    - `views/`:
        - `index.html`: The main HTML file for the calculator's user interface.
- `tests/`:
    - `unit/`: Contains unit tests for individual modules.
        - `unit.test.js`: Tests for the `numberCruncher`, `gcd`, `exp`, and `percentage` functions.
    - `integration/`: Contains integration tests.
        - `integration.test.js`: Tests for the API endpoints using `supertest`.
- `app.js`: The main entry point of the application.
- `Jenkinsfile`: Defines the CI/CD pipeline for Jenkins.
- `package.json`: Manages project dependencies and scripts.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [[https://github.com/](https://github.com/patriques82/node_calculator)]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the server, run the following command:

```bash
npm start
```
### The application will be live at http://localhost:3000.

## Testing
The project includes unit and integration tests.

# To run all tests:

Bash
```
npm test
```
# To run unit tests specifically:

Bash
```
npm run unit-test
```
# To run integration tests specifically:

Bash
```
npm run integration-test
```
### CI/CD Pipelines
This project is configured with two CI/CD pipelines:

# Jenkins: 
The pipeline is defined in the Jenkinsfile. It includes stages for building (installing dependencies), running unit tests, and running integration tests.

# GitHub Actions: 
The pipeline is defined in the .github/workflows/ci.yml file. It also includes stages for building, unit testing, and integration testing.

To trigger the pipelines, simply push a commit to the repository. For Jenkins, you may need to configure a webhook or trigger a manual scan.
