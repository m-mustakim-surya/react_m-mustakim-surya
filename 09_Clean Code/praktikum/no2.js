class Kendaraan{
    constructor(totalRoda, kecepatanPerJam){
        this.totalRoda = totalRoda;
        this.kecepatanPerJam = kecepatanPerJam;
    }
}

class Mobil extends Kendaraan{
    constructor(totalRoda, kecepatanPerJam){
        super(totalRoda, kecepatanPerJam);
    }
    tambahKecepatan(kecepatanBaru){
        this.kecepatanPerJam += kecepatanBaru;
    }
    berjalan(){
        this.tambahKecepatan(10);
    }
}

let mobilCepat = new Mobil(4, 0);
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();
console.log(mobilCepat.kecepatanPerJam);

let mobilLamban = new Mobil(4, 0);
mobilLamban.berjalan();
console.log(mobilLamban.kecepatanPerJam);
