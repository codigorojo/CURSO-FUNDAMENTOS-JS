var pato = {
    nombre: 'Patricia',
    edad: 55
}

var valen = {
    nombre: 'Valentín',
    edad: 15
}

var ori = {
    nombre: 'Oriana',
    edad: 17
}

function imprEdad (pers) {
    var { nombre } = pers
    console.log(nombre.toUpperCase())
}

imprEdad(ori)
imprEdad(pato)
imprEdad(valen)