class Ingreso extends Item {

    static contadorIngreso = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._idIngreso = ++Ingreso.contadorIngreso;
    }

    get idIngreso(){
        return _idIngreso;
    }
}