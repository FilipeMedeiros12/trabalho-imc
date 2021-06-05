function calcular() {

    var nome = document.getElementById('nome').value;

    var altura = parseFloat(document.getElementById('altura').value);

    var peso = parseInt(document.getElementById('peso').value);

    var mensagem = "seu imc é de "

    

    valor =  peso / (altura * altura);

    document.getElementById('resultado').value = nome + ' ' + mensagem + '' + valor.toFixed(2)   ;
}