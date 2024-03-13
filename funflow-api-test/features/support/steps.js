const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { stash} = require('pactum');
const pactum = require('pactum');

// POST http://localhost:8080/api/v1/loan
// Content-Type: application/json
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljNTI2OThmLTNjZjQtNGI5Yi04NDZkLThkYjRjNTJjYjFmMCIsImVtYWlsIjoiaGFwcHl1c2VyQGdtYWlsLmNvbSIsIm5hbWUiOiJoYXBweXVzZXIiLCJpYXQiOjE3MTAyNzY1NTEsImV4cCI6MTcxMDI4MDE1MX0.lnEKrUOZCtqX7PVSZNmTG-bC1r0pKuFkNF0WLO_eQj0
// {
//   "user_id": "b0028333-6371-4ea9-abb7-239ab4308234",
//   "amount": "1000",
//   "interest_rate": "0.1",
//   "due_at": "2021-01-01"
// }



stash.addDataTemplate({
    'User': {
        "email": "happyuser@gmail.com",
        "password": "123456"
      
    }
  });


stash.addDataTemplate({
    'Loan': {
        "amount": 1000,
        "interest_rate": "0.1",
        "due_at": "2021-01-01"
    }
  });



let spec = pactum.spec();

Before(() => {
    spec = pactum.spec();
});
    
Given('a user logs in with email and password', async function () {
    await spec
    .post('http://localhost:8080/api/v1/user/login')
    .withJson({
        '@DATA:TEMPLATE@': 'User',
    });
  }
);

Then('the response status code should be {int}', async function (statusCode) {
    await spec.expectStatus(statusCode);
  }
);

// Scenario: User logs in with invalid email and password
// Given a user logs in with invalid email and password
// Then the response status code should be 401

Given('a user logs in with invalid email and password', async function () {
    await spec
    .post('http://localhost:8080/api/v1/user/login')
    .withJson({
        email: "test@gmial.com",
        password: "123456"
    });
    }
    
);



When(' they apply for a loan', async function () {
    await spec
    .post('http://localhost:8080/api/v1/loan/apply')
    .withJson({
        amount: 1000,
        term: 12
    });
  }
);








 