const texto = document.getElementById("usuario");
const imagem = document.getElementById("usuario-foto");
const login = document.getElementById("botao-login")

function chamarLogin(){
    let usuario = prompt("Qual o nome de usuário: ")
    texto.innerText = usuario;
}