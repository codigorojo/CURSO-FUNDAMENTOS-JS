var Fer = {
    nombre: 'Fer',
    edad: 55,
    ingeniero: false,
    caradura: true,
    diseñador: true,
    developerJr: false,
    cantante: true
}


var Gon = {
    nombre: 'Gon',
    edad: 50,
    ingeniero: false,
    caradura: true,
    diseñador: true,
    actor: true,
    cantante: false
}

const PROFESION = ({nombre}) => nombre.toUpperCase()


// const SUMAR_AÑOS = ({edad}) => edad += 10
// 
// function sumaraños(persona) {
//     persona.edad += 5
// }

/// HAY ALGO QUE ME PARECE IMPORTANTE DESTACAR:
/// El profe aún no lo explicó pero en 
/// la METAMORFOSIS de FUNCIÓN CLÁSICA a FUNCIÓN FLECHA
/// en el paso 4 al desdestructurar el parámetro la función
/// cambia su comportamiento: aca la diferencia en el 
/// nombre de estas funciones flecha

/// Se agradece si alguien puede explicar porque pasa


const SUMAR_ANIOS_SIEMPRE = persona => persona.edad += 5

const SUMAR_ANIOS_UNA_VEZ = ({edad}) => edad += 5