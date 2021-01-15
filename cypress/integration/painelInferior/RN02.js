let alertAppear = false;
When('clico em botão confirm', () => {

        cy.on('window:confirm', function (alertText) {
            // expect(alertText).eq('Confirm Simples')
        })
        cy.on('window:alert', function (alertText) {
            if(alertText == 'Confirmado'){
                alertAppear = true;
            }
        })
        cy.get('#confirm')
            .click()

})
Then('recebo escolha', () => {
    cy.wrap(alertAppear).should('be.true')
})



