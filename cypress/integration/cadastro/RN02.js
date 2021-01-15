
When('preencho dados de toda a tabela e interajo com componentes', () =>{
    cy.get('#elementosForm\\:tableUsuarios > tbody > tr')
        cy.get('#elementosForm\\:tableUsuarios > tbody > tr:eq(0)>td')

        // Loop com testes pra cada elemento da tabela 
        cy.get('#elementosForm\\:tableUsuarios > tbody > tr')
            .each(function ($row, index, $rows) {
                cy.wrap($row).within(function () {
                    const stub = cy.stub()
                    // Teste do botão de alerta
                    var nome = ''
                    cy.get('td').eq(0).then(($text) => {
                        nome = $text.text()
                    })

                    cy.on('window:alert', stub)

                    cy.get('td').eq(2).within(() => {
                        cy.get('input[type=button]')
                            .click()
                    })

                    // Testa os outros inputs
                    cy.get('td').eq(3).within(() => {
                        cy.get('input[type=checkbox]')
                            .check()
                    })

                    cy.get('td').eq(4).within(() => {
                        cy.get('input[type=radio]')
                            .check()
                    })

                    cy.get('td').eq(6).within(() => {
                        cy.get('input[type=text]')
                            .type('Tudo Ok!')
                    })
                })
            })
})
Then('nada acontece, feijoada', () => {
    // No outro aquivo com teste simples, sem BDD, eu testo cada campo se foi realmente preenchido, checkboxes, radiobuttons e inputs
    // Nesta etapa não vi necessidade e não enxerguei uma condição de verificação final
})
