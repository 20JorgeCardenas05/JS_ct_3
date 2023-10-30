// let numero1 = 23;
// let numero2 = 20;

// if (numero1 > numero2) {
//     console.log("El numero " + numero1 + " es mayor que el numero " + numero2)
// } else {
//     console.log("El numero " + numero2 + " es mayor que el numero " + numero1)
// }

// let edad = prompt("¿Cuál es tu edad?");

// if (edad > 0) {
//     if (edad >= 18) {
//         document.write("Eres mayor de edad");
//     } else {
//         document.write("Eres menor de edad");
//     }
// } else {
//     document.write("Esa no es una edad");
// }

// let dia = prompt("Dame el día de la semana").toLowerCase();

// switch (dia) {
//     case 'lunes':
//         console.log("EL día que seleccionaste es lunes");
//         break;
//     case 'martes':
//         console.log("EL día que seleccionaste es martes");
//         break;
//     case 'miércoles':
//         console.log("EL día que seleccionaste es miércoles");
//         break;
//     case 'jueves':
//         console.log("EL día que seleccionaste es jueves");
//         break;
//     case 'viernes':
//         console.log("EL día que seleccionaste es viernes");
//         break;
//     case 'sábado':
//         console.log("EL día que seleccionaste es sábado");
//         break;
//     case 'domingo':
//         console.log("EL día que seleccionaste es domingo");
//         break;
//     default:
//         console.log("Ese día no existe");
// }

// OPERADOR TERNARIO
// condición ? true : false

// let num1 = 15;
// let num2 = 20;

// let valor = (num1 > num2) ? 'El número 1 es mayor.' : 'El número 2 es mayor.'

// console.log(valor);

// nume1 = prompt("Escribe un número");
// nume2 = prompt("Escribe otro número");

// if (nume1 == nume2) {
//     console.log("Los números son iguales");
// } else {
//     if (nume1 > nume2) {
//         console.log("El número " + nume1 + " es mayor que el número " + nume2);
//     } else {
//         console.log("El número " + nume2 + " es mayor que el número " + nume1);
//     }
// }

// let n = prompt("Escribe el número que desees saber si es par o impar");

// if ((n % 2) == 0) {
//     console.log("El número es par.");
// } else {
//     console.log("El número es impar.");
// }

// nu1 = prompt("Escribe el número que quiera dividir.");
// nu2 = prompt("Escribe el número con el que lo quieres dividir.");

// if (nu1 == 0 || nu2 == 0) {
//     console.log("Error");
// } else {
//     console.log(nu1 / nu2)

function calcular() {
    let numero1 = parseFloat(document.getElementById("numer1").value);
    let numero2 = parseFloat(document.getElementById("numer2").value);
    let operacion = document.getElementById("operacion").value;

    let resultado;
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "No se puede dividir por cero.";
            }
            break;
        default:
            resultado = "Operación no válida";
            break;
    }

    document.getElementById("resultado").textContent = resultado;
}