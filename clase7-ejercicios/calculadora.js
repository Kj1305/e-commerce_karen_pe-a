const operacion =  (prompt ("ingrese la operacion que desea realizar "))
const numero1 = Number(prompt ("ingresa el primer numero de la operacion"))
const numero2 =  Number(prompt ("ingresa el segundo  numero de la operacion"))
const resta = numero1-numero2
const multiplicacion = numero1*numero2
const division = numero1/numero2

if (operacion ===  "suma" ) {
    const resultado = numero1+numero2 
    alert("tu respuesta es :"+ resultado)
} else if (operacion === "resta"){
    const resultado= numero1-numero2
    alert ("la respuesta es :" + resultado)
}else if (operacion === "multiplicacion"){
    const resultado= numero1*numero2
    alert ("la respuesta es :" + resultado)
}else if ( operacion=== "division" ){
    const resultado= numero1/numero2
    alert ("la respuesta es :" + resultado)
}else {
    alert ("Operacion no valida ")
}
