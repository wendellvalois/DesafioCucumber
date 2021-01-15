Feature: Botões superiores
    Eu como tester 
    quero observar interagir com botões esquisitos e sem sentido no topo de uma página.

    # RN 01
    Scenario: Botão clique Me deve retornar uma boa mensagem
        Given ao abrir página
        When clico em botão clique Me
        Then recebo mensagem de obrigado
    # RN 02
    Scenario: Botões de Popup devem abrir nova janela
        Given ao abrir página
        When clico em botões de popup
        Then novas janelas abrirão



    

