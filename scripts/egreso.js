class Egreso extends Item {

    static contadorEgreso = 0;

    constructor(descripcion, valor){
        super("Egreso", descripcion, valor);
        this._idEgreso = ++Egreso.contadorEgreso;
    }

    get idEgreso(){
        return this._idEgreso;
    }

    toString(){
        return `
    ID: ${this.idEgreso} { ${super.toString()} }`;
    }
}