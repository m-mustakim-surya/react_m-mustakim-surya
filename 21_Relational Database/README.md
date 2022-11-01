# Resume Materi KMReact - Relational Database
## Which part of a page does come from a database?
Dapat diambil dari contoh profile sebuah akun Twitter, maka akan ada display name, username, bio, location, dan join date sebagai account modelnya.

### Database Relationship
- One to One
- One to Many
- Many to Many

### How to Implement
Relational Database Management Systems (RDBMS) software yang menggunakan Relational Database Model sebagai dasarnya, contoh: MySQL

### Jenis Perintah SQL
- Data Definition Language (DDL)
- Data Manipulation Language (DML)
- Data Control Language (DCL)

### Tipe Data MySQL
- Num
- Huruf
- Date

### DML
Data Manipulation Language merupakan perintah yang digunakan untuk memanipulasi data dalam tabel dari suatu database

### Statement Operation
- INSERT
- SELECT
- UPDATE
- DELETE

### DML Statement
- LIKE/BETWEEN
- AND/OR
- ORDER BY
- LIMIT

## JOIN
Sebuah klausa untuk mengkombinasikan recored dari dua atau lebih tabel. Join standar SQL ANSI:
- Inner
- Left
- Right

### Inner JOIN
Mengembalikan baris-baris dari dua tabel atau lebih yang memenuhi syarat.

### Left JOIN
Left JOIN akan mengembalikan seluruh baris dari tabel di sebelah kiri yang dikenai kondisi ON dan hanya baris dari tabel di sebelah kanan yang memenuhi kondisi JOIN.

### Right JOIN
Right JOIN akan mengembalikan seluruh baris dari tabel di sebelah kanan yang dikenai kondisi ON dan hanya baris dari tabel di sebelah kiri yang memenuhi kondisi JOIN. Teknik ini merupakan kebalikan dari left JOIN.

## UNION
Ada hal yang perlu diperhatikan dari union adalah jumlah field yang harus dikeluarkan/dipanggil harus sama.

## Aggregate
### Fungsi Aggregate
Fungsi di mana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal.

### Fungsi Aggregate SQL
- MIN
- MAX
- SUM
- AVG
- COUNT
- HAVING

## Subquery
Subquery atau Inner query atau Nested query adalah query di dalam query SQL lain. Sebuah subquery digunakan untuk mengembalikan data yang akan digunakan dalam query utama sebagai syarat untuk lebih membatasi data yang akan diambil. Subquery dapat digunakan dengan SELECT, INSERT, UPDATE, dan DELETE statements bersama dengan operatornya.

### Peraturan
- Harus tertutup dalam tanda kurung.
- Sebuah subquery hanya dapat memiliki satu kolom pada klausa SELECT, kecuali beberapa kolom yang di query utama untuk subquery untuk membandingkan kolom yang dipilih. 
- Subqueries yang kembali lebih dari satu baris hanya dapat digunakan dengan beberapa value operator, seperti operator IN. 
- Daftar SELECT tidak bisa menyertakan referensi ke nilai-nilai yang mengevaluasi ke BLOB, ARRAY, CLOB, atau NCLOB. 
- Sebuah subquery tidak dapat segera tertutup dalam fungsi set.

## Function
Sebuah kumpulan statement yang akan mengembalikan sebah nilai balik pada pemanggilnya
- DELIMITER
- CREATE FUNCTION
- RETURN
- DETERMINISTIC/NOT DETERMINISTIC
- BEGIN END
- CREATE TRIGGER
- DECLARE
- OLD
- NEW

<br><br>

# Praktikum GraphQL - Basic
Link soal : [Soal Praktikum GraphQL - Basic](https://docs.google.com/document/d/10l_iKfLUA0VZo8RpTfgvIN53K18XiDM7FrWrmztv5fI/edit)

<br>

## Hasil Praktikum Relational Database
Berikut ini merupakan hasil praktikum Relational Database saya : [Praktikum Relational Database](https://github.com/m-mustakim-surya/react_m-mustakim-surya/tree/21_Relational-Database/21_Relational%20Database/screenshots)

### Relasi One To One
![01](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/21_Relational-Database/21_Relational%20Database/screenshots/01.PNG)

![02](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/21_Relational-Database/21_Relational%20Database/screenshots/01_Hasil.PNG)

<br>

### Relasi One To Many
![03](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/21_Relational-Database/21_Relational%20Database/screenshots/02.PNG)

![04](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/21_Relational-Database/21_Relational%20Database/screenshots/02_Hasil.PNG)
