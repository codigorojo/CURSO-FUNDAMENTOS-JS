class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
//        var nombre = this.nombre
//        var apellido = this.apellido
var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto () {
        return this.altura > 1.75
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)    
    }
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolladore`)
        if(fn) {
            fn(nombre, apellido, true)
        }
}
}

function responderSaludo (nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev) {
        console.log(`Àhhh! No sabía que eras dev`)
    }
}

var Fer = new Persona ('Fernando', 'Pioli', '1.71')
var Carla = new Persona ('Carla', 'Conte', '1.61')
var Marcelo = new Desarrollador ('Marcelo', 'Paz', '1.76')

Fer.saludar()
Carla.saludar(responderSaludo)
Marcelo.saludar(responderSaludo)