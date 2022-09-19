# Resume Materi KMReact - Event Handling
## State
### Apa Itu State?
State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.

- Data yang bisa dimodifikasi menggunakan setState
- Setiap terjadi modifikasi akan terjadi render ulang
- Bersifat Asynchronous
- Dipakai dalam class

<br>

### Perbedaan Props dan State
- Props hanya dapat dibaca, sedangkan state changes bisa asynchronous
- Props tidak bisa dimodifikasi, sedangkan state dapat dimodifikasi menggunakan `this.setState`

<br><br>


## Stateful & Stateless Component
### Apa Itu Stateful Component?
Stateful component atau yang disebut juga Smart Component dan Container Component adalah komponen React yang memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.

<br>

### Apa Itu Stateless Component?
Stateless Component atau yang disebut juga Dump Component dan Presentational Component adalah komponen React yang tidak memiliki state, hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.

<br>

### Perbedaan Dari Komponen Stateful dan Komponen Stateless

| Stateful Component                      | Stateless Component                           |
| :---:                                   | :---:                                         |
| Mengerti tentang aplikasi               | Tidak tahu tentang aplikasi                   |
| Melakukan data fetching                 | Tidak melakukan data fetching                 |
| Berinteraksi dengan aplikasi            | Tujuan utamanya adalah visualisasi            |
| Tidak dapat digunakan kembali           | Dapat digunakan kembali                       |
| Meneruskan status dan data ke child-nya | Hanya berkomunikasi dengan parent langsungnya |

<br><br>


## Handling Events
### Apa Itu Handling Event
Handling Event adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen. Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.

<br> Contoh penulisan event sebagai berikut :

<br> Pada HTML :

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

<br> Pada React :

```jsx
<button onClick={this.activeLasers}>
  Active Lasers
</button>
```

<br>

### Beberapa Contoh List Event
- Clipboard Events (Promise terpenuhi)
- Form Events (onChange, onSubmit)
- Mouse Events (onClick, onDoubleClick, onMouseOver)
- Generic Events (onError, onLoad)

<br><br><br>

# Praktikum Event Handling
Buatlah daftar pekerjaan yang akan kamu kerjakan, dengan kriteria sebagai berikut :
1. Daftar pekerjaan dapat ditambahkan menggunakan inputan
2. Terdaftar checklist pada setiap daftar pekerjaan
3. Aktifkan checklist jika pekerjaan selesai dikerjakan, seperti contoh di bawah
4. Sertakan tombol hapus untuk menghapus suatu pekerjaan dari daftar pekerjaan
5. Apabila inputan yang sudah anda submit tersebut kosong, tampilkan alert bahwa anda harus mengisi inputan tersebut terlebih dahulu sebelum anda submit.

<br> Teman-teman bebas dalam membuat bentuk data pada assignment ini. Di bawah ini ada contoh data yang bisa teman-teman pakai :

```jsx
[
    {
        "id": 1,
        "title": "Mengerjakan Exercise",
        "completed": true
    },
    {
        "id": 2,
        "title": "Mengerjakan Assignment",
        "completed": false
    }
]
```

<br> Berikut ini merupakan hasil kerja saya : [Praktikum Event Handling](https://github.com/m-mustakim-surya/react_m-mustakim-surya/tree/13_Event-Handling/13_Event%20Handling/praktikum/eventhandling)

<br> Tampilan awal aplikasi React :
<br> ![Tampilan-Awal](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/13_Event-Handling/13_Event%20Handling/screenshots/01_Tampilan-Awal.PNG)

<br>

Menambahkan list dengan menggunakan inputan :
<br> ![Memasukkan-Input](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/13_Event-Handling/13_Event%20Handling/screenshots/02_Memasukkan-Input.PNG)

<br>

Melakukan submit input dengan tombol submit :
<br> ![Submit-Input](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/13_Event-Handling/13_Event%20Handling/screenshots/03_Submit-Input.PNG)

<br>

Mengaktifkan checkbox/checklist jika pekerjaan selesai dikerjakan :
<br> ![Checkbox-List](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/13_Event-Handling/13_Event%20Handling/screenshots/04_Checkbox-List.PNG)

<br>

Menghapus pekerjaan dari list dengan tombol delete :
<br> ![Delete-List](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/13_Event-Handling/13_Event%20Handling/screenshots/05_Delete-List.PNG)

<br>

Melakukan submit tanpa memasukkan input :
<br> ![Submit-Tanpa-Input](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/13_Event-Handling/13_Event%20Handling/screenshots/06_Submit-Tanpa-Input.PNG)
