const add = (num1 , num2 ) => {
	return num1 + num2;
}

let myArray = ["Dan", "Stuart", "Ben"];

// ---------------- CHALLENGES -----------------//


// ---------------- CHALLENGE 1 

// Function 1 => Check the return value is not null
const lessThanTen = ( num1 ) => {
	return (num1 < 10 ?  true : null )
}

// Function 2 => Create an object with two properties => NOT WORKING
const createIdentity = () => {
	return identityDetails = {
		idName:"Raeesa", 
		idAddress: "Lancashire" 
	}
}

// Function 3 => Return items in an array with 6 or more characters
const longArrayFunc = (inputArray) => {
	// Map over the array => if the length is greater than 6 => push to returned array
	let returnedArray =	inputArray.filter(checkLength)

	function checkLength(inputString){
		console.log(inputString.length)
		if (inputString.length > 6){
			return inputString;
		}
	} 
	return returnedArray;
}



// ---------------- CHALLENGE 2 

// FUNCTION 1 => CONVERT A NUMBER TO A STRING 
const toStringFunc = (number) => {
	return number.toString() ; 
}

// FUNCTION 2 => RETURN PLANET 

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

const planetFinder = (planetNumber) => {
	return planets[planetNumber - 1]
}


// FUNCTION 3 => Return number of present students

const register = (students) => {
	let present = students.filter(student => student == true )
	return present.length 
}

// FUNCTION 4 => 

const functionInt = (number) => {
	// Convert each number to an integer 
	numberInt = parseInt(number, 10);
	// Square the number 
	numberSquared = numberInt * numberInt;
	// Convert to string
	numberString = numberSquared.toString()
	return numberString
} 

const squareDigi = (num) => {
	// Convert the number to a string => Split
	let numStringSplit = num.toString().split("")
	// Convert to inegers => Map over array => Square the numbers => Convert to string
	let mapArray = numStringSplit.map(functionInt) 

	// Concatnate 
	let mapConcat = mapArray.join('')
	
	// Convert to inegar
	finalInt = parseInt(mapConcat, 10)
	return finalInt
}



// ---------------- CHALLENGE 3

const centuryFunc = (number) => {
	// Convert the number to a string => split
	let numStringSplit = number.toString().split("")
	return(numStringSplit[0] + numStringSplit[1])
} 



// ---------------- EXPORT MODULES
module.exports = { add , myArray, lessThanTen, createIdentity, longArrayFunc, toStringFunc, planetFinder, register, squareDigi, centuryFunc};