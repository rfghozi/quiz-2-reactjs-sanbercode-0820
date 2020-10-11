class BangunDatar{
    constructor(name){
        this._nama = name;
    }

    get name(){
        return this._nama
    }

    set name(a){
        this._nama = a;
    }

    luas(){
        this._luas = "";
        return this._luas;
    }

    keliling(){
        this._keliling = ""
        return this._keliling;
    }
}

class Lingkaran extends BangunDatar{
    constructor(name){
        super(name);
    }
    
    luas(r){
        return console.log(this._luas);
    }

    keliling(r){
        return console.log(this._keliling);
    }
}

var bulat = new Lingkaran();
Lingkaran.luas(7);
Lingkaran.keliling(7);
