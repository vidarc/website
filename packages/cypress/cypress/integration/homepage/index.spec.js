/// <reference types="Cypress" />

context('Home Page', () => {
  it('visits the home page and sees the correct text', () => {
    cy.visit('/')

    cy.get('#welcome-text')
      .should('exist')
      .and('have.text', 'Hello everybody! My name is Matthew Ailes. This is the home screen.')
  })
})
