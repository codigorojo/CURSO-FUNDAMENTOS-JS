var ferMelo = {
    nombre: 'Fernando',
    cargo: 12,
    necesidad: 'muy alta'
}

var charlyVazquez = {
    nombre: 'Carlos',
    cargo: 15,
    necesidad: 'mediana'
} 


// function verQuienGana(pase) {
//     var {necesidad} = pase 
//     console.log(necesidad.toUpperCase())
// }
// 
// verQuienGana(ferMelo)
// 
// verQuienGana(charlyVazquez)


function aumentaCargo (justicia) {
    return {
        ...justicia,
        cargo: justicia.cargo + 10
    }
    // justicia.cargo += 5     
}

