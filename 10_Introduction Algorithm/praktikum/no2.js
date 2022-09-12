const button = (number) => {
    let counter = 0
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            counter++;
        }
    }
    if(counter % 2 == 0){
        console.log('lampu mati');
    } else{
        console.log('lampu menyala');
    }
}

button(5);
button(4);