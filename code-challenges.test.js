// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// const fibonacciLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibonacciLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // describe("fibByTwo", () => {
// //   it(" takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
// //     expect(fibByTwo(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
// //     expect(fibByTwo(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// //   })
// // })

// // b) Create the function that makes the test pass.

//   //Created variable fibByTwo to take in number
// const fibByTwo = (number) => {
//   //Created new varibale fibBegginingNum = array of the stat\rt of the fibonacci sequence which is 1,1
//   const fibBegginingNum = [1,1]
//   //Made a for loop which started at the Index-2 and if i is less than 2 it would add 1 
//   for(let i=2; i < number; i++)
//  //fibBegginingNum is gonna equal fibBegginingNum index=2-1 + fibBegginingNum index=2-2 which give the last and second to last number and starts iterrating from there.
//   fibBegginingNum[i] = fibBegginingNum[i-1] + fibBegginingNum[i-2]
// // Returns expected output 
//   return fibBegginingNum
// }

// console.log(fibByTwo(fibonacciLength1))
// console.log(fibByTwo(fibonacciLength2))













// Pseudo code:

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.



const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// describe("someObjectValue", () => {
//   it("takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
//     expect(someObjectValue(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(someObjectValue(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

// b) Create the function that makes the test pass.

function someObjectValue(obj) {
  // Use .values to take all the numners in th object and put them in an array
  const values = Object.values(obj)

  // using the .sort method on the values array and using the (a, b) => a - b i will sort the values from smallest to largest
  values.sort((a, b) => a - b)
  // This will return our expected output 
  return values
}

console.log(someObjectValue(studyMinutesWeek1))
console.log(someObjectValue(studyMinutesWeek2))
// Pseudo code:
