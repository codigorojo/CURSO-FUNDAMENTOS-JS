// FUNCION FLECHA



var Fer = {
    nombre: 'Fernando',
    edad: 55
}

var Valen = {
    nombre: 'Valentin',
    edad: 15
}

const MAYORIA_DE_EDAD = 18


// 1) TRANSFORMAMOS UNA FUNCION EN UNA CONSTANTE
// y generamos dentro de esa constante una función anónima

// const ES_MAYOR_DE_EDAD = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// 2) DESPUES SACAMOS LA PALABRA FUNCTION, LAS LLAVES Y EL RETURN Y HACEMOS LA FUNCION FLECHA
// ya JS nos permite prescindir de éstos 2 últimos si una funcion lo único que hace es retornar algo

// const ES_MAYOR_DE_EDAD = (persona) => persona.edad >= MAYORIA_DE_EDAD

// 3) CUANDO SÓLO TENEMOS UN PARÁMETRO PODEMOS SACARLE LOS PARÉNTESIS
// en este caso le sacamos los paréntesis a persona

// const ES_MAYOR_DE_EDAD = persona => persona.edad >= MAYORIA_DE_EDAD

// 4) POR ÚLTIMO DESESTRUCTURAMOS EL PARÁMETRO
// para eso volvemos a meter los paréntesis que sacamos en el paso 3

const ES_MAYOR_DE_EDAD = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
    if(ES_MAYOR_DE_EDAD(persona)) {
        console.log(`${persona.nombre} esta hecho mierda`)
    }else{
        console.log('ACCESO DENEGADO')
    }
}


/*
ESTE ES EL PUNTO DE PARTIDA PARA IR HACIA UNA FUNCION FLECHA QUE ESCRIBO ARRIBA

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} esta hecho mierda`)
    }else{
        console.log('ACCESO DENEGADO')
    }
}

*/