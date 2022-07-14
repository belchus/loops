let textoAMostrar = prompt("Ingrese las palabras que quiera ver en el texto-Ingrese ESC cuando quiera terminar")
let cadena

while (textoAMostrar != "ESC") {
 cadena = cadena + textoAMostrar
 
 textoAMostrar = prompt("Ingrese la siguiente palabra")
}
console.log(cadena)
