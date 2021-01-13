/// <reference types="cypress" />
const { stringify } = require("querystring");

describe('Teste de recrutamento', function () {
    beforeEach(() => {
        cy.visit('toTest.html')
    })

    it('Testa botões do painel superior', () => {
        cy.get('#buttonSimple').click()
            .should('have.value', 'Obrigado!')

        // Infelizmente de todos os testes não consegui realizar os de Pop-ups. O Cypress não tem suporte :(
        // Uma opção para seria usar stub para observar a nova janela, mas não funcionou
        // cy.window().then((win) => {
        //     cy.stub(win, 'open').as('windowOpen')
        // })
        cy.get('#buttonPopUpEasy').click()
        cy.get('#buttonPopUpHard').click()
        cy.get('#buttonDelay').click()
        // Também não compreendi o que é o botão "Resposta Demorada", ou como testar
        cy.get('#buttonDelay').click()
    });

    it('Testa formulários e cadastro', function () {
        cy.get("#elementosForm\\:nome")
            .type('Manolo')
            .should('have.value', 'Manolo')

        cy.get("#elementosForm\\:sobreNome")
            .type('Sánchez')
            .should('have.value', 'Sánchez')

        cy.get('input[name="elementosForm:sexo"]')
            .check('M')
            .should('be.checked')

        cy.get('input[name="elementosForm:comidaFavorita"]')
            .check(['carne', 'frango', 'pizza'])
            .should('be.checked')

        cy.get('#elementosForm\\:esportes')
            .select(['Corrida', 'Karate'])
            .invoke('val')
            .should('deep.equal', ['Corrida', 'Karate'])

        cy.get('#elementosForm\\:escolaridade')
            .select('Superior')
            .should('have.value', 'superior')

        cy.get('#elementosForm\\:sugestoes')
            .type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
            .should('have.value', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

        // -------------- Checagem de Cadastro -----------------

        cy.wait(150)
        cy.get('#elementosForm\\:cadastrar').click()
        cy.get('#resultado > span')
            .should('have.text', 'Cadastrado!')
            .should('be.visible')
        cy.get('#descNome > span')
            .should('have.text', 'Manolo')
        cy.get('#descSobrenome > span')
            .should('have.text', 'Sánchez')
        cy.get('#descSexo > span')
            .should('have.text', 'Masculino')
        cy.get('#descComida > span')
            .should('contain.text', 'Carne')
            .should('contain.text', 'Frango')
            .should('contain.text', 'Pizza')
        cy.get('#descEscolaridade > span')
            .should('have.text', 'superior')
        cy.get('#descEsportes > span')
            .should('contain.text', 'Corrida')
            .should('contain.text', 'Karate')
        cy.get('#descSugestoes > span')
            .should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    })

    it('Testa tabela', function () {
        // Testa tamanho de tabela
        cy.get('#elementosForm\\:tableUsuarios > tbody > tr')
            .should('have.length', '5')
        cy.get('#elementosForm\\:tableUsuarios > tbody > tr:eq(0)>td')
            .should('have.length', '6')

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
                            .then(() => {
                                expect(stub.getCall(0)).to.be.calledWith(nome)
                            })
                    })

                    // Testa os outros inputs
                    cy.get('td').eq(3).within(() => {
                        cy.get('input[type=checkbox]')
                            .check()
                            .should('be.checked')
                    })

                    cy.get('td').eq(4).within(() => {
                        cy.get('input[type=radio]')
                            .check()
                            .should('be.checked')
                    })

                    cy.get('td').eq(6).within(() => {
                        cy.get('input[type=text]')
                            .type('Tudo Ok!')
                            .should('have.value', 'Tudo Ok!')
                    })
                })
            })

    })


    it('Testa botão Alert', function () {
        cy.on('window:alert', function (alertText) {
            expect(alertText).eq('Alert Simples')
        })
        cy.get('#alert')
            .click()
    })
    it('Testa botão Confirm', function () {
        cy.on('window:confirm', function (alertText) {
            expect(alertText).eq('Confirm Simples')
        })
        cy.on('window:alert', function (alertText) {
            expect(alertText).eq('Confirmado')
        })
        cy.get('#confirm')
            .click()
    })
    it('Testa botão Prompt', function () {
        cy.window().then(function ($win) {
            cy.stub($win, 'prompt').returns('5')
        })
        cy.on('window:confirm', function (alertText) {
            expect(alertText).eq('Era 5?')
        })
        cy.on('window:alert', function (alertText) {
            expect(alertText).eq(':D')
        })
        cy.get('#prompt')
            .click()
    })
    it.only('Testa link voltar', () => {
        cy.get('body > center > a').click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')
        cy.url().should('include', 'toTest.html#')
    });
})
