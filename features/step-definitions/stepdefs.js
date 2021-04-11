const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function ehSexta(hoje) {
    if (hoje === 'Sexta-feira') {
        return 'Bora Sextar'
    } else {
        return 'Não é'
    }
}

Given('hoje é Segunda-feira', function () {
    this.hoje = 'Segunda-feira';
});

Given('hoje é Sexta-feira', function () {
    this.hoje = 'Sexta-feira';
});

When('perguntarem se ja é Sexta-feira', function () {
    this.actualAnswer = ehSexta(this.hoje);
});

Then('responder {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});