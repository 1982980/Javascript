//TODO использую условие if для включения clearInterval

// function printNumberInterval () {
//     let number = 1;
//     let interval = setInterval(()=> {
//         if(number === 20) {
//             clearInterval(interval);
//         }
//         console.log(number++);
//     }, 100);
// }
//
// printNumberInterval();

//TODO добавляю setInterval в setTimeout с нужным ограничителем по времени,
// чтобы количество интервалов ожидаемому результату .
// добавил таймер на время выполнения. 2 сек недостаточно для 20-ти выводов

// function printNumberIntervalWithTimer() {
//     let number = 1;
//     let startTime = Date.now();
//     let endTime;
//     let interval = setInterval(() => console.log(number++), 100);
//     setTimeout(() => {
//         clearInterval(interval);
//         endTime = Date.now();
//         console.log(endTime - startTime);
//     }, 2000);
// }
// printNumberIntervalWithTimer();

//TODO первый вариант с добавлением таймера
function printNumberIntervalWithTimer() {
    let number = 1;
    let startTime = Date.now();
    let endTime;
    let interval = setInterval(() => {
        if(number === 20) {
            clearInterval(interval);
        }
        endTime = Date.now();
        console.log(number++, endTime - startTime);
    }, 100);
}
printNumberIntervalWithTimer();


