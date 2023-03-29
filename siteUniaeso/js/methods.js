var periodo = document.querySelector("#periodo")
var curso = document.querySelector("#curso")
var resultado = document.querySelector("span");

function calcular(){
    let valor = parseFloat(periodo.value)
    let res
    let valorBase = 500
    switch (valor) {
        case 1:
            if(curso.value == "ads"){
                res = valorBase+(valorBase*10/100)
            }else{
                res = valorBase+(valorBase*15/100)
            }
            break;
        case 2:
            if(curso.value == "ads"){
                res = valorBase+(valorBase*11/100)
            }else{
                res = valorBase+(valorBase*16/100)
            }
            break;
        case 3:
            if(curso.value == "ads"){
                res = valorBase+(valorBase*12/100)
            }else{
                res = valorBase+(valorBase*17/100)
            }
            break;
        case 4:
            if(curso.value == "ads"){
                res = valorBase+(valorBase*13/100)
            }else{
                res = valorBase+(valorBase*18/100)
            }
            break;
        default:
            res = 123
            break;
    }
    resultado.innerHTML = "Mensalidade: "+res
}