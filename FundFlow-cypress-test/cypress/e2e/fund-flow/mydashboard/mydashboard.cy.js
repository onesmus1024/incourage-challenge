/// <reference types="cypress" />
import happyuser from '../../../fixtures/happyuser.json'
describe('Fundflow Dashbord', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })

    it ('can see the dashboard', () => {
        cy.login(happyuser.email, happyuser.password)
        cy.wait(1000)
        cy.contains("Loans Dashboard")
        cy.wait(1000)
        

    }
    )
})
