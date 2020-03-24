// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

context('Make sure everything actually loads', () => {
  it('visits the home page and it renders', () => {
    cy.visit('/')

    cy.get('#welcome-text')
      .should('exist')
      .and('have.text', 'My name is Matthew Ailes and this is my website.')
  })

  it('then visits the game of life app and it renders', () => {
    cy.visit('/gameoflife')

    cy.get('#game-of-life-home').should('exist').and('have.text', "Conway's Game of Life")
  })

  it('then visits the star wars app and it renders', () => {
    cy.visit('/starwars')

    cy.get('#star-wars-home').should('exist').and('have.descendants', 'h1')
    cy.get('#star-wars-home > h1')
      .should('exist')
      .and('have.text', 'Star Wars Database (based on swapi.com)')
  })

  it('then visits the todo app and it renders', () => {
    cy.visit('/todo')

    cy.get('#todo-app-home').should('exist')
  })

  it('then visits the gallery app and it renders', () => {
    cy.visit('/gallery')

    cy.get('#gallery-title').should('exist')
  })
})
