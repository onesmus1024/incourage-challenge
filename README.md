


# FUNDFLOW - A simple loan management system

## Introduction

Fundflow is a simple loan management system that allows you to manage loans, borrowers, and payments. 
It is built using NODEJS, EXPRESS, and MSSQL.

## Prerequisites

- NodeJS
- MSSQL
- NPM
- Git


## Features

- Add, Edit, and Delete Loans
- Signup and Login
- Credit Score Calculation



## Installation

1. Clone the repository

```bash https://github.com/onesmus1024/incourage-challenge.git```

2. You will get five folders: 
    - FundFlow-backend
    - fundflow-frontend
    - fundflow-cypress-test
    - fundflow-api-test
    - fundflow-background-service
    - README.md


3. Navigate to the FundFlow-backend folder and install the dependencies
    
    ```bash cd FundFlow-backend```
    
    ```bash npm install```
    <!-- install mssql db -->

4. Install MSSQL and create a database called `fundflow`

5. Create a `.env` file in the root of the FundFlow-backend folder and add the following environment variables

    ```bash
    PORT=3000
    DB_SERVER=your_db_server
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_DATABASE=fundflow
    ```
6. Creating the tables, storedprocedures and triggers

    locate a file called seed.ts in the root of the FundFlow-backend folder and run the following command

    ```bash ts-node seed.ts```

7. Start the server

    ```bash npm start```

8. Navigate to the FundFlow-frontend folder and install the dependencies

    ```bash cd FundFlow-frontend```
    
    ```bash npm install```

9. Create a `.env` file in the root of the FundFlow-frontend folder and add the following environment variables

    ```bash
    REACT_APP_API_URL=http://localhost:8080/api/v1
    PORT = 4200
    ```
10. Start the frontend

    ```bash npm start```

11. Navigate to the FundFlow-cypress-test folder and install the dependencies

    ```bash cd FundFlow-cypress-test```
    
    ```bash npm install```

12. Run the cypress tests

    ```bash npm run cypress:open```

13. Navigate to the FundFlow-api-test folder and install the dependencies

    ```bash cd FundFlow-api-test```
    
    ```bash npm install```

14. Run the api tests

    ```bash npm test```

15. Navigate to the FundFlow-background-service folder and install the dependencies

    ```bash cd FundFlow-background-service```
    
    ```bash npm install```

16. Start the background service

    ```bash npm start```

## Usage

1. Signup and login to the application
2. Apply for a loan
3. Calculate your credit score



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Author

### Onesmus Wambugu



## Acknowledgements

- [MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

- [NodeJS](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Cypress](https://www.cypress.io/)

- [Jest](https://jestjs.io/)

- [React](https://reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

