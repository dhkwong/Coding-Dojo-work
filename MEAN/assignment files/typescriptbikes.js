var bike = /** @class */ (function () {
    function bike(wheels) {
        var _this = this;
        this.wheels = wheels;
        this.speed = function () {
            _this.wheels++;
        };
        this.ride = function () {
            console.log("I'm going " + _this.speed + " fast");
        };
    }
    return bike;
}());
var bike1 = new bike(2);
var bike2 = new bike(3);
var bike3 = new bike(4);
bike1.ride();
bike2.ride();
bike3.ride();
