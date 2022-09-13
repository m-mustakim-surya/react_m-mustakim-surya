const primeNumber = (number) => {
    let divider = 0;

    for(let i = 1; i <= number; i++) {
        if(number % i == 0){
            divider++;
        }
    }
    if(divider == 2){
        console.log("Bilangan Prima");
    } else{
        console.log("Bukan Bilangan Prima");
    }
}

primeNumber(3);
primeNumber(7);
primeNumber(10);