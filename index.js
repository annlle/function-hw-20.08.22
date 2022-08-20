//1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.//

function sRectangle(height, width) {
let result = height > 0 && width > 0? height*width : 'спробуй ще раз';
return result;
}

// let functionResult= sRectangle(10,20); //

// console.log(functionResult); //


//2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру)//

function cCircle(diametr) {
let res= diametr > 0? Math.PI * diametr : 'спробуй ще раз';
return res; 
}

// let funcResult = cCircle(4); //

// console.log(funcResult); //


//3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра. //

function vCylinder(height, diametr){

if ((height > 0) && (diametr > 0)){
  let radius = diametr/2;
  let result = Math.PI * Math.pow(radius,2) * height;
  return result; 
} else{
  return 'спробуй ще раз';
}
}

// let fResult = vCylinder(10,4); //
// console.log(fResult); //

//4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.//

function series(first, second){

  for(let i = first; i <= second; i++){

    if( i % 5 === 0){
      console.log(i);
    }
  } return;
}

// let range = series(1,25); //


//5. Реалізовати гру FizzBuzz для 100 чисел. https://ru.wikipedia.org/wiki/Fizz_buzz //

function fizzBuzz(min, max){
 for( let i = min; i <= max; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  } else if( i % 3 === 0){
    console.log('Fizz'); 
  } else if(i % 5 === 0 ){
    console.log('Buzz');
 } else{
  console.log(i);
    }
  }
}

// let result = fizzBuzz(1,100); //

/* або 

 for(let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  } else if( i % 3 === 0){
    console.log('Fizz'); 
  } else if(i % 5 === 0 ){
   console.log('Buzz');
 } else{
 console.log(i);
  }
} */


//6. Написати функцію, яка приймає коефіцієнти квадратного рівняння і вирішує рівняння, і виводить на консоль можливі значення Х. //

 function quadraticEquation(a, b, c) { 
    let x1, x2;
    let discriminant = Math.pow(b,2) - 4 * a * c;
     
    if(discriminant >= 0) {
        x1 = (- b + Math.sqrt(discriminant)) / 2 * a;
        x2 = (- b - Math.sqrt(discriminant)) / 2 * a;
        return  `The roots are ${x1} and ${x2}`;
    }
      else return 'The discriminant is less than 0';
}

// let func = quadraticEquation(1, 0, -4); //
// console.log(func); //
