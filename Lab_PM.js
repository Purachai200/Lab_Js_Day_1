// lab 1
// let a = 0;
// a++;
// a += 3;
// a *= 17;
// a %= 7;
// console.log(a)

// lab 2
// let a = 1;
// let b = 2;
// let c = a++;
// let d = ++c;
// let e = ++d + d++ + d;
// console.log(d)

//Practice : Example String
// let  x = undefined;
// console.log(typeof x);
// x = String(x);
// console.log(typeof x);

//Practice : Example Boolean
// let a = 1;
// console.log(Boolean(a))

// Practice : Example Number
// let d = '';
// Math.min('8', 3, d);
// console.log(d)
//-------------------------------------------------

// Lab-1:Fundamental
// let a = undefined;
// let b = 2;
// let c = a++;

// let d = String(a);
// let e = String(b);
// let f = String(c);

// console.log(d, e, f);
// ผลลัพธ์ที่ได้คือ NaN 2 NaN เพราะค่า a เป็น undefined จึงทำให้เป็น Not a Number
//-------------------------------------------------

// Lab-2:Fundamental
// let a = undefined;
// let b = null;
// let c = b + '4 2';

// let d = Number(a);
// let e = Number(b);
// let f = Number(c);

// console.log(d, e, f);
// ผลลัพธ์คือ NaN 0 NaN เพราะค่าที่ออกมาไม่เป็น Number และ b เป็น ค่าว่าง
//-------------------------------------------------

// Lab-3:Fundamental
// let a = undefined;
// let b = ' ';
// let c = !b;

// let d = Boolean(a);
// let e = Boolean(b);
// let f = Boolean(c);

// console.log(d, e, f);
//  ผลลัพธ์คือ  false true false เพราะมีแค่ค่าที่ว่างที่แสดงค่าบูลลีนเป็น true
//-------------------------------------------------

// Lab-4:Fundamental
// let a = prompt("First Number: ");
// let b = prompt("Second Number: ");

// let c = Number(a) + Number(b);

// alert(c);
//-------------------------------------------------

// Lab-5:Fundamental
// const a = 0.1;
// const b = 0.2;
// const c = a+b;
// alert(c.toFixed(1));
//-------------------------------------------------

// Lab-6:Guess Result
// console.log(
//     typeof 'x',
//     typeof x,
//     typeof ``,
//     typeof Infinity,
//     typeof(100 / 0),
//     typeof(1 + '3'),
//     typeof(1 * 'a'),
//     typeof null
// )
//-------------------------------------------------

// Lab-7:Guess Result
// console.log('' + 1 + 0);
// console.log('' - 1 + 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(' -9 ' - 5);
// console.log(' -9 ' + 5);
// console.log('4px' - 2);
// console.log(2 + 4 + 'px');
// console.log(null + 1);
// console.log(undefined + 1);
//-------------------------------------------------

// Lab-8:Challenge
// let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
// console.log(a);

// =================================================
// Comparison
// String Compare:Example

// console.log('A' < 'Z'); // true
// console.log('A' < 'a'); // true
// console.log('coco' < 'code'); // true
// console.log('1' < '2'); // true
// console.log('Be' < 'Bee'); // true

//-------------------------------------------------

// Null ,Undefined

// console.log(null == undefined); // true
// console.log(null === undefined); // false

//-------------------------------------------------

// LAB-1: Fundamental
// console.log('1' > 4);
// console.log('' <= 1);
// console.log('apple' > 'pineapple');
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN !== 2);
// console.log(NaN == NaN);
// console.log(NaN === NaN);

// =================================================
// Logical Operator

// Lab: Guest Result
// alert(null || 2 || undefined);
// alert(alert(1) || 2 || alert(3));
// alert(1 && null && 2);
// alert(alert(1) && alert(2));
// alert(null || (2 && 3) || 4);

// ผลลัพธ์ 2 1 2 null 1 undefined 3 

//-------------------------------------------------

// Lab: Guest Result

// if (-1 || 0) alert('first');
// if (-1 && 0) alert('second');
// if (null || (-1 && 1)) alert('third');

// ผลลัพธ์คือ first และ third