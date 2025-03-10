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
    /*console.log(caracter);*/
    
    for (let index = 0; index < defineTamanhoSenha.value; index++) {
        const aleatorio = Math.floor(Math.random() * caracter.length);
        senha = senha + caracter[aleatorio];
        /*console.log(senha);*/
    }

    mostraSenha.value = senha;

}

botaoCopiar.addEventListener("click" , () => {
    if (mostraSenha.value === ""){
        alert("Gere uma senha antes de copiar!");
        return;
    } else {
        navigator.clipboard.writeText(mostraSenha.value);
        alert("Senha copiada!");
    }
});

botaoGerar.addEventListener("click", gerarSenha);


    
