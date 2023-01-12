class Item {
    constructor(tipo, descripcion, valor){
        this._tipo = tipo;
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get tipo(){
        return this._tipo;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get valor(){
        return this.valor;
    }

    set valor(valor){
        this._valor = valor;
    }
}