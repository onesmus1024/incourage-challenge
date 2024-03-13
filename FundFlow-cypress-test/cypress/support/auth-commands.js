

Cypress.Commands.add('login', (email, password) => {
    cy.contains("Sign up")
    cy.get('[data-testId=login-link]').click()
    cy.contains("Log in")
    cy.get('[data-testId=email]').type(email).should('have.value', email)
    cy.get('[data-testId=password]').type(password).should('have.value', password)
    cy.get('[data-testId=login-button]').click()
    cy.wait(1000)
}

)

Cypress.Commands.add('signup', (name, email, password) => {
    cy.contains("Sign up")
    cy.get('[data-testId=name]').type(name).should('have.value', name)
    cy.get('[data-testId=email]').type(email).should('have.value', email)
    cy.get('[data-testId=password]').type(password).should('have.value', password)
    cy.get('[data-testId=signup-button]').click()
    cy.wait(1000)
}
)
