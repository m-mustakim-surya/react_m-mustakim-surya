# Resume Materi KMReact - GraphQL - Mutation
## GraphQL Overview
### What Is GraphQL
GraphQL adalah bahasa query untuk API, dan runtime sisi server untuk mengeksekusi query dengan menggunakan sistem tipe yang ditetapkan untuk data. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan satu titik akhir tunggal (/graphQL) untuk setiap permintaan yang diperlukan.

### GraphQL Core Features
Sebelum kita dapat melakukan GraphQL maka kita perlu men-setup GraphQL Server (Backend), kita dapat menggunakan Hasura, Apollo Server atau lainnya untuk melakukan itu. Kemudian kita dapat menggunakan GraphQL pada client baik menggunakan Prisma, Apollo Client, Postman, dll.
<br> Ada 3 fitur utama di GraphQL client:
1. Query, mendapatkan data berdasarkan query tertentu yang kita definisikan
2. Mutation, insert, update, delete data
3. Subscription, dapatkan update date secara realtime/berdasarkan event

### Query - Basics
Dengan graphQL kita bisa mendapatkan data yang kita butuhkan. Kita menentukan bidang apa yang ingin kita dapatkan dan graphQL akan memberi data berdasarkan apa yang kita definisikan. Misalnya, bayangkan ada satu koleksi dalam database yang menyimpan data film. Semua data yang tidak dibutuhkan seperti director, create_at dan updated_at tidak akan disertakan dalam hasil.

### Query - multiple related data sources/collections
Kita juga dapat menggunakan query untuk mendapatkan data dari beberapa koleksi terkait. Pada contoh di bawah ini, jika kita ingin mendapatkan data direktur kita perlu menggunakan director.id untuk mendapatkan data dari endpoint lain, tetapi dengan graphql kita juga dapat mendefinisikan bidang yang dibutuhkan secara langsung asalkan tersedia di server GraphQL.

### Query - multiple unrelated data sources/collections
Kita juga dapat menggunakan query untuk mendapatkan data dari beberapa koleksi yang tidak terkait untuk meminimalkan permintaan jaringan. Gambar jika kita menginginkan data film dan data buku. Dengan REST kita perlu melakukan setidaknya 2 request ke 2 titik akhir yang berbeda. Dengan GraphQL kita bisa melakukan 1 request untuk mendapatkan data tersebut.

### Query - fragments
Fragmen GraphQL adalah bagian dari logika yang dapat dibagi antara beberapa query dan mutation. Kita dapat menggunakan fragmen untuk menyederhanakan query atau mutation.

### Mutation
Mutation pada dasarnya adalah fungsi untuk memperbarui, menyisipkan dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql) dan kemudian menentukan data apa yang GraphQL perlu kembalikan.

### Subscription
Subscription adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat event tertentu terjadi. Subscription biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien subscriptionnya. Ketika data diubah maka klien akan mendapatkan data yang diperbarui secara langsung secara real-time. Pada contoh di bawah ini, jika kita melakukan subscription pada pengumpulan orang maka setiap kali orang baru ditambahkan atau ketika data dihapus atau diubah maka kita akan mendapatkan data yang diperbarui secara real-time langsung ke klien kita. Subscription hanya akan terjadi di sisi klien bukan sisi server.

<br>

## Hasura & Heroku
### Hasura
Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di cloud hasura atau dihosting sendiri. Buka https://hasura.io/ dan buat server graphql baru

### Heroku
Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis. Buka https://heroku.com/ dan buat service.

- Setting Hasura & Heroku
- Buat sebagai Hasura Public API
- Query & Mutation

## Apollo Setup
### What Is Apollo
Apollo Client adalah state management library komprehensif untuk JavaScript yang memungkinkan kita mengelola data lokal dan jarak jauh dengan GraphQL. Digunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis. Core @apollo/client library menyediakan integrasi bawaan dengan React. Kita menggunakan Apollo Client untuk melakukan operasi GraphQL (query, mutatipn, dan subscription) di dalam aplikasi React atau Next JS. Apollo Client bekerja dengan baik dengan server GraphQL (Hasura, Apollo Server, dll)

### Apollo Client Next JS Setup - Installation
1. Buat proyek ReactJS baru: `npx create-react-app react-graphql`
2. Instal GraphQL dan apollo client: `yarn add graphql @apollo/client`
3. Jangan lupa untuk melakukan commit perubahan untuk track progress

### Apollo Client Next JS Setup
1. Go to src folder (npm i @apollo/client) and (npm i graphql)
2. Buat file apollo-client.js di dalam folder src
3. Create apollo Client dan export
4. Setting apollo provider, di index.js import ApolloProvider, dan apollo-client

<br>

## Query
### Query with Apollo Client
1. Import gpl dan useQuery kemudian tulis query-nya, atau dapat melakukan copy dari hasura console
2. Get initial data dari melakukan query pada server, panggil useQuery pada code yang ada
3. Consyme data pada code jsx, catat bahwa pada request pertama datanya null sehingga butuh optional chaining untuk menghindari error

### Query with Apollo Client - lazy query
Saat React merender komponen yang memanggil useQuery, Apollo Client secara otomatis mengeksekusi query terkait. Tetapi bagaimana jika ingin menjalankan query sebagai response terhadap event yang berbeda, seperti pengguna mengklik tombol? Penggunaan hook LazyQuery sangat cocok untuk mengeksekusi query sebagai response terhadap event selain rendering komponen. Tidak seperti useQuery, saat Anda memanggil useLazyquery, ini tidak langsung mengeksekusi query terkaitnya. Sebagai gantinya, ia mengembalikan fungsi query dalam tupel hasil yang dipanggil kapan pun siap untuk menjalankan query.

### Query with Apollo Client - refetching
Refeteching memungkinkan untuk menyegarkan hasil query sebagai response terhadap tindakan pengguna tertentu, bukan menggunakan interval tetap. Kita dapat secara opsional menyediakan objek variabel baru ke fungsi pengambilan ulang. Jika tidak, query akan menggunakan variabel yang sama dengan yang digunakan dalam eksekusi sebelumnya.

## Mutation
### Mutation with Apollo Client
1. Import useMutation hooks dari apollo client dan define mutation
2. Invoke useMutation dan gunakan array destruction define mutation handler (insertTodo) dan gunakan.
3. Panggil insertTodo dengan variables

### Mutation Update Data with Apollo Client
- Define update query
- Create mutation handler untuk update todo
- Panggil update query
- Define delete query
- Create mutation handler untuk delete todo
- Call delete query

## Subscription
### Setting Subscription
1. Instal subscriptions-transport-ws untuk mengaktifkan koneksi websocket: `yarn add @apollo/client subscriptions-transport-ws`
2. Impor semua modul yang diperlukan dan pisahkan antara http dan websocket link
3. Buat httpLink untuk query dan mutation. Dan wsLink untuk subscription. Tambahkan header untuk autentikasi. Dapatkan link ini dari console hasura. WsLink menggunakan wss:// bukan https:// karena wsLink menggunakan websocket. Perhatikan bahwa wss lebih aman daripada ws, sama seperti https lebih aman daripada http.
4. Tambahkan split function dan gunakan sebagai link saat membuat client. Split function digunakan untuk menggabungkan kedua Link tersebut menjadi satu Link yang menggunakan satu atau yang lain sesuai dengan jenis operasi yang dijalankan. Ketika operasi adalah subscription yang sama maka gunakan wsLink, jika tidak maka gunakan httpLink untuk query dan mutation
5. Import useSubscription dari apollo client dan define subscription
6. Invoke subscription dan consume data

### Subscription using subscribeToMore
subscribeToMore adalah function yang memungkinkan kita untuk menjalankan subscription, biasanya subscribe ke bidang tertentu yang disertakan dalam query. Atau ketika server hanya mengembalikan 1 data yang diperbarui, bukan semua data, maka kita perlu memperbarui data sebelumnya dalam variabel sebelumnya dan mengembalikan data yang diperbarui.

<br><br>

# Praktikum GraphQL - Mutation
Link soal : [Soal Praktikum GraphQL - Mutation](https://docs.google.com/document/d/1QB3Yc5irk_zeIYZo5rxR6CGnMXGiICTujlyaWuZ7xqc/edit)

<br>

## Hasil Praktikum GraphQL - Mutation
Berikut ini merupakan hasil praktikum GraphQL - Mutation saya : [Praktikum GraphQL - Mutation](https://github.com/m-mustakim-surya/react_m-mustakim-surya/tree/23_GraphQL-Mutation/23_GraphQL%20-%20Mutation/praktikum/mutation)

### Tampilan Awal Aplikasi
![01](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/23_GraphQL-Mutation/23_GraphQL%20-%20Mutation/screenshots/01.PNG)

<br>

### Fitur Submit (Insert)
![02](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/23_GraphQL-Mutation/23_GraphQL%20-%20Mutation/screenshots/02_Submit.PNG)

<br>

### Fitur Delete
![03]https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/23_GraphQL-Mutation/23_GraphQL%20-%20Mutation/screenshots/03_Delete.PNG)

<br>

### Fitur Edit (Update)
![04](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/23_GraphQL-Mutation/23_GraphQL%20-%20Mutation/screenshots/04_Update.PNG)
