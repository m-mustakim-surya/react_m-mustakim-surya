### Problem 1 - Analysis
Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan.
Berapa banyak kekurangan dalam penulisan kode tersebut?
Bagian mana saja terjadi kekurangan tersebut?
Tuliskan alasan dari setiap kekurangan tersebut!

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

Kode di atas memiliki beberapa kekurangan, antara lain :
1. Penamaan variable semestinya menggunakan `let` dibanding `var` demi mengurangi resiko error scooping
2. Nama variable dan function pada Javascript seharusnya menggunakan camel case mengikuti convention Javascript
3. Nama class pada Javascript seharusnya menggunakan pascal case mengikuti convention Javascript
4. Class tidak memiliki `constructor` yang aslinya dapat menginisialisasi nilai properti atau variable-nya
5. Class method tidak memiliki `this` yang aslinya dapat me-refer current class atau object demi menghindari kesalahan pemanggilan parameter yang ada dalam sebuah class atau object
6. Inheritence class yang tidak menggunakan extends sehingga tidak dapat diturunkan
