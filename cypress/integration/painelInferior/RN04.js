When('clico em botão de voltar', () => {
    cy.get('body > center > a').click()
})

Then('o link deve mudar', () => {
    cy.get('body > center > a').click()
})

And('apresentar resultado', () => {
    cy.get('#resultado')
    .should('have.text', 'Voltou!')
})
