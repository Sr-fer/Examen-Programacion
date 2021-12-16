function main() {
    var menu = prompt("Quieres entrar en el menu? 1:Si 2:No")
    if(menu == 1) {
    alert("Entendido!")
    do {
(isRunning = true)
var Usuario = new datos()
var IA = new datos()
var mostrar_menu = prompt("Que quiere hacer? 1:Jugar piedra, papel o tijeras, 2:Mostrar Datos 3.Salir")
var numero_aleatorio = azar()

if(mostrar_menu == "1") {
var eleccion_jugador = prompt("Que quieres elegir? 1:Piedra 2:Papel 3.Tijeras")

if(eleccion_jugador == "1" && numero_aleatorio <= 33) {
alert("Has empatado")
Usuario.setEmpates(1) 
IA.setEmpates(1) 
}

else if(eleccion_jugador == "1" && numero_aleatorio >= 34 && numero_aleatorio < 66) {
alert("Has perdido")
Usuario.setDerrotas(1) 
IA.setVictorias(1) 
}

else if(eleccion_jugador == "3" && numero_aleatorio >= 67) {
alert("Has ganado")
Usuario.setVictorias(1) 
IA.setDerrotas(1) 
}

if(eleccion_jugador == "2" && numero_aleatorio <= 33) {
alert("Has ganado")
Usuario.setVictorias(1) 
IA.setDerrotas(1)
}
    
else if(eleccion_jugador == "2" && numero_aleatorio >= 34 && numero_aleatorio < 66) {
alert("Has empatado")
Usuario.setEmpates(1) 
IA.setEmpates(1) 
}
    
else if(eleccion_jugador == "3" && numero_aleatorio >= 67) {
alert("Has perdido")
Usuario.setDerrotas(1) 
IA.setVictorias(1) 
}

if(eleccion_jugador == "3" && numero_aleatorio <= 33) {
alert("Has perdido")
Usuario.setDerrotas(1) 
IA.setVictorias(1) 
}
        
else if(eleccion_jugador == "3" && numero_aleatorio >= 34 && numero_aleatorio < 66) {
alert("Has ganado")
Usuario.setVictorias(1)
IA.setDerrotas(1) 
}
    
else if(eleccion_jugador == "3" && numero_aleatorio >= 67) {
alert("Has empatado")
Usuario.setEmpates(1) 
IA.setEmpates(1) 
}
}

if(mostrar_menu == "2") {
console.log("Usuario")
console.log(Usuario)
console.log("IA")
console.log(IA)

}
if(Usuario.Victorias == 5 || IA.Victorias == 5) {
    alert("Fin del juego")
    isRunning = false
}
if(mostrar_menu == "3") {
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