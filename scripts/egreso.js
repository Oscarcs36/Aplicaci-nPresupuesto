class Egreso extends Item {

    static contadorEgreso = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._idEgreso = ++Egreso.contadorEgreso;
    }

    get idEgreso(){
        return _idEgreso;
    }
}