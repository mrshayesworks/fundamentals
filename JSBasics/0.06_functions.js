// //Declaration
// function helloWorld(){
// 	console.log('Hello World');
// }

// //call
// helloWorld();

// function name(){
// 	console.log('Danielle Hayes');
// }
// name();

var name = function() {
	console.log('Danielle');
}

//Scope

// function addNumbers(){
// 	var x = 10;
// 	var y = 10;
// 	console.log(x + y);
// }
// addNumbers();
// console.log();

// 
///Parameters & Arguments

// function printNumber(x){
// 	console.log('The number you entered was:' + x);
// }
// printNumber(6);

// function bankPin(xxxxx){
// 	console.log(xxxxx +"is the correct code" );
// }
// bankPin(49153);

// function enterpin(xyz) {
// 		var pin = 503;

// 		if (pin != xyz) {
// 			console.log("Pin not accepted");
// 		} else {
// 			console.log("Correct!");
// 		}
// 	}

// 	enterpin(503);

// Argument

// bankPin(1234);

// function numADD (a,b){
// 	return a + b;
// }
// var z = numADD (5,7);
// console.log('z', z);


// console.log(numADD('James','Paul'));
// console.log(numADD(1,2));


// //Bronze Challenge

// function Clothes () {

// }

// function Clothes(color, style, size) {
// 	return 'color + style + size';
// }

// console.log(Clothes("red", "dress", "small"));

// //silver challenge

// function bills () {
// var cable = xx;
// var lights = xy;
// var water = xyz;

// console.log(cable + lights + water);
// }

// function bills(cable, lights, water){
// 	return cable + lights + water;
// }

// console.log(bills(50, 50, 50));

function calculatePrice(quantity, price, item, tax) {

	var totalTax = (quantity * price * tax);
	var totalPrice = quantity * price + totalTax;
	return quantity + '' + item + 
}
console.log (calculatePrice(132, .88, "Cups of Coffee", 1.07)"));