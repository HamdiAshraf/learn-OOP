const Vehicle = require('./vehicle');

class Bicycle extends Vehicle {
    constructor(color = "blue", horn = "honk honk") {
        super(color, 2, horn);
    }
}

module.exports = Bicycle;
