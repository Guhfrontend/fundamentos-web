
function hello(){
    alert("Hello World");
}
let nome = document.getElementById('nome');
let botao = document.querySelector('#botao');
function nomeValido(){
    
    if(nome.value.length < 3){
        alert("nome inválido " + nome.value);
    }else{
        alert("Nome válido " + nome.value);
    }
}