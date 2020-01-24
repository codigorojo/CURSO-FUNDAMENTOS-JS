class garça {
    constructor (apodo, puesto, siEsGarça) {
        this.apodo = apodo
        this.puesto = puesto
        this.siEsGarça = siEsGarça
    }

    puestoBajo () {
        return this.puesto < 9
    }

    saberSiEsGarça () {
        console.log(`Hola, soy ${this.apodo} y soy un garça`)
    } 

}


class losLeales extends garça{
    constructor(apodo, siEsGarça) {
        super (apodo, siEsGarça)
    }
    saludoLeal() {
        console.log(`Hola, soy ${this.apodo} y soy del club de los leales`)
    }

}