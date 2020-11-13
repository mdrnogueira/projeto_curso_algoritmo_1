/*

   
   se operacao = "+" entao
      resultado := valor1 + valor2
   senão
        se operacao = "-" entao
           resultado := valor1 - valor2
        senão
             se operacao = "*" entao
                resultado := valor1 * valor2
             senão
                se operacao = "/" entao
                   resultado := valor1 / valor2
                fimse
             fimse
        fimse
   fimse
   escreva("Resultado do calculo é: ", resultado)

*/



function acaoBotao() {
    var valor1, valor2, resultado, operacao
    valor1 = prompt ("Digite o primeiro valor: ")
    operacao = prompt ("Digite a operação: Ex: + , - , * , / ")
    valor2 = prompt ("Digite o segundo valor: ")
    
    if (operacao == "+"){
    resultado = parseInt(valor1) + parseInt(valor2)
    }else if(operacao == "-"){
    resultado = parseInt(valor1) - parseInt(valor2)
    }else if(operacao == "*"){
    resultado = parseInt(valor1) * parseInt(valor2)
    }else if(operacao == "/"){
    resultado = parseInt(valor1) / parseInt(valor2)
    }
    document.getElementById("paragrafo").innerText = resultado
}


