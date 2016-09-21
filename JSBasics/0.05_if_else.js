// var elevatorUp = true;
// var elevatorBroken = true;
// var elevatorDown = true;
// var elevatorStop = true;

// if (elevatorUp === true) {
// 	console.log("Going up");
// } else {
// 	console.log('The elevator is either broken or going down');
// }

var elevatorUp = true;
var elevatorBroken = false;
var elevatorDown = true;
var elevatorStop = true;

if (elevatorBroken || elevatorDown) {
	console.log("I`ve stopped. Stop pounding the button");
} else {
	console.log('The elevator is either broken or going down');
}

