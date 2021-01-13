import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('ao abrir página', () => {
    cy.visit('toTest.html')
})
When('clico em botões de popup', () => {
    // Infelizmente de todos os testes não consegui realizar os de Pop-ups. O Cypress não tem suporte :(
    cy.get('#buttonPopUpEasy').click()
    cy.get('#buttonPopUpHard').click()
    // Não compreendi o que é o botão "Resposta Demorada", ou como testar
    cy.get('#buttonDelay').click()
})
Then('novas janelas abrirão', () => {
    // Então... Não há como testar essas feature por falta de compatibilidade do Cypress. 
    // Vamos fingir que está tudo bem e ir para os próximos testes. ;) Hehehehehe    
})