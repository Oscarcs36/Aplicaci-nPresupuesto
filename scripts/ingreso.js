class Ingreso extends Item {

    static contadorIngreso = 0;
    
    constructor(descripcion, valor){
        super("Ingreso", descripcion, valor);
        this._idIngreso = ++Ingreso.contadorIngreso;
    }

    get idIngreso() {
        return this._idIngreso;
    }

    toString(){
        return `
    ID: ${this.idIngreso} { ${super.toString()} }`;
    }
}