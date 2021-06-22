function edadPromedio(a,b,c,d){
    let sumatotal = a+b+c+d
    let resultado = sumatotal/4
    return resultado
}

let edad1 = parseInt(prompt("Ingrese su edad"))
let edad2 = parseInt(prompt("Ingrese su edad"))
let edad3 = parseInt(prompt("Ingrese su edad"))
let edad4 = parseInt(prompt("Ingrese su edad"))

alert(edadPromedio(edad1,edad2,edad3,edad4) + " es la edad promedio")
