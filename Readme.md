# BeMaster Test

# Project Description
GraphQL API developed using Node.js with the Express framework. It implements hexagonal architecture and for testing purposes, it consists of only one query which consumes the GitHub REST API and returns the 10 most popular repositories of the user "google".


## Features
- Node JS
- Express
- Typescript
- Hexagonal Architecture
- GraphQl
- Dotenv
- Lint
- Jest


## Requirements
This system makes use of the native fetch function, therefore it must be run with Node version v21.7.1 or higher.


## Installation
1. Clone this repository to your local machine.  
    ```bash
    git clone git@github.com:Brekkaz/test-bemaster.git
    ```

2. Navigate to the project folder.  
    ```bash
    cd test-bemaster
    ```

3. Install the dependencies.  
    ```bash
    npm install 
    ```

4. Configuration  
    Create a `.env` file in the root of the project and set up the environment variables based on the `.env.example` file.

5. Execution  
    - Local: Run the application using the command.
    ```bash
    npm run start:dev
    ```
    
    - Docker: Run the application using Docker.
    ```bash
    docker compose up --build
    ```

9. Usage  
    Navigate to `http://localhost:4000/graphql` where you can find the application's playground.


## Scripts
In this section, you will find a list of npm scripts used in this project. Scripts are predefined commands that help automate common tasks, making development and maintenance easier. Each command should be run using `npm run <script-name>`.

- `start:dev`: Runs the development server using ts-node-dev. This command starts the application in development mode, automatically restarting it when files change.
- `start:prod`: Compiles the TypeScript code into JavaScript using tsc (TypeScript compiler) and then runs the compiled code with Node.js. This command is used to start the application in production mode.
- `test`: Runs the test suite using jest. This command executes all test files to ensure that the application works as expected.
- `coverage`: Runs the test suite with code coverage reporting enabled. This command generates a report showing how much of the codebase is covered by tests.
- `lint`: Runs eslint on the source code in debug mode. This command checks the code for any linting errors according to the project's linting rules.
- `lint-fix`: Runs eslint with the --fix option. This command checks the code for linting errors and automatically fixes any issues that can be corrected programmatically.
  

## Hexagonal Architecture
This project follows the hexagonal architecture pattern, separating concerns into distinct layers:
- **Application Layer**: Contains business logic and use cases.
- **Adapter Layer**: Adapts external frameworks and libraries to the application layer.
- **Domain Model**: Contains domain entities and business rules.


## Contributors
- Breyner Mola \<breyner.mola.9@gmail.com\>


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Note
In the folder `exercises`, the answers to the other parts of the test are separated by files and numbered.