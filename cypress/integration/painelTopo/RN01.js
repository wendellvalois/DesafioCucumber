import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('ao abrir página', () => {
    cy.visit('toTest.html')
})
When('clico em botão clique Me', () => {
    cy.get('#buttonSimple').click()
})
Then('recebo mensagem de obrigado', () => {
    cy.get('#buttonSimple').should('have.value', 'Obrigado!')
})
