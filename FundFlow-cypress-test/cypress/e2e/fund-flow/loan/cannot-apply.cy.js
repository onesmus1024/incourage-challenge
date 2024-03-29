
import unhappyuser from '../../../fixtures/unhappyuser.json'

describe('can not apply loan if credit score is less 30%', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })

    it ('apply ', () => {
        cy.login(unhappyuser.email, unhappyuser.password)
        cy.wait(1000)
        cy.get('[data-testId=apply-loan]').click()
        cy.wait(1000)
        cy.contains("You are not eligible for a loan your credit score is too low")
        cy.wait(1000)


    }
    )
})