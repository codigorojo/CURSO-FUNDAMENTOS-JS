var carla = {
    nombre: 'Carla',
    edad: 28
}

var abril = {
    nombre: 'Abril',
    edad: 23
}

var cami = {
    nombre: 'Camila',
    edad: 26
}

var dila = {
    nombre: 'Dilara',
    edad: 25
}

var estre = {
    nombre: 'Estrella',
    edad: 20
}

const MAYORES = ({edad}) => edad > 24
var personas = [carla, abril, cami, dila, estre]
var veteranitas = personas.filter(MAYORES)
console.log(veteranitas)