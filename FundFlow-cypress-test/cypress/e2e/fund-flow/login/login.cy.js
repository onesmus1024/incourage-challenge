/// <reference types="cypress" />

import happyuser from '../../../fixtures/happyuser.json'
import invaliduser from '../../../fixtures/invalid-user.json'





describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })


    it('can login', () => {
        cy.login(happyuser.email, happyuser.password)
    })

    it ( 'can not login with wrong credentials', () => {
        cy.login(invaliduser.email, invaliduser.password)

    })
})