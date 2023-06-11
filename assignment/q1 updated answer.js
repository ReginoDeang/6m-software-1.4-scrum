class BaseSignal {
    constructor(signalType) {
        if (new.target === BaseSignal) {
            throw new Error("Not Allowed");
        }
        this.type = signalType;
    }

    send() {
        console.log(`Sending ${this.type} signal`);
    }
}

class TvSignal extends BaseSignal {
    constructor() {
        super("TV");
    }
}

class AirconSignal extends BaseSignal {
    constructor() {
        super("Aircon");
    }
}

class DoorSignal extends BaseSignal {
    constructor() {
        super("Door");
    }
}

const tv = new TvSignal();
tv.send(); // prints "Sending TV signal"

const door = new DoorSignal();
door.send(); // prints "Sending Door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending Aircon signal"
