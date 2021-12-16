function main() {
var menu = prompt("Quieres entrar en el menu? 1:Si 2:No")
if(menu == 1) {
alert("Entendido!")
do {
(isRunning = true)
var array_de_numeros = array_numeros()
var array_de_letras = array_letras()
var mostrar_menu = prompt("Que quiere hacer? 1:Introducir valores de números, 2:Intorudcir valores de letras, 3:Mostrar ambos, 4.Salir del programa")

if (mostrar_menu == "1")  { 
var añadir_numero = parseInt(prompt("Que numero quieres añadir?"))
if(añadir_numero < 9) {
    array_de_numeros.push(añadir_numero)
}
else{
    alert("No se permiten numeros mayores de 9")
}
}

if (mostrar_menu == "2") {
var añadir_letras = prompt("Que letras quieres añadir?")
if(añadir_letras.length < 4) {
    array_de_letras.push(añadir_letras)
}
else {
    alert("No se permiten palabras con mas de 4 letras")
}
}  

if(mostrar_menu == "3") {
alert(array_de_letras)
alert(array_de_numeros)
}

if(mostrar_menu == "4") {
isRunning = false
return main()
}
}
while (isRunning)
}
if(menu = "2") {
alert("Adios!")
}
}
main()
