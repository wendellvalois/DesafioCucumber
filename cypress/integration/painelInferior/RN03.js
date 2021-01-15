When('abro prompt e coloco valor', () => {
    cy.window().then(function ($win) {
        cy.stub($win, 'prompt').returns('5')
    })
})
Then('recebo mensagem com número enviado', () => {
    cy.on('window:confirm', function (alertText) {
        expect(alertText).eq('Era 5?')
    })
})
And('recebo mensagem de confirmação', () => {
    cy.on('window:alert', function (alertText) {
        expect(alertText).eq(':D')
    })
})