// function func() {
// 	console.log(this);
// }
// func();
//advanced context work
function checkDate(year, month, day) {
	let flag = true;
	let date = new Date(year, month, day);
	if (year != date.getFullYear()) flag = false;
	if (month != date.getMonth()) flag = false;
	if (day != date.getDate()) flag = false;
	return flag;
}

function areArraysTheSame(array1, array2) {
	return (
		array1.length === array2.length &&
		array1.every(function (element, index) {
			return element === array2[index];
		})
	);
}
// let elem = document.quconsole.log(er)ySelector('input');
// function func(surname, name) {
// 	alert(this.value + ', ' + surname + ' ' + name);
// }
// var func = func.bind(elem);
// func('Иванов', 'Иван');
// func('Петров', 'Пётр');
// OOP 1st lesson
// class Worker {
// 	constructor(name, surname, rate, days) {
// 		this._name = name;
// 		this._surname = surname;
// 		this._rate = rate;
// 		this._days = days;
// 	}
// 	getSurname() {
// 		return this._surname;
// 	}
// 	setSurname(surname) {
// 		this._surname = surname;
// 	}
// 	setName(name) {
// 		this._name = name;
// 	}
// 	getName() {
// 		return this._name;
// 	}
// 	getRate() {
// 		return this._rate;
// 	}
// 	setRate(rate) {
// 		this._rate = rate;
// 	}
// 	getDays() {
// 		return this._days;
// 	}
// 	setDays(days) {
// 		this._days = days;
// 	}
// 	getSalary() {
// 		return this._days * this._rate;
// 	}
// }
// class MyString {
// 	reverse(str) {
// 		str = String(str);
// 		let arr = str.split('');
// 		arr = arr.reverse();
// 		return arr.join('');
// 	}
// 	ucFirst(str) {
// 		let s = String(str);
// 		let arr = s.split('');
// 		arr[0] = arr[0].toUpperCase();
// 		return arr.join('');
// 	}
// 	ucWords(str) {
// 		let arr = String(str).split(' ');
// 		arr = arr.map((elem) => this.ucFirst(elem));
// 		return arr.join(' ');
// 	}
// }
// var str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
//OOP 2nd lesson
// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }
// class Student extends User {
// 	constructor(name, surname, year) {
// 		super(name, surname);
// 		this.year = year;
// 	}
// 	getCourse() {
// 		let date = new Date();
// 		let nowYear = date.getFullYear();
// 		let difference = nowYear - this.year;
// 		if (!this.year || difference < 0) return "Didn't enlist in university";
// 		else if (difference >= 0 && difference <= 5) return difference;
// 		else return 'Finished his education';
// 	}
// }
// let worker = new Student('Иван', 'Иванов', 2019);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName()); //выведет 'Иван Иванов'
// console.log(worker.year); //выведет 2019
// console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2022
// class Validator {
// 	//later
// 	isEmail(str) {
// 		str = String(str);
// 		/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(str);
// 	}
// }

// class Elem {
// 	constructor(selector) {
// 		this.elem = document.querySelector(selector);
// 	}
// 	html(str) {
// 		this.elem.innerText = str;
// 		return this; //это для цепочки
// 	}
// 	append(str) {
// 		this.elem.innerText += str;
// 		return this;
// 	}
// 	prepend(str) {
// 		this.elem.innerText -= str;
// 		return this;
// 	}
// 	attr(attr, value) {
// 		this.elem.setAttribute(attr, value);
// 		return this;
// 	}
// }
// let elem = document.createElement('div');
// elem.style.width = elem.style.height = '150px';
// elem.style.backgroundColor = 'pink';
// elem.style.border = '1px solid white';
// document.body.append(elem);
// let el = new Elem('div');
// el.html('!'); //запишет в текст элемента '!'
// el.append('!'); //запишет в начало элемента '!'
// el.prepend('!'); //запишет в конец элемента '!'
// el.attr('class', 'www'); //запишет в атрибут class значение www

// //Должны работать цепочки методов:
// el.html('hello').append('!').prepend('!');
// el.attr('class', 'www').attr('title', 'hello');
// __pr
// let animal = {
// 	jumps: null,
// };
// let rabbit = {
// 	__proto__: animal,
// 	jumps: true,
// };

// console.log(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2)

// delete animal.jumps;

// console.log(rabbit.jumps); // ? (3)
// let head = {
// 	glasses: 1,
// };

// let table = {
// 	__proto__: head,
// 	pen: 3,
// };

// let bed = {
// 	__proto__: table,
// 	sheet: 1,
// 	pillow: 2,
// };
// let pockets = {
// 	__proto__: bed,
// 	money: 2000,
// };

// function Calculator(){
// 	this.read() = function (){
// 		this.a = prompt('First number');
// 		this.b = prompt('Second number')
// 	}
// 	this.sum() = () => this.a + this.b;
// 	this.mul() = () => this.a * this.b;
// }
// function Accumulator(value){
// 	this.value = value;
// 	this.read() = () => this.value += Number(prompt('Value', 0))
// }
// khui: for (let i=0; i<8; i++){
// 	for (let j=0; j<9; j++){
// 		console.log(`i: ${i} j: ${j}`);
// 		if (i==2) break khui;
// 	}
// }
// function makeCounter() {
// 	let count = 0;
// 	function counter() {
// 		return count++;
// 	}
// 	counter.set = (value) => (count = +value);
// 	counter.decrease = () => --count;
// 	return counter;
// }

// let counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter.decrease());

// function summ(value) {}
// class Khui {
// 	constructor() {
// 		this.counter++;
// 	}
// 	static counter = 0;
// }
// let y = 0;
// while (y <= 9) {
// 	let k = new Khui();
// 	y++;
// }
// let p = new Khui();
// console.log(Khui.counter);
// class Animal {
// 	#tail = true;
// }
// class Anim {
// 	bark() {
// 		console.log('uf');
// 	}
// }
// class Dog extends Anim, Animal{
//}
// class Dog {}
// class Rabbit {}
// let rabbit = new Rabbit();
// console.log(rabbit instanceof Object);

// let eventMixin = {
// 	/**
// 	 * Подписаться на событие, использование:
// 	 * menu.on('select', function(item) { ... }
// 	 */
// 	on(eventName, handler) {
// 		if (!this._eventHandlers) this._eventHandlers = {};
// 		if (!this._eventHandlers[eventName]) {
// 			this._eventHandlers[eventName] = [];
// 		}
// 		this._eventHandlers[eventName].push(handler);
// 	},

// 	/**
// 	 * Отменить подписку, использование:
// 	 * menu.off('select', handler)
// 	 */
// 	off(eventName, handler) {
// 		let handlers = this._eventHandlers && this._eventHandlers[eventName];
// 		if (!handlers) return;
// 		for (let i = 0; i < handlers.length; i++) {
// 			if (handlers[i] === handler) {
// 				handlers.splice(i--, 1);
// 			}
// 		}
// 	},

/**
 * Сгенерировать событие с указанным именем и данными
 * this.trigger('select', data1, data2);
 */
// 	trigger(eventName, ...args) {
// 		if (!this._eventHandlers || !this._eventHandlers[eventName]) {
// 			return; // обработчиков для этого события нет
// 		}

// 		// вызовем обработчики
// 		this._eventHandlers[eventName].forEach((handler) =>
// 			handler.apply(this, args)
// 		);
// 	},
// };
// class FormatError extends SyntaxError {
// 	constructor(message) {
// 		super(message);
// 		this.name = 'FormatError';
// 	}
// }
// let err = new FormatError('Ошибка форматирования');

// console.log(err.message); // ошибка форматирования
// console.log(err.name); // FormatError
// console.log(err.stack); // stack

// console.log(err instanceof FormatError); // true
// console.log(err instanceof SyntaxError); // true потому что наследует от SyntaxError
// let promise = new Promise(function (resolve, reject) {
// 	//setTimeout(() => resolve('All good'), 1000);
// 	setTimeout(() => reject(new Error('Error!')), 1000);
// });
// promise.then(
// 	(result) => console.log(result),
// 	(error) => console.log(error)
// );
// promise.catch((error) => console.log(error));
// class FirstTypeError extends Error {
// 	constructor(text) {
// 		super(text);
// 		this.name = 'FirstTypeError';
// 	}
// }
// class SecondTypeError extends Error {
// 	constructor(text) {
// 		super(text);
// 		this.name = 'SecondTypeError';
// 	}
// }

// function throwSomeNumbers() {
// 	let firstPromise = new Promise(function (resolve, reject) {
// 		reject(new FirstTypeError('First message'));
// 	}).catch((err) => {
// 		throw err;
// 	});
// 	let secondPromise = new Promise(function (resolve, reject) {
// 		reject(new SecondTypeError('First message'));
// 	}).catch((err) => {
// 		throw err;
// 	});
// }
// function uploadJson(url) {
// 	return fetch(url).then((response) => {
// 		if (response.status == 200) {
// 			return response.json();
// 		} else {
// 			throw new Error(response.status);
// 		}
// 	});
// }

// async function loadJson(url) {
// 	try {
// 		let responce = await fetch(url);
// 		if (responce.status == 200) return responce.json(); //здесь можно было спокойно поставить в await операцию с json'м но мне как то дико похуй
// 	} catch (error) {
// 		throw new Error(responce.error);
// 	}
// }

// loadJson('no-such-user.json') // (3)
// 	.catch(console.log); // Error: 404
class HttpError extends Error {
	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = 'HttpError';
		this.response = response;
	}
}
async function loadJson(url) {
	let response = await fetch(url);
	if (response.status == 200) {
		let json = await response.json();
		return json;
	}
	throw new HttpError(response);
}
async function demoGithubUser() {
	try {
		let name = prompt('Введите логин?', 'iliakan');
		let load = await loadJson(`https://api.github.com/users/${name}`);
		alert(`Полное имя: ${load.name}.`);
		return load;
	} catch (err) {
		if (err instanceof HttpError && err.response.status == 404) {
			alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
			return demoGithubUser();
		} else {
			throw err;
		}
	}
}

//demoGithubUser();
// function* generateSequence() {
// 	yield 1;
// 	yield 2;
// 	return 3;
// }
// let generator = generateSequence();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// let arrr = [1, 2, 3, 4, 5, 6];
// console.log(arrr[this.length - 1]);
// let str = 'ArrowDown';
//console.log(str.slice(5).toLowerCase());
// let date = new Date();
// let arr = [date.getFullYear(), date.getMonth(), date.getDate()];
// console.log(arr);
// let options = [
// 	{
// 		value: 'title',
// 		name: 'По названию todo',
// 	},
// 	{
// 		value: 'body',
// 		name: 'По тексту todo',
// 	},
// ];
// console.log(options);
// let oneMoreOption = [...options].map((item) => {
// 	let text = item.name;
// 	let splitText = text.split(' ');
// 	splitText[0] = splitText[0].toLowerCase();
// 	splitText.unshift('Поиск');
// 	item.name = splitText.join(' ');
// 	return item;
// });
// console.log(oneMoreOption);
let Ddate = new Date(2022, 4, 1);
const normalVariationOfDays = [6, 0, 1, 2, 3, 4, 5];
function subtractMonths(numOfMonths, date = new Date()) {
	date.setMonth(date.getMonth() - numOfMonths);

	return date;
}
//console.log(normalVariationOfDays[Ddate.getDay()]);
function DateToWorkObject(date) {
	const normalVariationOfDays = [6, 0, 1, 2, 3, 4, 5];
	//const obj = {}; obj would be in the end;
	let tmpAmountOfDays;
	for (let i = 32; i > 0; i--) {
		if (checkDate(date.getFullYear(), date.getMonth(), i)) {
			tmpAmountOfDays = i;
			break;
		}
	}
	const amountOfDaysInMonth = tmpAmountOfDays;
	let amountOfRemainingDays = amountOfDaysInMonth;
	let emptyArr = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
	const doubleArr = [
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	];
	const indexOfStartingCell = normalVariationOfDays[date.getDay()];

	for (let i = indexOfStartingCell; i < doubleArr[0].length; i++) {
		doubleArr[0][i] = amountOfDaysInMonth - amountOfRemainingDays + 1;
		amountOfRemainingDays--;
	}
	let tmpArr = [];
	for (
		let i = amountOfDaysInMonth - amountOfRemainingDays + 1;
		i <= amountOfDaysInMonth;
		i++
	)
		tmpArr.push(i);
	let counterOfTempArr = 0;
	for (let i = 1; i < doubleArr.length; i++) {
		for (let j = 0; j < doubleArr[i].length; j++) {
			if (counterOfTempArr < tmpArr.length) {
				doubleArr[i][j] = tmpArr[counterOfTempArr];
				counterOfTempArr++;
			}
		}
	}
	let is5thWeekEmpty = areArraysTheSame(doubleArr[4], emptyArr);
	const isLastWeekEmpty = areArraysTheSame(doubleArr[5], emptyArr);
	const obj = {
		arr: doubleArr,
		funbool: is5thWeekEmpty,
		bool: isLastWeekEmpty,
	};
	return obj;
}
let bool = true;
let year = 2022;
let neededYear;
while (bool) {
	let tmpDate = new Date(year, 1, 1);
	let obj = DateToWorkObject(tmpDate);
	if (obj.funbool) {
		console.log(year);
	}
	if (year == 2101) bool = false;
	year++;
}
