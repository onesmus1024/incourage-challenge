/// <reference types="cypress" />

import happyuser from '../../../fixtures/happyuser.json'
import invaliduser from '../../../fixtures/invalid-user.json'





describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })


    it('can login and logout', () => {
        cy.login(happyuser.email, happyuser.password)
        cy.get('[data-testId=logout]').click()
    })




})