


//  sayHello
// Write a function called sayHello with a parameter name that logs a greeting to the console with the passed-in name.

// sayHello("Tyler")    Logs "Hello, Tyler!"

// below is arrow function

// let sayHello = (name) =>
// {
// 	console.log("hello " + name)
// }

let name = "Tyler"
sayHello(name)

// below is regular function
function sayHello(name) {
console.log("hello " + name)
}



/*
sayHello("Tyler")   // Logs "Hello, Tyler!"
2. reverseString
Write a function, reverseString, that accepts a single argument, a string. The function should return a string with the order of the characters reversed.

reverseString("Hello, world!")  // logs !dlrow ,olleH
3. calculate
Write a function called calculate.

This function should take three arguments: two numbers and a string.

Name the parameters x, y, and operation.

If operation is equal to "add" it should return the sum of x and y.
If operation is "subtract" it should return return x minus y.
Do the same thing for multiplication, "multiply", and division, "divide".
Bonus: handle when operation is an unrecognized value.
calculate(4, 3, "subtract")  // Logs "1"
4. Pandigital Numbers
Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
The number 333 is not 1-to-n pandigital.
The number 0 is not 1-to-n pandigital.
The number 987654321 is 1-to-n pandigital.
Write a function that checks if a number is 1-to-n pandigital.

5. Functions + loops: a special partnership
Write a function that, when called ("call" = "invoke") creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a "white square") or a # character (representing a black square). Hence, the characters should form a chessboard.

Calling your function should print something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
6. Modify it to make any size grid.
When you have a function that generates this pattern, modify it to take a parameter size. Make the function work for any size, outputting a properly formatted grid of the given width and height. If it helps you to have this set. The very first square should always be white.

Remember to give it a nice semantic name

This problem was adapted from one in Eloquent Javascript.

7. Variable number of arguments
Modify calculate above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and "sqrt" as the second parameter.

Click "Details" below for a hint:

Details
© 2019 GitHub, Inc. */