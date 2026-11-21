let a = 10;
alert(a);
a = 20;
alert(a);

const ferstIphone = 2007;
alert(ferstIphone);

const jsAvtorName = 'Брэндан Эйх';
alert(jsAvtorName);

a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

result = 2 ** 5;
alert(result);

a = 9;
b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
    name: 'Мария',
    age: '42',
    isAdmin: true
};

const userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);

let number = Number(prompt('Загадай любое число'));

let doubledNumber = number * 2;
alert(doubledNumber);

let additionTen = doubledNumber + 10;
alert(additionTen);

let divisionTwo = additionTen / 2;
alert(divisionTwo);

let finalResult = divisionTwo - number;
alert(finalResult);

alert('Ответ равен ${finalResult}');