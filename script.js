const mostraSenha = document.getElementById('senha');
const mostraTamanhoSenha = document.getElementById('tamanhoSenha');
const defineTamanhoSenha = document.getElementById('tamanho');
const checkLetraMaiuscula = document.getElementById('letraMaiuscula');
const checkLetraMinuscula = document.getElementById('letraMinuscula');
const checkNumero = document.getElementById('numero');
const checkSimbolo = document.getElementById('simbolo');
const botaoGerar = document.getElementById('gerar');
const botaoCopiar = document.getElementById('copiar');

const possiveisLetrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const possiveisLetrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const possiveisNumeros = "0123456789";
const possiveisSimbolos = "!@#$%^&*()_+[]{}<>?";

defineTamanhoSenha.addEventListener("input", () => {
    mostraTamanhoSenha.textContent = defineTamanhoSenha.value;
});

function gerarSenha() {
    let caracter = "";
    let senha = "";

    if (checkLetraMaiuscula.checked) caracter += possiveisLetrasMaiusculas;
    if (checkLetraMinuscula.checked) caracter += possiveisLetrasMinusculas;
    if (checkNumero.checked) caracter += possiveisNumeros;
    if (checkSimbolo.checked) caracter += possiveisSimbolos;

}