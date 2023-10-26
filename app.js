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

let dia = prompt("Dame el día de la semana").toLowerCase();

switch (dia) {
    case 'lunes':
        console.log("EL día que seleccionaste es lunes");
        break;
    case 'martes':
        console.log("EL día que seleccionaste es martes");
        break;
    case 'miércoles':
        console.log("EL día que seleccionaste es miércoles");
        break;
    case 'jueves':
        console.log("EL día que seleccionaste es jueves");
        break;
    case 'viernes':
        console.log("EL día que seleccionaste es viernes");
        break;
    case 'sábado':
        console.log("EL día que seleccionaste es sábado");
        break;
    case 'domingo':
        console.log("EL día que seleccionaste es domingo");
        break;
    default:
        console.log("Ese día no existe");
}