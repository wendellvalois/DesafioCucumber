import { Given } from "cypress-cucumber-preprocessor/steps";

Given('ao abrir página', () => {
    cy.visit('toTest.html')
})
When('preencho dados no formulário', () => {
    cy.get("#elementosForm\\:nome")
        .type('Manolo')

    cy.get("#elementosForm\\:sobreNome")
        .type('Sánchez')

    cy.get('input[name="elementosForm:sexo"]')
        .check('M')

    cy.get('input[name="elementosForm:comidaFavorita"]')
        .check(['carne', 'frango', 'pizza'])

    cy.get('#elementosForm\\:esportes')
        .select(['Corrida', 'Karate'])
        .invoke('val')

    cy.get('#elementosForm\\:escolaridade')
        .select('Superior')

    cy.get('#elementosForm\\:sugestoes')
        .type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

})
And('concluo cadastro', () =>{
    cy.wait(150)
    cy.get('#elementosForm\\:cadastrar').click()
})
Then('recebo resposta de conclusão', () => {
    cy.get('#resultado > span')
        .should('have.text', 'Cadastrado!')
        // .should('be.visible')
})
