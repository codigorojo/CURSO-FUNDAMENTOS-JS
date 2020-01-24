var marcePaz = {
    nombre: 'Marcelo',
    vocacion: 'Lograr la paz mundial',
    edad: 38
}

var carlaCortez = {
    nombre: 'Carla',
    vocacion: 'Abrirse al mundo',
    edad: 25
}

function imprimirVocacion (logro) {
    var { vocacion } = logro
    console.log(vocacion.toUpperCase())
}

imprimirVocacion(marcePaz)
imprimirVocacion(carlaCortez)