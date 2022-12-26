// let sum = 0;
// for (let i = 0; i <= 10; i += 2) {
//     sum += i;
// }

// //sum = 0 + 0 (i=0)
// //sum = 0 + 2 (i=2)
// //sum = 2 + 4 (i=4)
// //sum = 6 + 6 (i=6)
// //sum = 12 + 8 (i=8)
// //sum = 20 + 10 (i=30)

// console.log(sum); 

// let number = 0;
// while (number<11) {
//     console.log(number);
// //     number +=1;
// }


//EX1 - For Loops -1
function printNumbers () {
    for (let i = 1; i <= 10; i++) {
        console.log(i) 
 }  
}

 printNumbers ();

 //2
 function PrineEven () {
    for (let i = 0; i <= 10; i+= 2) {
        console.log(i) 
 }  
}

PrineEven ();

//3
function EvenParameter (n) {
    for (let i = 2; i <= n; i+= 2) {
        console.log(i) 
 }  
}

EvenParameter (12);

//4
function withoutNumber () {
    for (let i = 1; i <= 20 ; i+= 1) {
        if (i == 13) {
            continue
        } console.log(i) 
 }  
}
withoutNumber ();

//5
function PrintDescending () {
    for (let i = 10; i >= 0; i--) {
        console.log(i) 
 }  
}

PrintDescending ();

//6
function PrintOdd () {
    for (let i = 1; i <= 10 ; i+=2) {
        if ( i == 7) 
        break;
        console.log(i);
 }  
}

PrintOdd ();

//7
    function PrintArray () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 12, 3, 4, 5, 6, 87, 21, 1, 2]
    for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);    
    }
}

PrintArray ()

//8
function printEvenNumbers (array) {
    for (let i = 0; i < array.length; i++) {
    const even = array[i];
    if (even % 2 == 0) {
       console.log(even);    
        }
    }
}

printEvenNumbers ([1, 2, 4, 6, 8, 9])

//9
function ArraySum (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

ArraySum ([1, 2, 3, 4, 5])

//10
function countLetters (s) {
    let lettersCount = 0;
    for (let i = 0; i < s.length; i++) {
        lettersCount+=1;
    }
    return lettersCount
}
console.log(countLetters(`name`));

//11
//1.
function sortArray () {
    let numArrays = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
    let evenNumbers = []
    let OddNumbers = []
    for (let i = 0; i < numArrays.length; i++) {
        let element = numArrays [i]
        if (element % 2 === 0) {
            evenNumbers.push(element);
        } else {
            OddNumbers.push(element);
        }
    }
    console.log (evenNumbers);
    console.log (OddNumbers);
}

sortArray ()

//12
function containY (s){
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === `y`) {
             return `yes`;
        }
    } return `no`;
}
containY(`hello how are you?`);

//13
function largestNumber (arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if(largest<arr[i]){
            largest=arr[i]
        }
    }
        console.log(largest);   
}
largestNumber ([1,4, 7, 13, 15])

//EX2 - While practice 
//1
function printNumbersWhile () {
    let number = 1;
    while (number <= 10) {
        console.log(number);
        number +=1
    }
}

printNumbersWhile ()

//2
function evenNumbersWhile () {
    let number = 2;
    while (number < 10) {
        console.log(number);
        number +=2
    }
}

evenNumbersWhile ()

//3
function OddNumbersWhile () {
    let number = 1;
    while (number <10) {
        console.log(number);
        number +=2
    }
}

OddNumbersWhile ()

//4
function OddNumbersDown () {
    let number = 10;
    while (number >= 1) {
        console.log(number);
        number--;
    }
}

OddNumbersDown ()


//5
function promptNumber () {
    num = prompt("write a number");
    let i = 0
    while (i <= num) {
        console.log (i);
    i++;
    }
}
//  promptNumber ()

//  6
 function promptNumberSum () {
    num = prompt("write a number");
    let sum = 0;
    let i = 0;
    while (i<num){
        i++;
        sum = sum + i;
    }
    console.log(sum);
}
    
// promptNumberSum ()

//7
function factorialNumber (){
    num = prompt("write a number");
    let i = 1;
    let sum = 1;
    while (i < num) { 
        i++; 
        sum *= i;
    }
    console.log((sum));
}
    
// factorialNumber ()
 
//8
function fuelLevel () {
let num = prompt("enter a fuel level");
    while (num < 5000 || num > 30000 )
    num = prompt("enter a fuel level");
}

// fuelLevel ()

//EX3
// for loop 
function sumOne () {
    let sum = "";
    for (i = 0; i < 6; i++) {
    sum +="*";
    console.log (sum);     
    }
}

sumOne ()
  
//Nested loop
 for (let i = 1; i <= 1; i++) {
    let symbols = "";
    for (let j = 1; j <= 6; j++) {
        symbols = symbols + "*";

    console.log (symbols);     
     }
 }
 
 //2 
 function multiplication () {
   for (let i = 1; i <= 10; i++) {
    // let symbols = i
     for (let j = 1; j <= 10; j++) {
        // multy = i * j;

    console.log (`${i} * ${j} = ${i*j}`);     
        }
    }  
 }

 multiplication ()

