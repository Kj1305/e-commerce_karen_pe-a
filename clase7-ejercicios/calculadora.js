const operacion =  (prompt ("ingrese la operacion que desea realizar "))
const numero1 = number(prompt ("ingresa el primer numero de la operacion"))
const numero2 =  number(prompt ("ingresa el segundo  numero de la operacion"))
const resta = numero1-numero2
const multiplicacion = numero1*numero2
const division = numero1/numero2

if (operacion ===  suma ) {
    operacion = numero1+numero2 
    alert("tu respuesta es :"+ operacion)
} else if (operacion === resta){
    operacion = numero1-numero2
    alert ("la respuesta es :" + operacion)
}else if (operacion === multiplicacion ){
    operacion = numero1*numero2
    alert ("la respuesta es :" + operacion)
}else if ( operacion=== division ){
    operacion = numero1/numero2
    alert ("la respuesta es :" + operacion)
}
