alert("¡BIENVENIDO!")
let nombre = prompt("Para empezar, ¿Cuál es tu nombre?")

alert("Muy bien " + nombre +", Vamos a jugar a piedra, papel o tijeras \n ¿Estás listo?")


while(nombre != "si" && nombre != "no" ) {
    nombre = prompt("Responda SI o NO")
    if(nombre == "si") {
            for (let i = 0; i < 6; i++) {
                let jugador = Number(prompt("Ingrese 0 para elegir piedra \n Ingrese 1 para elegir papel \n Ingrese 2 para elegir tijera"))
                let contrincante = Math.round(Math.random() * 2)
                if (jugador == 0) {
                    alert("Has elegido piedra")
                } else if (jugador === 1) {
                    alert("Has elegido papel")
                } else if (jugador === 2) {
                    alert("Has elegido tijeras")
                } else {
                    alert("ERROR. INGRESE UNA OPCIÓN CORRECTA")
                }
                
                if (contrincante == 0) {
                    alert("Tu contrincante ha elegido piedra")
                } else if (contrincante === 1) {
                    alert("Tu contrincante ha elegido papel")
                } else if (contrincante === 2) {
                    alert("Tu contrincante ha elegido tijeras")
                } else {
                    alert("ERROR")
                }
                
                if (jugador == contrincante) {
                    alert("HAY EMPATE")
                } else if (jugador === 0 && contrincante == 2){
                    alert("GANASTE ÉSTA MANO")
                } else if (jugador === 2 && contrincante == 0) {
                    alert("GANASTE ÉSTA MANO")
                } else {
                    alert("PERDISTE ÉSTA MANO, VUELVE A INTENTARLO")
                }
            }
    } else if (nombre == "no") {
        alert("Gracias por tu visita, te esperamos")
    }
}





    

    



