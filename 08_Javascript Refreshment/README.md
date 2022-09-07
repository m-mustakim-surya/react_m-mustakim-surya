# Praktikum Javascript Refreshment

1. Tulis ulang kode di bawah, dan simpan dengan format javascript.
```
let a = 5;
let b = "kampus merdeka";
const nama = "Budi"
let terdaftar = false
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
// nama = b;

console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
```
<br>    a. Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
<br>    b. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console
<br>    c. Lakukan pemanggilan untuk function perkenalan pada baris ke 31
<br>    d. Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah
<br>    Berikut ini merupakan hasil kerja saya : [no1.js](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/praktikum/no1.js)
<br> ![ss_1d](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/screenshots/no1d.PNG)
<br><br>

2. Jawab pertanyaan di bawah sesuai dengan materi yang telah dijelaskan
<br>    a. Jelaskan kenapa baris 21, 22, 23 tidak dapat tampil?
<br>    b. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
<br>    c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat dieksekusi? Jelaskan
<br>    Berikut ini merupakan hasil kerja saya : [no2.md](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/praktikum/no2.md) 
<br><br>

3. Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable
bernama a, Sita tersimpan dalam variabel bernama b, dan Ayutersimpan dalam variable bernama c.
```
const foo = ['Budi', 'Sita', 'Ayu'];
```
<br>    Berikut ini merupakan hasil kerja saya : [no3.js](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/praktikum/no3.js)
<br>    ![ss_3](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/screenshots/no3.PNG)
<br><br>

4. Kalian memiliki sebuah variabel berikut (let bdays = ['10-17','05-19','20-19']). Ubahlah
tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam
console menjadi ['10/17', '05/19', '20/19']
<br>    Berikut ini merupakan hasil kerja saya : [no4.js](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/praktikum/no4.js)
<br>    ![ss_4](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/screenshots/no4.PNG)
<br><br>


5. Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam
array tersebut dengan dua. Sehingga, ketika dipanggil variable value mengeluarkan
output berupa [2, 4, 6, 8, 10, 12]
<br>    Berikut ini merupakan hasil kerja saya : [no5.js](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/praktikum/no5.js)
<br>    ![ss_5](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/screenshots/no5.PNG)
<br><br>

6. Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) Bulatkan ke atas variable
tersebut sehingga output yang dihasilkan adalah [2, 3, 5, 12]
<br>    Berikut ini merupakan hasil kerja saya : [no6.js](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/praktikum/no6.js)
<br>    ![ss_6](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/08_Javascript-Refreshment/08_Javascript%20Refreshment/screenshots/no6.PNG)
<br><br>
