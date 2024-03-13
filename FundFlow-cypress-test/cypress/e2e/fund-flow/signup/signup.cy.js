/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })


    it('can signup', () => {

        cy.contains("Sign up")
        cy.get('[data-testId=name]').type("test").should('have.value', 'test')
        cy.get('[data-testId=email]').type("test@gmail.com").should('have.value', 'test@gmail.com')
        cy.get('[data-testId=password]').type("123456").should('have.value', '123456')
        cy.get('[data-testId=signup-button]').click()
        cy.wait(2000)
    
      })

      it ( 'can not signup with a user that already exists', () => {
        cy.contains("Sign up")
        cy.get('[data-testId=name]').type("test").should('have.value', 'test')
        cy.get('[data-testId=email]').type("test@gmail.com").should('have.value', 'test@gmail.com')
        cy.get('[data-testId=password]').type("123456").should('have.value', '123456')
        cy.get('[data-testId=signup-button]').click()
        cy.contains("User already exists")
        cy.wait(1000)

        })
      it('can delete created user', () => {
        cy.login("test@gmail.com","123456")
        cy.wait(1000)
        cy.window().then((win) => {
            let user = win.localStorage.getItem('user');
            user = JSON.parse(user)
            cy.log(user.id)
            cy.request('DELETE','http://localhost:8080/api/v1/user/'+ user.id)

        })

        
      }
        

 
    )



})