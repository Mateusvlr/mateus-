let nomeusuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeusuário == ""){
    nomeusuário = prompt("qual o seu nome?");
}

if(nomeusuário == null){
    elemento.textContent = 'Seja muito bem-vindo.';
}else{
    elemento.textContent = nomeusuário;
}