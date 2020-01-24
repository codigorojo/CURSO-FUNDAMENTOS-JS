var Fer = {
    nombre: 'Fer',
    edad: 55,
    ingeniero: false,
    caradura: true,
    diseñador: true,
    developerJr: false,
    cantante: true
}

function profesion (persona) {
    console.log(`${persona.nombre}:`)
    if(persona.ingeniero) {
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }
    
    if(persona.caradura) {
        console.log('Caradura')
    }if(persona.diseñador) {
        console.log('DG')
    }if(persona.developerJr) {
        console.log('Developer')
}
}