# Summary of All Materials – How to be an Ideal Top Search React JS Front-End Engineer

# Resume Materi KMReact – Version Control and Branch Management (Git)

- Version Control System (VCS) berfungsi untuk melacak versi atau history dari perubahan source code yang ada. Adanya sistem version control secara cloud membantu kolaborasi kerja banyak orang dalam project yang sama. Fleksibilitas ini yang menjadi poin pentingnya dimana dapat diketahui siapa yang merubah dan apa yang dirubah serta memungkinkan untuk “undo” atau kembali ke bagian sebelumnya dari source code yang ada.
- Terdapat Branch serta Merge pada Git ataupun GitHub dimana Branch merupakan percabangan daripada branch utama yang tidak mengganggu source code dari percabangan main/master, sedangkan Merge sendiri menggabungkan sebuah branch ke branch lainnya.
- Command-command yang terdapat pada git mampu membantu melakukan kontrol versi yang lebih baik pada project yang dikerjakan sehingga output akhir dari sebuah project tetap satu.

<br><br><br>

# Resume Materi KMReact – Figma

- Figma merupakan software design dengan berbagai fitur editing grafis dan tools prototyping yang dapat digunakan secara gratis di perangkat Mac dan PC.
- Figma dapat digunakan baik di web, maupun pada aplikasi yang disediakan. Dengan terhubungnya pengguna melalui internet, banyak orang dapat melakukan kolaborasi project tim secara real-time bersamaan.
- Web design yang termasuk dalam salah satu fokus bidang UI/UX pun dapat dibuat dengan menggunakan figma melalui  tahapan-tahapan "IDE/Tools", "Importing Old Sketch Files", "Setting Up New Frames (Artboards)", "Grid and Layout Columns", "Layers and Groups", "Images", dan "Typography".

<br><br><br>

# Resume Materi KMReact – HTML

- HTML (Hypertext Markup Language) merupakan bahasa markup yang berguna untuk menyusun struktur dari website. Dengan kombinasi teks dan simbol yang ada, HTML dapat digunakan untuk melakukan penyusunan heading, paragraf, gambar, link, dan komponen lainnya pada website yang dapat diakses melalui browser.
- HTML memiliki tag yang memiliki berbagai fungsi, contohnya p untuk mengisi teks dalam paragraf, h(1-6) sebagai heading dalam website mulai dari ukuran 1 (terbesar) hingga 6 (terkecil), br untuk baris baru, img untuk menampilkan gambar, a untuk hyperlink, ul untuk unordered list, ol untuk ordered list, li untuk isi list, table untuk menyusun data dalam bentuk tabel dengan bantuan tr (table row) td (table data), form untuk mengisi data dalam bentuk form, dan pembagi bagian dari struktur HTML layaknya div span, serta masih banyak lagi tag lainnya yang berguna untuk membangun sebuah website.
- Di dalam tiap tag terdapat atribut yang dapat diatur seperti id dan class untuk melakukan pengelompokan agar mudah diatur layouting dan CSS-nya, serta beberapa atribut lain yang dapat mengatur style. Namun, untuk style lebih direkomendasikan dibedakan di CSS saja.

<br><br><br>

# Resume Materi KMReact – CSS
- CSS (Cascading Style Sheet) merupakan bahasa cascading style yang biasa digunakan untuk mengatur tampilan elemen yang tertulis pada bahasa markup, dalam kasus ini tentunya HTML. CSS menjadi media yang dapat menata tampilan web dari pondasi HTML yang ada. Dengan adanya CSS kita tak perlu mendeskripsikan tampilan masing-masing elemen berulang-ulang, code jadi lebih singkat, dan meminimalisir error. Struktur syntax CSS berupa `selector` {`declaration block` : `value`}. Selector di sini merupakan elemen HTML yang nantinya akan diatur dengan property yang ada di CSS itu sendiri.

- CSS dapat diinclude ke dalam program web dengan 3 cara :
  - Internal : Dengan penggunaan tag `<style>` pada `<head>`.
  - Inline : Di dalam tag HTML. Contohnya
  ```
  <p style="color:lightblue";>Ini teks biru terang.</p>
  ```
  - Eksternal : Dengan file berbeda dengan ekstensi CSS seperti `style.css` yang nantinya akan di`<link>` pada `<head>`. Contohnya
  ```
  <link rel="stylesheet" href="style.css">
  ```
 
- CSS memiliki fitur yang sangat banyak, mulai dari properti dasarnya, CSS layouting, dan pengembangan lanjutan pada CSS3. Beberapa materi yang saya pelajari sebagai berikut :
  - Penempatan CSS
  - Font Styling
  - Text Styling
  - Background
  - Selector
  - Pseudo Class
  - Inheritance
  - Specificity
  - Display
  - Dimensi & Overflow
  - Box Model : Margin, Padding, Border, Box Sizing, CSS Reset
  - Float
  - Clear
  - Position : Static, Relative, Absolute, Fixed, Flex
  - Z-Index
  - Border Radius
  - Opacity
  - RGBa & HSLa
  - Box Shadow
  - Text Shadow
  - Linear & Radial Gradient
  - Font Face
  - Filter
  - Transform
  - Transition
  - Animation

<br><br><br>

# Resume Materi KMReact – Bootstrap
- Bootstrap adalah framework CSS gratis dan open source untuk mendesain situs web dan aplikasi web. Kerangka kerja ini mencakup template desain berbasis HTML dan CSS untuk tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya, serta  ekstensi JavaScript opsional. Dengan adanya Bootstrap, kita tidak perlu susah-susah untuk mengatur CSS dari web yang ingin dibuat. Code yang perlu diketik menjadi lebih sedikit dan meningkatkan efisiensi waktu. Namun, tentu saja hal ini tidak semerta-merta menghilangkan peran dari pemahaman CSS itu sendiri karena Bootstrap memiliki keterbatasan dalam membangun sebuah project yang kompleks dan berskala besar.

- Langkah penggunaan Bootstrap meliputi proses download assets yang ada dan menghubungkan file HTML kita dengan Bootstrap melalui tag `<link>` sebagai berikut :
  ```
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  ```
  Setelahnya kita tinggal menggunakan property Bootstrap yang telah disediakan dengan melakukan pemanggilan pada `class` elemen HTML kita, contohnya :
  ```
  <div class="d-flex mt-5 pt-5 ps-5 justify-content-center">
  ```
  Elemen div di atas memiliki berbagai macam property yang distack menggunakan pemanggilan Bootstrap yang ada.
 
- Bootstrap memiliki beberapa kelebihan dan kekurangan sebagai berikut
  Kelebihan Bootstrap :
  - Memberi kemudahan membuat website yang responsive
  - Lebih efisien dalam waktu pembuatan website
  - Dapat meminimalisir bug antar browser
  - Banyak fitur custom yang dapat digunakan
  - Dapat meningkatkan konsistensi desain
  - Open-source
  - Banyaknya resource & support yang tersedia

  Kekurangan Bootstrap :
  - Memiliki tampilan yang mirip satu sama lain antar website Bootstrap
  - Perlunya pembelajaran ulang untuk mengetahui class Bootstrap agar dapat digunakan
  - Memperlambat performance website jika tanpa optimasi yang baik akibat load time

<br><br><br>

# Resume Materi KMReact – Javascript Refreshment
- Javascript merupakan bahasa pemrograman yang digunakan untuk mengembangkan situs web agar lebih dinamis dan interaktif. Untuk melengkapi HTML sebagai pondasi dan CSS sebagai sebuah skin, Javascript meningkatkan fungsionalitas sebuah halaman web. Kita bahkan dapat menggunakan Javascript untuk membuat aplikasi, alat, dan bahkan game di web. Javascript digunakan tidak hanya untuk membuat web  lebih dinamis dan interaktif, tetapi juga untuk menangani logika data. Pada dasarnya fitur Javascript digunakan tidak hanya di Front-End tetapi juga di Back-End. File Javascript umumnya di-link pada bagian bawah body HTML melalui tag `<script>`, contohnya sebagai berikut :
```
<script src="script.js"></script>
```
- Javascript memiliki beberapa tipe data yang dibagi menjadi 2 jenis, yaitu :
    - Tipe data primitive <br>Tipe data primitif hanya dapat menyimpan satu nilai dalam satu waktu dan tidak dapat diubah  seperti tipe data non-primitif. Tipe data primitif dianggap sama jika nilainya sama. Contohnya : Number, String, Boolean, Undefined, Null, dan Symbol.
    - Tipe data non-primitive <br>Tipe data non-primitive dapat menyimpan dan mengubah beberapa nilai sekaligus. Tipe data non-primitive dianggap berbeda meskipun nilainya sama dan dalam urutan yang sama. Contohnya : Function, Array, dan Object. <br>Pendeklarasian variable yang ada pun beragam, kita dapat menggunakan `var`, `let`, atau `const`.

Untuk sifatnya masing-masing ialah sebagai berikut :
| Cara Declaration | Block Scoped | Function Scoped | Reassignable | Redecralable | Can be hoisted |
| :---             | :---:        | :---:           | :---:        | :---:        | :---:          |
| <b>var</b>       | v            | v               | v            | v            | v              |
| <b>let</b>       | x            | v               | v            | v            | x              |
| <b>const</b>     | x            | v               | x            | x            | x              |

- Pada Javascript terdapat konsep Asynchronous yaitu hasil atau keluaran dari eksekusi yang tidak selalu berdasarkan urutan kode, tetapi pada waktu pemrosesan. Eksekusi asinkron tidak memblocking atau menunggu perintah selesai, melainkan mengeksekusi perintah berikutnya secara asinkron. Contohnya : Async Await, Callback, dan Promise. Selain itu, terdapat juga objek Javascript spesial yang dapat dipakai untuk mendapatkan struktur dokumen website, bahkan memanipulasinya, yakni Javascript DOM (Document Object Model). DOM ini adalah model objek XML dan HTML standar dengan properti platform-independen. Pada tingkat yang  paling sederhana, sebuah situs  web terdiri dari dokumen HTML dan CSS. Browser membuat representasi dari dokumen yang  disebut  DOM (Document Object Model). Dokumen-dokumen ini memungkinkan JavaScript untuk mengakses dan memanipulasi elemen dan gaya situs web.

<br><br><br>

# Resume Materi KMReact - Clean Code

- Clean code adalah kode program yang memiliki struktur kode yang terbentuk dengan baik dan terorganisir dengan baik. Kode program yang mengimplementasikan clean code lebih mudah dibaca dan dipahami karena setiap bagian kode memiliki arti dan fungsi untuk tujuan tertentu. Clean code diimplementasikan demi terciptanya work collaboration yang baik, feature development yang terstruktur, dan faster development.
<br>

- Clean code memiliki beberapa karakteristik, yaitu :
  - Mudah dipahami
  - Mudah dieja dan dicari
  - Singkat namun mendeskripsikan konteks
  - Konsisten
  - Hindari penambahan konteks yang tidak perlu
  - Memberikan komentar yang tepat
  - Good function
  - Menggunakan konvensi
  - Formatting dengan tepat
<br>

- Clean code memiliki beberapa prinsip, yaitu :
  - Keep it so simple
  - Don't repeat yourself
  - Refactoring

<br><br><br>

# Resume Materi KMReact - Introduction Algorithm

### Algoritma
Algoritma adalah prosedur komputasi yang didefinisikan dengan baik yang mengambil beberapa nilai sebagai input dan menghasilkan beberapa nilai sebagai output.
Contoh Algoritma :
- Mengecek bilangan prima
- Sortir dan pengurutan data
- Pencarian data

Karakteristik dari Algoritma ialah sebagai berikut :
- Memiliki batas (awal dan akhir)
- Instruksi terdefinisi dengan baik
- Efektif dan efisien

Algoritma dasar dibagi menjadi beberapa struktur, yaitu :
- Sequential
- Branching
- Looping

<br>

### Pseudocode
Pseudocode merupakan deskripsi dari algoritma pemrograman yang dituliskan secara sederhana dibandingkan dengan sintaksis bahasa pemrograman agar dapat dipahami oleh manusia secara lebih mudah. Pseudocode juga berguna untuk beberapa hal berikut ini :
- Sebagai alat dokumentasi
- Mempermudah proses penerjemahan menjadi suatu bahasa pemrograman
- Dapat digunakan untuk proses mencari ide tanpa memikirkan implementasi suatu bahasa program khusus
- Lebih mudah dalam mengembangkan aplikasi yang dibuat

<br>

### Flowchart
Flowchar adalah bagan alur atau diagram yang menampilkan langkah-langkah dan keputusan untuk melakukan sebuah proses dari suatu  program. Tiap langkahnya digambarkan dalam bentuk diagram dan dihubungkan dengan garis atau panah. Peran flowchart cukup penting dalam memutuskan sebuah langkah atau fungsionalitas dari project pembuatan program berskala besar dan membuat sebuah program menjadi lebih jelas, ringkas, dan mengurangi kemungkinan kesalahan dalam penafsiran.

<br><br><br>

# Resume Materi KMReact - React Fundamental
## JSX
### Apa Itu JSX?
- Singkatan dari Javascript XML
- Ekstensi pada Javascript

<br> Contoh syntax :

```jsx
const element = <h1>Hello, world!</h1>
```

<br>

### Kenapa Menggunakan JSX?

- JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
- Separation of Technology -> Separation of Concerns
- JSX memudahkan dalam menulis aplikasi React


<br><br>
## React Component & Props
### Apa Itu Props?
- Singkatan dari properties, membuat kita dapat memberikan argumen/data pada component
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah


<br><br>
## Component Composite
### Apa Itu Komponen?
Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.

<br>

### One Way Data Flow

One way data flow adalah suatu teknik yang hanya memiliki satu cara untuk mentransfer data ke seluruh aplikasi. Dengan teknik ini, kontrol terhadap data jadi lebih baik.

<br>

### Komposisi Komponen

- Kontainmen
- Spesialisasi


<br><br>
## React Lifecycle
### Lifecycle Method Yang Umum
- `render()`
- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

<br>

### Lifecycle Method Yang Lainnya

- `shouldComponentUpdate()`
- `static getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`


<br><br>
## Condition and List
### Render Bersyarat
Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi kita.
- Menggunakan `if`
- Inline `if` dengan operator `&&`
- Inline `if-else` dengan ternary conditional operator
- Mencegah komponen untuk rendering

<br>

### Render List

Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal `{}`.

<br>

### Key

Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.


<br><br>
## Directory Structure
### Struktur Direktori
React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder. Namun, ada beberapa hal yang patut dicatat, yaitu :
- Pengelompokan berdasarkan fitur atau rute
- Pengelompokan berdasarkan jenis file
- Hindari terlalu banyak nesting


<br><br>
## Styling Inline
Terdapat beberapa bentuk styling inline pada React yang meliputi :
- Classes dan CSS
- Atribut style
- Module CSS

<br><br><br>

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

# Resume Materi KMReact - React Hook
## React Hook Introduction
### React Hooks
Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

### Hooks Pada React
Hooks dasar :
- `useState`
- `useEffect`
- `useContext`

Hooks tambahan :
- `useReducer`
- `useCallback`
- `useMemo`
- `useRef`
- `useImperativeHandle`
- `useLayoutEffect`
- `useDebugValue`

### Aturan Pada Hooks
- Hanya panggil Hooks di tingkat atas. Jangan panggil Hooks dari dalam loops, condition, atau nested functions.
- Hanya panggil Hooks dari fungsi-fungsi React. Jangan memanggil Hooks dari fungsi-fungsi Javascipt biasa. Kita dapat memanggil Hooks dari komponen-komponen fungsi React dan custom Hooks.

<br>

## Implement Use Effect
### Menggunakan useState
useState dipanggil dalam function component untuk menambahkan suatu state lokal. React akan menyimpan state antar render. useState memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut. Anda dapat memanggil fungsi ini dari sebuah event handler atau dimanapun.

### Menggunakan useEffect
useEffect adalah sebuah effect hook yang dapat melakukan side effect seperti pemanggilan data, setup subscription, mengganti dom secara manual dan lain-lain. jadi fungsi nya useEffect ini seperti componentDidMount dan componentDidUpdate sekaligus. jadi cukup dengan menggunakan useEffect kita dapat menggunakan fungsi dari componentDidMount dan componentDidUpdate. misalnya kalian ingin melakukan sebuah pemanggilan API ke server, kalian bisa melakukannya di dalam fungsi useEffect ini.

- Effect Hook memungkinkan kita melakukan efek samping (side effects) di dalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount = useEffect
- Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan

<br>

## Create Custom Hook
### Custom Hooks
Hook kustom adalah sebuah mekanisme untuk menggunakan kembali logika stateful (seperti mengatur subscription dan mengingat nilai saat ini), tetapi setiap waktu Anda menggunakan hook kustom, semua state dan efek itu sepenuhnya terisolasi.

<br><br><br>

# Resume Materi KMReact - React Routing
## Routes Learning
### Apa Itu Router?
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

### Multi Page Application & Single Page Application
- Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.
- Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

<br>

### Keunggulan SPA & MPA

| Single Page Application                 | Multi Page Application |
| :---:                                   | :---: |
| Waktu loading website jauh lebih cepat  | SEO website akan lebih mudah dioptimasi |
| Tidak ada query tambahan ke server      | Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda |
| Front-end yang cepat dan responsif      | Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna (User Experience) |   |

<br>

### Kekurangan SPA & MPA

| Single Page Application                 | Multi Page Application |
| :---:                                   | :---: |
| Tidak bagus dalam hal SEO  | Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application |
| Berat saat di-load/buka pertama kali      | Perlu mengintegrasikan antara front-end dan back-end |
| Kurang aman dibanding dengan website biasa      | Lebih sering membutuhkan maintenance dan update |
| Masalah kompatibilitas browser | Mungkin akan lebih sering menemukan masalah performa pada website  |

<br>

### React Router

```
npm install react-router-dom --save
```

- BrowserRouter
<br> `<BrowserRouter>` digunakan sebagai router yang menggunakan API history HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

- Route
<br> `<Route>` digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web. Attribute path merupakan url pada browser pada proses routing. Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan.

- Switch
<br> `<Switch>` digunakan untuk membungkus kumpulan bebrapa component Route. Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, Jika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component Notfound.

- Link
<br> digunakan untuk berpindah antar halaman property `to` tersebut merujuk pada path di route yang akan dituju. Elemen kosong `<></>` tersebut adalah shorthand dari `<React.Fragment></ReactFragment>` yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

<br>

## Use URL Params
### Apa Itu URL Parameter?
Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

### Perbedaan Link dan Redirect?

| Link                                    | Redirect                                      |
| :---:                                   | :---:                                         |
| Dapat digunakan pada kondisi apapun     | Lebih sering digunakan pada halaman 404       |
| Memberikan history baru pada browser    | Menimpa history pada browser                  |
| Bereaksi dengan click seperti a href    | Bereaksi dengan suatu kondisi                 |

<br>

## Hook Routing React
### useHistory
`useHistory` memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi. Beberapa contohnya ialah :

| Property | Kegunaan |
| :---:                                   | :---:                                         |
| length | (angka) Jumlah entri dalam tumpukan riwayat |
| go | (fungsi) penunjuk di tumpukan riwayat sebanyak n entri |
| goBack | (fungsi) Setara dengan go(-1) |
| goForward | (fungsi) Setara dengan go(1) |
| push | (fungsi) Mendorong entri baru ke tumpukan |
| replace | (fungsi) Mengganti entri saat ini di tumpukan riwayat history |

### useParams
`useParams` mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari `<Route>` saat ini.

### useRouteMatch
`useRouteMatch` mencoba mencocokkan URL saat ini dengan cara yang sama seperti `<Route>`. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender `<Route>`.

<br><br><br>

# Resume Materi KMReact - React Form
## Basic Form
### Penggunaan Form
Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya. Dalam react akan ada banyak hal kita pelajari dari Form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb. Untuk saat ini kita akan belajar Basic Form.

### Macam Form
- Element `<input>`
<br> Biasanya digunakan inputan yang tidak terlalu panjang.

- Element `<textarea>`
<br> Element <textarea> biasanya digunakan inputan yang cukup panjang. Semisal deskripsi.
  
- Element `<select>`
<br> Element <select> biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.

- Radio Button
<br> Radio button merupakan salah satu type di elemen <input>. Kita hanya bisa memilih 1 pilihan menggunakan radio button.

- Checkbox
<br> Checkbox merupakan salah satu type di elemen <input>. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.

- Type elemen input lainnya
<br> Selain yang sudah disebutkan, masih banyak lagi type elemen input lainnya :
  - text (default)
  - image
  - submit
  - button
  - month
  - tel
  - color
  - number
  - time
  - checkbox
  - password
  - url date
  - radio
  - week
  - datetime-local
  - range
  - email
  - reset
  - file
  - search
  - hidden

<br>

## Controlled Component
### Apa itu Controlled Component?
Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".

### Tag Textarea
Pada HTML, elemen `<textarea>` mendefinisikan teks di dalamnya sebagai elemen anaknya. Di React, `<textarea>` menggunakan atribut value. Dengan cara ini, sebuah form yang menggunakan `<textarea>` dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris.

### Tag Select
Pada HTML, `<select>` membuat sebuah daftar drop-down. Perhatikan bahwa opsi mula-mula dipilih, karena adanya atribut selected. Di React, alih-alih menggunakan atribut selected, kita menggunakan atribut value di tag select. Hal ini lebih mudah karena hanya perlu diubah di satu tempat saja.

### Handle Banyak Input
Ketika kita membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari `event.target.name`.

<br>

## Uncontrolled Component
### Apa Itu Uncontrolled Component?
Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

### Nilai Default
Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut `defaultValue` alih-alih menggunakan value.

### Tag File Input
Pada HTML, sebuah `<input type="file">` memungkinkan pengguna untuk memilih satu atau beberapa flle dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JavaScript lewat File API. Dalam React, sebuah `<input type="file"/>` merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

<br>

## Uncontrolled vs Controlled Component
### Uncontrolled Component
Input yang tidak terkontrol seperti input formulir HTML tradisional. Kita kemudian bisa mendapatkan nilainya menggunakan `ref`. Misalnya, di tombol ditambahkan `onClickhandler`.  Dengan kata lain, kita harus 'menarik' nilai dari field saat kita membutuhkannya. Ini bisa terjadi ketika formulir di submit. Itu adalah cara paling sederhana untuk mengimplementasikan input formulir. Tentu saja ada kasus yang valid untuk menggunakannya dalam form sederhana dan saat belajar React. Namun, uncontrolled input tidak powerful. Jadi selanjutnya kita akan mempelajari controlled input.

### Controlled Component
Sebuah controlled input menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan ini adalah cara yang lebih "React way" untuk pendekatan ini yang tidak berarti harus selalu menggunakannya). Tetapi nilai input ini harus ada di state yang disimpan di suatu tempat. Biasanya, komponen yang merender input (alias form component) menyimpannya di state-nya. Tentu saja, itu bisa dalam state komponen lain, atau bahkan di penyimpanan state terpisah (separate state store), seperti Redux. Ini juga berarti bahwa komponen form dapat merespon perubahan input dengan segera, misalnya oleh :

- Umpan balik di tempat, seperti validasi
- Menonaktifkan tombol kecuali semua field memiliki data yang valid
- Mengimplementasi format input tertentu, seperti nomor kartu kredit

Tetapi jika tidak memerlukan semua itu dan menganggap uncontrolled lebih sederhana, lakukanlah.

### Apa yang Membuat Elemen "Controlled"?
Selain input, ada elemen bentuk lain, seperti checkboxes, radios, selects and textareas. Elemen formulir menjadi "controlled" jika kita menetapkan nilainya melalui prop. Namun, masing-masing elemen formulir memiliki prop yang berbeda untuk menetapkan nilai itu.

| Element | Value Property | Change Callback | New value in callback |
| :---: | :---: | :---: | :---: |
| `<input type="text" />` | value="string" | onChange | event.target.value |
| `<input type="checkbox" />` | checked={boolean} | onChange | event.target.checked |
| `<input type="radio" />` | checked={boolean} | on Change | event.target.checked |
| `<textarea />` | value="string" | onChange | event.target.value |
| `<select />` | value="option value" | onChange | event.target.value |

### Kesimpulan
Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.
Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke controlled input.

| Fitur | uncontrolled | controlled |
| :---: | :---: | :---: |
| one-time value retrieval | v | v |
| validating on submit | v | v |
| instant field validation | x | v |
| conditionally disabling submit button | x | v |
| enforcing input format | x | v |
| several inputs for one piece of data | x | v |
| dynamic inputs | x | v |

<br>

## Basic Validation
### Kenapa Perlu Divalidasi?
Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan:
- Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
- Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
- Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

### Tipe Validasi Data Formulir
- Client-side validation
<br> Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi. Validasi sisi klien, terbagi atas dua bagian :
  - Built-in form validation, yaitu menggunakan fitur validasi langsung dari HTML5. Biasanya, validasi ini tidak membutuhkan Javascript dan memiliki performa yang lebih baik. Tapi tidak dapat dikostumisasi. Kadang pesan errornya cukup 'kaku'. Contohnya: required, minlength, maxlength, min, max, type, dan pattern.
  - Menggunakan Javascript. Ini membuat validasi form dapat dikostumisasi. Tetapi kita perlu membuatnya sendiri.

- Server-side validation
<br> Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna. Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly Karena, koreksi kesalahan akan dikirimkan, setelah form disubmit.

### Built-in Form Validation
- required
<br> required digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan.

- minlength dan maxlength
<br> minlength dan maxlength digunakan untuk menentukan jumlah karakter minimal dan maksimal yang bisa dimasukkan. Jika kurang dari minlength akan muncul pemberitahuan, dan tidak bisa melebihi maxlength.

- min dan max
<br> min dan max digunakan untuk menentukan nilai minimum dan maksimum angka yang bisa dimasukkan.

- type
<br> type digunakan untuk menentukan apakah data berupa angka, email, atau type yang lainnya.

- pattern
<br> pattern digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan.

### Menggunakan Javascript
Validasi dengan Javascript dapat dilakukan ketika :
- Ketika ada perubahan di form. Ketika ada perubahan, akan mentrigger event onChange. Real-time berdasarkan perubahan data, namun fungsi validasi akan terus dipanggil selama ada perubahan. Bisa dikombinasikan dengan disable button.
- Ketika menekan tombol submit. Ketika menekan tombol submit, akan mentrigger event on Submit. Kelebihannya validasi cukup sekali, namun tidak akan real-time memvalidasi form.

<br><br><br>

# Resume Materi KMReact - Global State Management and Data Fetching
## Global State Introduction
### Global State Management
Redux
- Redux adalah library untuk manajemen state global
- Redux menggunakan struktur "one-way data flow" 
- Redux menggunakan beberapa tipe code

### Saat yang tepat untuk menggunakan Redux:
1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

### Redux Libraries dan Tools
1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

### Komponen Penting di Redux
1. Action
<br> Digunakan untuk memberikan informasi dari aplikasi ke store.

2. Reducer
<br> Pure Javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru.

3. createSLice()

4. Store
<br> Objek sentral yang menyimpan state pada aplikasi.

### Memasang Redux Store pada React

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById( 'root')
)
```

### Memakai dan mengubah state
1. Hooks
2. Connect

<br>

## Redux Thunk
### Apa Itu Redux Thunk?
Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

### Kenapa perlu Redux Thunk?
Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data.

- Asynchronous Dispatch
- Conditional Dispatch

<br>

## Persisted State
### Menyimpan State ke Storage

```jsx
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers' // Root reducer

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer
const store = createStore(
  persistReducer, // pass the persisted reducer instead of rootReducer to createStore
  applyMiddleware() // add any middlewares here
)

const persistor = persistStore( store); // used to create the persisted store, persistor will be used in the next step
export {store, persistor}
```

```jsx
import {store, persistor} from './redux/store
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> // null passed to loading, persistor is being used here
        <RootComponent />
      </PersistGate>
    </Provider
  );
};
```

<br>

## Data Fetching
Aplikasi React akan membutuhkan server yang bisa digunakan untuk mengambil data atau autentikasi seperti login. Proses ini yang disebut dengan data fetching karena akan dilakukan pengambilan data. Nantinya server akan memberikan response berupa data yang mungkin nanti akan ditampilkan pada web atau aplikasi React.

### Cara Fetching Data di React
1. Fetch API
2. Axios
3. React Query Library

### Field Dalam Option Fetch API
- method:
  - GET
  - POST
  - PUT
  - DELETE
  - HEAD
- url: URL dari request
- body: body dari requst
- headers: objek headers
- referrer: referrer dari request
- mode:
  - cors
  - no-cors
  - same-origin
- credentials:
  - omit
  - same-origin
- redirect:
  - follow
  - error
  - manual
- integrity: subresource integrity value
- cache: cache mode (default, reload)

### Response
- type:
  - basic
  - cors
- url
- useFinalURL
- status: status code (ex: 200, 404, etc.)
- ok: boolean untuk response sukses (status 200-299)
- statusText: status code (ex: OK)
- headers: headers objek dari response

### Method Response
- clone()
- error()
- redirect()
- arrayBuffer()
- blob()
- formData()
- json()
- text()

### Hasura
Hasura GraphQL Engine adalah server GraphQL yang sangat cepat yang memberi Anda GraphQL API instan dan realtime melalui Postgres, dengan pemicu webhook pada peristiwa database, dan skema jarak jauh untuk logika bisnis.

### Postman
Postman adalah platform API bagi pengembang untuk merancang, membangun, menguji, dan mengulangi API mereka.

<br> Kenapa Menggunakan Postman?
- Mudah untuk berkolaborasi dengan sinkronisasi otomatis dengan anggota lain
- Antarmuka yang sederhana
- POSTMAN gratis hingga 3 anggota dan koleksi tak terbatas

<br><br><br>

# Resume Materi KMReact - Testing
## Basic Testing
### Apa Itu Testing?
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

<br> **Manfaat Testing**
<br> Manfaat Testing Walaupun menambahkan waktu dan code dalam membuat testing, testing memiliki manfaat sebagai berikut:
- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

<br> **Kategori Testing**
<br> Secara umum, cara mengetes di React terbagi menjadi dua kategori:
1. Rendering component trees di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
2. Menjalankan aplikasi lengkap di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end".

### Pertimbangan Memilih Tools
**Kecepatan Iterasi vs Environment Yang Realistis**
<br> Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mungkin menggunakan environment peramban yang asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.

<br> **Seberapa Banyak Mock**
<br> Dengan komponen, perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai. Jika kita mengetes sebuah form, haruskah tes yang dilakukan juga menguji tombol yang ada di dalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form? Pertimbangan pemilihan perkakas untuk testing tentu saja dikembalikan kepada kebutuhan masing-masing.

### Rekomendasi Tools
**Jest**
<br> Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.

<br> **React Testing Library**
<br> Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara "dangkal" pada sebuah komponen tanpa anak, test runner seperti Jest yang memungkinkan kita melakukan mocking.

<br> **Install**
<br> Jika kita menginstall React menggunakan create-react-app, Jest (dan React Testing Library) akan secara default sudah terinstall. Tetapi jika kita, menggunakan custom React setup, kita perlu menginstall dan men set up Jest (dan React Testing Library).

<br>

## Create Basic Testing with RTL
### Rendering Komponen
**Render dan Debug**
<br> Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL. React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

### Memilih Elemen
**Memilih Elemen**
<br> React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Salah satu contohnya ialah getBy Text untuk memilih teks dari elemen yang sudah dipilih.

<br> **Kategori Testing**
<br> Contoh lain yang bisa digunakan.
- LabelText: `getByLabelText: <label for="search" />`
- PlaceholderText: `getByPlaceholderText: <input placeholder="Search" />`
- AltText: `getByAltText: <img alt="profile" />`
- DisplayValue: `getByDisplayValue: <input value="JavaScript" />`

### Handle Event
```jsx
function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
```

```jsx
described 'Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest. fn();
    
    render (
      <Search value="" onChange={on Change}>
        Search:
      </Search>
    );
    
    fireEvent.change( screen.getByRole('textbox')
      target: { value: 'JavaScript' },
    });
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
```

### Handle Asynchronous
**Untuk Kasus Apa?**
<br> Ini digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.

```jsx
import React from 'react';
import axios from 'axios';
const URL = 'http://hn.algolia.com/api/v1/search';

function App() {
  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function handleFetch(event) {
    let result;
    
    try {
      result = await axios.get(`${URL}?query=React`);
      
      setStories(result.data.hits);    
    } catch (error) {
      setError(error);
    }
  }
}
export default App;

// Kode Fetch sebuah API
```

```jsx
return (
  <div>
    <button type="button" onclick={handleFetch}>
      Fetch Stories
    </button>

    {error && <span>Something went wrong ...</span>}

    <ul>
      {stories.map((story) => (
        <li key={story.objectID}>
          <a href={story.url}>{story.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

// HTML
```

Di sini perlu dibuat mock axios menggunakan Jest dengan
```jsx
jest.mock('axios');
```

<br>

## Testing Custom Hook
### Library Yang Digunakan
Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.
```
npm install -D @testing-library/react-hooks
```

### Implementasi
- Custom Hook
- Testing Value
- Testing Callback
- Testing Re-render

<br><br><br>

# Resume Materi KMReact - Deployment
## Build React App
### Kenapa Perlu Build
Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi. Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.

### Build React App
Karena proyek kita dibangun menggunakan Create React App, `npm run build` . Ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan `npm start` .

### Run Optimized App
Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan serve.

<br>

## Deployment
### Apa Itu Deployment?
Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

### Deployment dengan Surge
Surge adalah layanan penerbit website statik (static web publishing) gratis untuk Front-End Developers. Website statik yang menggunakan surge akan memiliki subdomain *.surge.sh. Surge dapat menerima file HTML, CSS, dan JS.

<br> **Install Surge**
1. Pastikan menggunakan versi Node yang terbaru.
2. Install Surge di terminal

`npm install --global surge`

<br> **Deploy dengan Surge**
Jalankan perintah `surge` di terminal.

<br> **Teardown Surge**
Terkadang kita tidak ingin mempublikasikan sebagian domain atau subdomain. Untuk itu kita bisa teardown sebuah project melalui surge CLI. Ini efektif membuat proyek kita offline.

### Deployment dengan Netlify CLI
**Apa itu Netlify?**
<br> Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket.

<br> **Deploy dengan Netlify**
1. Buat akun Netlify (www.netlify.com)
2. Install Netlify CLI di terminal

`npm install netlify-cli -g`

3. Jalankan perintah netlify deploy di terminal.
4. Verify akun melalui browser, pilih Authorize.
5. Pilih "Create & configure a new site". Untuk team, pilih yang sudah tersedia. Site name opsional.
6. Pilih lokasi file yang akan dideplou. Pilih ./build

<br><br><br>

# Resume Materi KMReact - GraphQL-Basic
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

<br><br><br>

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

<br><br><br>

# Resume Materi KMReact - GraphQL-Query and Apollo Client
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

<br><br><br>

# Resume Materi KMReact - GraphQL - Mutation
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

<br><br><br>

# Resume Materi KMReact - GraphQL-Subscription
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
