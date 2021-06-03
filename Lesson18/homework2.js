//TODO написать функцию, которая выводит числа от 1 до 20 с помощью setTimeout
function  printNumberInterval() {
    let counter = 1;
    setTimeout(function interval(){
        console.log(counter++);
        let timerId = setTimeout(interval, 100);
        if(counter === 21){
            clearTimeout(timerId);
        }
    }, 2000)
}

printNumberInterval();