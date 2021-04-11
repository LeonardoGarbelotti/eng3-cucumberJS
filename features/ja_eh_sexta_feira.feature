# language: pt

Funcionalidade: Ja eh sexta feira?
    Todo mundo quer saber se já é dia de sextar

  Cenario: Segunda não é Sexta-feira
    Dado hoje é Segunda-feira
    Quando perguntarem se ja é Sexta-feira
    Então responder "Não é"

  Cenario: Sexta é Sexta
    Dado hoje é Sexta-feira
    Quando perguntarem se ja é Sexta-feira
    Então responder "Bora Sextar"