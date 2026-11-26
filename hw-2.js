let password = 'пароль';
let enterPassword = prompt('Введите пароль');
if (enterPassword === password) {
    alert('Пароль введён верно');
} else {
    alert('Пароль введён неправильно');
}

let c = 5;
if (c > 0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 33;
let e = 112;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;    
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Такого месяца не существует');
        break;
}

let input = prompt('Пожалуйста, введите любое число');
let number = Number(input);
if (input === null || input.trim() === '' || isNaN(number)) {
    alert('Вы ввели не число');
} else if (number % 2 === 0) {
    alert('Число чётное');
} else {
    alert("Число нечётное");
}

let clientOS = 0;
if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке");
} else {
    console.log('Неизвестная операционная система');
}

clientOS = 0;
let clientDeviceYear = 2015;
if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS === 0 && clientDeviceYear >= 2015) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log("Установите облегченную версию приложения для Android по ссылке");
}else if (clientOS === 1 && clientDeviceYear >= 2015) {
    console.log("Установите версию приложения для Android по ссылке");
}