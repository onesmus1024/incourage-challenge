import loan from '../../../fixtures/loan.json'
import happyuser from '../../../fixtures/happyuser.json'

describe('Apply Loan', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })

    it ('apply ', () => {
        cy.login(happyuser.email, happyuser.password)
        cy.get('[data-testId=apply-loan]').click()
        cy.contains("Apply for a loan")
        cy.get('[data-testId=amount]').type(loan.amount).should('have.value', loan.amount)   // pick a date
        cy.get('[data-testId=due-at]').type('2009-12-12')
        cy.wait(1000)
        cy.get('[data-testId=apply-loan-button]').click()
        cy.wait(1000)
        cy.visit('http://localhost:4200/')


    }
    )
})