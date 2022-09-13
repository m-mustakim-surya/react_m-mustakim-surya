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
<br>

# Praktikum Clean Code
### Problem 1 - Analysis
Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan.
<br> Berapa banyak kekurangan dalam penulisan kode tersebut?
<br> Bagian mana saja terjadi kekurangan tersebut?
<br> Tuliskan alasan dari setiap kekurangan tersebut!

```javascript
class user{
    var id;
    var username;
    var password;
}

class uservice{
    user[] users = [];
    user[] getallusers(){
        return users;
    }

    user getuserbyid(userid){
        return users.filter(userid);
    }
}
```

<br> Berikut ini merupakan hasil kerja saya :
[no1.md](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/09_Clean-Code/09_Clean%20Code/praktikum/no1.md)

<br><br>
### Problem 2 - Rewrite
Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan. Ubahlah penulisan kode berikut menjadi lebih terbaca dan rapi!

```javascript
class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan() {
        tambahkecepatan(10);
    }

    tambahkecepatan(var kecepatanbaru) {
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main() {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}
```

<br> Berikut ini merupakan hasil kerja saya :
[no2.js](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/09_Clean-Code/09_Clean%20Code/praktikum/no2.js)
<br> Outputnya sebagai berikut : 
<br> ![ss_no2](https://github.com/m-mustakim-surya/react_m-mustakim-surya/blob/09_Clean-Code/09_Clean%20Code/screenshots/no2.PNG)
