// Write a function called calculate.

// This function should take three arguments: two numbers and a string.

// Name the parameters x, y, and operation.

// If operation is equal to "add" it should return the sum of x and y.
// If operation is "subtract" it should return return x minus y.
// Do the same thing for multiplication, "multiply", and division, "divide".
// Bonus: handle when operation is an unrecognized value.

function calculate(x,y,operation){
	if (operation == "add"){
		return x + y
	}
	else if (operation == "subtract"){
		return x - y
	}
	else if (operation == "multiply"){
		return x * y
	}
	else if (operation == "divide"){
		return x / y
	}
}
console.log(calculate(5,6,"subtract"))