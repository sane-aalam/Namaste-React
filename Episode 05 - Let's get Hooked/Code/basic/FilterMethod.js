// The filter() method in JavaScript is a powerful array method used to
// create a new array containing only elements
// array.filter(callback(element, index, array), thisArg);

// Parameters :
// callback – A function that tests each element. It should return true to keep the element or false to exclude it.
// element → The current element being processed.
// index (Optional) → The index of the current element.
// array (Optional) → The array being processed.
// thisArg (Optional) – Value to use as this when executing the callback function.

// Key Points
//  Does not modify the original array – It creates a new array.
//  Returns an empty array if no elements match the condition.
//  Can be used with objects, numbers, and strings.
//  Automatically skips empty slots in sparse arrays.


// Filter Even Numbers
// 1. without Filter Method used :


// code start 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter Even Numbers
let evenNumberArray = [];
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  if (number % 2 == 0) {
    evenNumberArray.push(number);
  }
}
console.log(evenNumberArray);

// Filter Even Numbers
// Easy to understand code,clean code base
// Does not modify the original array – It creates a new array.
const newNumbers2 = numbers.filter((currentElement,index,arr) =>{
     return (currentElement % 2 == 0)
})

console.log(newNumbers2)
