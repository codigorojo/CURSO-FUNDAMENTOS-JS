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
    edad: 22
}

var dila = {
    nombre: 'Dilara',
    edad: 21
}

var estre = {
    nombre: 'Estrella',
    edad: 20
}


// ESTA ES UNA MANERA
// const esPende = gaty => gaty.edad < 24

// Y ESTA ES OTRA

const esPende = ({edad}) => edad < 24




var personas = [carla, abril, cami, dila, estre]

var gatysPendes = personas.filter(esPende)
console.log(gatysPendes)




//        for (var i = 0; i < personas.length; i++) {
//            var gaty = personas[i]
//            console.log(`La gaty ${gaty.nombre} tiene ${gaty.edad} años de edad`)
//        }