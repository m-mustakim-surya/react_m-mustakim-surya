### 2. Jawab pertanyaan dibawah sesuai dengan materi yang telah dijelaskan

a. Jelaskan kenapa baris 21, 22, 23 tidak tampil?
    Hal ini disebabkan oleh deklarasi `terdaftar` pada baris ke 4 (pada soal) yang dibuat memiliki nilai Boolean false, sedangkan pada baris ke 21 pengkondisian yang dibuat agar memunculkan
```
console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
```
adalah memiliki nilai Boolean true, sebagaimana yang tertulis pada baris ke 21
```
if (terdaftar === true)
```
. Pengkondisian `if` yang tidak sesuai tentu saja tidak akan memberi aksi apapun. Oleh karena itu, cara penyelesaiannya agar dapat tampil ialah dengan mengubah nilai Boolean terdaftar pada baris ke 4 menjadi true atau sebaliknya mengubah nilai Boolean terdaftar pada pengkondisian `if` baris ke 22 menjadi false. Di sini saya mengubah nilai Boolean terdaftar pada baris ke 4 menjadi true saja.

b. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
    Hal ini disebabkan oleh adanya `nama = b;` pada baris ke 26 yang menyebabkan error karena perbedaan deklarasi antara `nama` yang menggunakan `const` (baris ke 3 pada soal) dan `b` yang menggunakan `let` (baris ke 2 pada soal). Sebagaimana yang kita ketahui, data pada deklarasi `const` tidak dapat di-reassign dan di-redeclare sehingga terjadi error.

c. Dengan melakukan komen pada baris ke 26, apakah baris ke 28 dapat dieksekusi? Jelaskan
    Seperti yang telah disebutkan sebelumnya pada jawaban nomor 2.b), deklarasi `nama = b;` menyebabkan error akibat `const` yang tidak dapat di-reassign dan di-redeclare. Oleh karena itu, baris ke 28 yang telah diganti dari
```
console.log("asal diakses = " + asal);
```
menjadi
```
console.log("array = " + lengkapArr[2]);
```
tentu dapat berjalan dengan baik.
Namun, jika yang ditanyakan ialah baris ke 28 pada soal awal, yaitu
```
console.log("asal diakses = " + asal);
```
, maka tetap tidak akan bisa berjalan dikarenakan variabel `asal` merupakan variabel yang dideklarasikan di dalam function perkenalan dengan menggunakan `let`. Seperti yang kita ketahui, deklarasi di dalam function scope hanya dapat diakses oleh function scope itu sendiri sementara pemanggilan variabel `asal` pada bari ke 28 soal awal memanggilnya pada global scope.
