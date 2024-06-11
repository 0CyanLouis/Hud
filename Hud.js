const form = document.getElementById("form_cadastro");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    form.reset();
    
})


function myFunction() {
    var x = document.getElementById("esconder");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    var imagem = document.getElementById("minhaImagem");

    if (imagem.src.match("olhoaberto.png")) {
        imagem.src = "olhofechado.png";
    } else {
        imagem.src = "olhoaberto.png";
    }
 } 
function myFunction1() {
    var x = document.getElementById("esconder1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    var imagem = document.getElementById("minhaImagem1");

    if (imagem.src.match("olhoaberto.png")) {
        imagem.src = "olhofechado.png";
    } else {
        imagem.src = "olhoaberto.png";
    }
 } 

/*quero criar duas funções distintas a primeira(function Codigo) gera um código 
aleatório em uma faixa de 0 a 1000 e depois armazena ele em uma variável, e a segunda (function Verificar) verifica 
se o código que eu inseri num input de texto é o mesmo que o código armazenado na variável */

//buttGerarCodigo.addEventListener ("click",function gerarCodigo() {

    var codigoArmazenado = null;


    var gerarCodigoForm = document.getElementById("gerarCodigoForm");
    gerarCodigoForm.addEventListener ("submit", function(event) {
        event.preventDefault(); // Evita a submissão padrão do formulário

        var userInput = document.getElementById("userInput").value 
        if(userInput.trim() === ""){
            alert("Por favor, preencha o campo de usuario, email, ou numero.");
            return;
        }

    codigoArmazenado = Math.floor(Math.random() * 1001); // Gera um número aleatório entre 0 e 1000
    alert("Código gerado é: " + codigoArmazenado);
});

function verificarCodigo() {
    var codigoInserido = parseInt(document.getElementById("inputCodigo").value);
    if (codigoInserido === codigoArmazenado) {
        alert("Código correto!");
    }
     else {
    alert("Código incorreto");
    }
 }


function alertLogin() {
    alert("Login Realizado com Sucesso!");
}

function amarelo(x) {
    x.style.backgroundColor = "yellow";
};
function verde(x) {
    x.style.backgroundColor = "lightgreen"
};
function vermelho(x) {
    x.style.backgroundColor = "#eb1423"
    x.style.color = "white"
};
function branco(x){
    x.style.background="white";
    x.style.color = "black"
};
function esqueci() {
    window.location.href = "esqueci.html";
};
function loginRealizado(){  
    window.location.href = "loginRealizado.html"
}


function funcao1() {
    alert("codigo foi enviado para seu e-mail");
    preventdefault 
}
function funcao2(){
window.location.href="redefinido.html"

}

function a(x){
x.style.backgroundColor="black";

}
function b(x){
    x.style.backgroundColor="white"    
}

function funcao1() {
    alert("codigo foi enviado para seu e-mail");
}
function funcao2(){
    function sendMail() {
        var link = "mailto:luisgustavo.ribeiro27@gmail.com"
                 + "?cc=luisgustavo.ribeiro27@gmail.com "
                 + "&subject=" + escape("code")
                 + "&body=" + escape(document.getElementById('myText').value)
        ;
    
        window.location.href = link;
    }}