Feature: Cadastro de pessoa
    Eu como cliente da empresa desejo realizar meu cadastro.

    # RN 01
    Scenario: Cadastro completo
        Given ao abrir página
        When preencho dados no formulário
        And concluo cadastro
        Then recebo resposta de conclusão

    # RN 02
    Scenario: Funcionamento de tabela linha a linha
        Given ao abrir página
        When preencho dados de toda a tabela e interajo com componentes
        # Then nada acontece, feijoada (não enxerguei um propósito para a tabela a não ser preencher)
        