
var five = require('johnny-five');
var Leap = require('leapjs').Leap;

/*
 * Constants
 */
var leapMinX = -300;
var leapMaxX = 300;
var leapMinY = 30;
var leapMaxY = 600;
var leapMinZ = -300;
var leapMaxZ = 300;

function LeapServo(pin, axis, sensitivity) {
	this.servo = new five.Servo(pin);

	if(axis != "x" || axis != "y" || axis != "z") {
		axis = "x";
	}
	this.axis = axis;
	this.sensitivity = sensitivity;
}