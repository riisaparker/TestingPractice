const app = require('../app.js') 


// -------------- CHALLENGE 1 

describe("My tests for simple stuff - Challenge 1 ", () => { 

	test("Should equal 5 when passed 2 and 3", () => {
		expect(app.add(2,3)).toBe(5);
	})

	test("Should contain Stuart", () => {
		expect(app.myArray).toContain("Stuart");
	})

	test("Should not expect a null value when supplied a variable less than 10", () =>{
		expect(app.lessThanTen(5)).not.toBe(null);
	})

	test("Should expect a true value when supplied a variable less than 10", () =>{
		expect(app.lessThanTen(5)).toBeTruthy();
	})

	test("Should expect a not false value when supplied a variable less than 10", () =>{
		expect(app.lessThanTen(5)).not.toBeFalsy();
	})

	test("Should expect The object to have the properties of idName = Raeesa and idPlace = Lancashire", () =>{
		expect(app.createIdentity()).toStrictEqual({idName:"Raeesa", idAddress:"Lancashire"});
	})

	test("Should expect [`Goodbye`, `afternoon`] when supplied [`Hello`, `Goodbye`, `afternoon`]", () =>{
		expect(app.longArrayFunc([`Hello`, `Goodbye`, `Afternoon`])).toStrictEqual(["Goodbye", "Afternoon"]);
	})

});



// -------------- CHALLENGE 2

describe("My tests for simple stuff - Challenge 2 ", () => { 

	test("Output should be a string when passed a number", () => {
		expect(typeof app.toStringFunc(5)).toBe("string");
	})

	test("Output should be Earth when input is 3", () => {
		expect(app.planetFinder(3)).toBe("Earth");
	})

	test("Output should be 4 when the array of students is inputted", () => {
		expect(app.register([true, true, false, true, true])).toBe(4);
	})

	test("Output should be 916 when inputting 34", () => {
		expect(app.squareDigi(34)).toBe(916);
	})

})



// -------------- CHALLENGE 3

describe("My tests for simple stuff - Challenge 3 ", () => { 

	test("Output should be a 17 when passed a 1783", () => {
		expect(app.centuryFunc(1783)).toBe("17");
	})

})