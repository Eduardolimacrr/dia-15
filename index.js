//DECLARANDO ARRAYS QUE VAMOS UTILIZAR
let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

//declarando a funcao com os parametros pedidos
function AcharNumerosEmComum(ArrayUm, ArrayDois){
    let resultado = [] //declarando array de numeros em comum
    let contadorResultado = 0 // contador desse array

   //o primeiro for percorre o arrayUm
    for (let i = 0; i < ArrayUm.length; i++){

        for (let j = 0; j < ArrayDois.length; j++){

            if(ArrayUm[i] == ArrayDois[j]){
            resultado[contadorResultado] = ArrayUm[i]
            contadorResultado++
            j = ArrayDois.length
            }
        }
    }

    return  resultado 

}
console.log(AcharNumerosEmComum(arrayA, arrayB))