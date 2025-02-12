export default class Cone{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }

    calcularGeratrizes(){
        return Math.sqrt((this.raio * this.raio) + (this.altura * this.altura))
    }

    calcularVolume(){
        return (Math.PI * this.raio * this.raio * this.altura) / 3
    }

    calcularAreaTotal(){
        return ((Math.PI * this.raio * this.raio)+(Math.PI * this.raio * this.calcularGeratrizes()))
    }
}