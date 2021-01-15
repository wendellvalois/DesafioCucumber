let alertAppear = false;

Given('ao abrir página', () => {
    cy.visit('toTest.html')
})
When('clico em botão alert', () => {
    cy.on('window:alert', function (alertText) {
        // expect(alertText).eq('Alert Simples')
        alertAppear = false;
        if(alertText == 'Alert Simples'){
            alertAppear = true;
        }
    })
    cy.get('#alert')
    .click()
})
Then('recebo mensagem', () => {
    cy.wrap(alertAppear).should('be.true')
})