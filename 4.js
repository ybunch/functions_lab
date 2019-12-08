// 4. Pandigital Numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

// A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

// The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
// The number 333 is not 1-to-n pandigital.
// The number 0 is not 1-to-n pandigital.
// The number 987654321 is 1-to-n pandigital.
// Write a function that checks if a number is 1-to-n pandigital
function isPandigital(num){



// split the number into an array
let numArr = `${num}`.split("")
// get length of array
let len = parseInt(`${num}`.length)

let sum1 = 0;
let sum2 = 0;

// loop over length
for(let i = 1; i<len+1; i++){
  sum1 += i;
}
// loop over each number in array
for(let i = 0; i<numArr.length; i++){
  sum2 += parseInt(numArr[i])
}
if (sum1 == sum2 && sum1 > 0){
	return true 

}
else{
	return false
}
}
console.log(isPandigital(12745))