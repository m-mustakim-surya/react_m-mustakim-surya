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

<br><br>

# Praktikum React Hook
Ubah Class Component pada assignment sebelumnya menjadi Function Component. Sekaligus ubah lifecycle method & state management menggunakan React hooks.

<br> Berikut ini merupakan hasil kerja saya : [Praktikum React Hook](https://github.com/m-mustakim-surya/react_m-mustakim-surya/tree/14_React-Hook/14_React%20Hook/praktikum/reacthook)

<br> Tampilan awal aplikasi React :
<br> ![Tampilan-Awal](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/14_React-Hook/14_React%20Hook/screenshots/01_Tampilan-Awal.PNG)

<br>

Menambahkan list dengan menggunakan inputan :
<br> ![Memasukkan-Input](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/14_React-Hook/14_React%20Hook/screenshots/02_Memasukkan-Input.PNG)

<br>

Melakukan submit input dengan tombol submit :
<br> ![Submit-Input](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/14_React-Hook/14_React%20Hook/screenshots/03_Submit-Input.PNG)

<br>

Mengaktifkan checkbox/checklist jika pekerjaan selesai dikerjakan :
<br> ![Checkbox-List](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/14_React-Hook/14_React%20Hook/screenshots/04_Checkbox-List.PNG)

<br>

Menghapus pekerjaan dari list dengan tombol delete :
<br> ![Delete-List](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/14_React-Hook/14_React%20Hook/screenshots/05_Delete-List.PNG)

<br>

Melakukan submit tanpa memasukkan input :
<br> ![Submit-Tanpa-Input](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/14_React-Hook/14_React%20Hook/screenshots/06_Submit-Tanpa-Input.PNG)
