let a = 5;
let b = "kampus merdeka";
const nama = "Budi";
// b) Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console
let terdaftar = true;
// Mengganti nilai Boolean `terdaftar` dari false menjadi true.
let lengkapArr = [a, b, nama, terdaftar];

function perkenalan(){
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal
    );
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; // Melakukan komen pada `nama = b;` untuk menghindari error.

// a) Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
console.log("array = " + lengkapArr[2]);
// Menghapus `console.log("asal diakses = " + asal);` dan menggantinya dengan `console.log("array = " + lengkapArr[2]);`. Variabel  lengkap_arr diganti menjadi camel case `lengkapArr`.
console.log("a adalah = " + a);
console.log("b adalah = " + b);
// c) Lakukan pemanggilan untuk function perkenalan pada baris 31
perkenalan();
// Melakukan pemanggilan function perkenalan.

// d) Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah // Output sudah sesuai seperti contoh soal.