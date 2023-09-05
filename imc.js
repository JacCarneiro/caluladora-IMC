var btn = document.getElementById('btn')

function imc(){
    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var res = document.getElementById('res')
    var tot = ''
    var imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))

    if(imc <= 18.5){
        tot = 'Abaixo do Peso'
    } else if (imc >= 18.5 && imc <=24.9){
        tot = 'Peso Ideal (Parabéns)'
    } else if (imc >= 25 && imc <= 29.9){
        tot = 'Levemente Acima do Peso'
    } else if (imc >= 30 && imc <= 34.9){
        tot = 'Obesidade Grau 1'
    } else if (imc >= 35 && imc <= 39.9){
        tot = 'Obesidade grau 2(Servera)'
    } 
    else{
        tot = 'Obesidade grau 3(mórbida)'
    }
    res.innerHTML = `<strong>${nome}</strong> seu IMC é ${imc.toFixed(2)}, e você está <strong>${tot}</strong>`
    
    
}
btn.addEventListener('click', imc)
