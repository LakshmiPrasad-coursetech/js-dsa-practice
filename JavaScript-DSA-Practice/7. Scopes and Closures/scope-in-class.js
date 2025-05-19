const showExpectedResult = false;
const showHints = false;

// Base Class: Vacation
class Vacation {
    destination;
    length = 0;
    travelers = [];

    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    addTraveler(name) {
        this.travelers.push(name);
    }
}

class Expedition extends Vacation {
    // Define class here:
    survivalRating = 0.0;

    constructor(destination, length, survivalRating) {
        super(destination, length);
        this.survivalRating = survivalRating;
    }
}

function createExpedition(details) {
    // Create a new instance of an Expedition here
    const exp = new Expedition(...details);
    return exp.survivalRating;
}

const expDetails = ["Desolation Wilderness", 10, 0.5];
const result = createExpedition(expDetails);