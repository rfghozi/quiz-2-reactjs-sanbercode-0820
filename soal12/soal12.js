class BangunDatar{
    constructor(name){
        this._name = name;
        this._luas = "";
        this._keliling = "";
    }

    get luas(){
        return this._luas;
    }

    set luas(a){
        this._luas = a;
    }

    get keliling(){
        return this._keliling;
    }

    set keliling(b){
        this._keliling = b;
    }
}

class Lingkaran extends BangunDatar{
    constructor(){
        super(this._keliling, this._luas);
        this._luasLingkaran = 3.14 * r * r
        this._kelilingLingkaran = 2 * 3.14 * r
    }
    
    luaslin(r){
        return console.log(this._luasLingkaran);
    }

    kelilinglin(r){
        return console.log(this._kelilingLingkaran);
    }
}


var bulat = new Lingkaran();
Lingkaran.luas(7);
Lingkaran.keliling(7);
