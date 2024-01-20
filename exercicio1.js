//atividade 1 - calcular o IMC
let peso;
let altura;
function exibirNaTela( id, texto ){
    let campo = document.getElementById( id );
    campo.textContent = texto;
}

exibirNaTela( 'atividade_1', 'Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.' );

limparCampo();      

function imc( peso, altura ) {
    let imc = 0;
    imc = peso / Math.pow( altura, 2 );
    return imc.toFixed(2);
 }

 function calcularImc() {
    peso = document.getElementById( 'peso' ).value;
    altura = document.getElementById( 'altura' ).value;

    if (isNaN(peso) || isNaN(altura)) {
        exibirNaTela( 'resultadoImc', 'erro' );
    } else {
        resultadoImc = imc( peso, altura );
        exibirNaTela( 'resultadoImc', resultadoImc );   
        limparCampo();
    }    
 }

 function limparCampo() {
    peso = document.getElementById( 'peso' );
    altura = document.getElementById( 'altura' );
    
    if ( peso && altura ) {
        peso.value = '';
        altura.value = '';
    } else {
        console.error( 'IDs de campos inválidos' );
    }
    
 }

//---------------------------------------------------------------------------------------------


 