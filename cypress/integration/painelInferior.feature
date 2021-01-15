Feature: Botões Inferiores
    Eu como tester desejo me aventurar em botões esquisitos e sem sentido no topo de uma página especificada.

    # RN 01
    Scenario: Botão alert demonstra mensagem
        Given ao abrir página
        When clico em botão alert
        Then recebo mensagem

    # RN 02
    Scenario: Botão confirm demonstra escolha
        Given ao abrir página
        When clico em botão confirm
        Then recebo escolha
    
    # RN 03
    Scenario: Botão prompt recebe número
        Given ao abrir página
        When abro prompt e coloco valor
        Then recebo mensagem com número enviado
        And recebo mensagem de confirmação

    # RN 04
    Scenario: Botão de voltar
        Given ao abrir página
        When clico em botão de voltar
        Then o link deve mudar
        And apresentar resultado



    
