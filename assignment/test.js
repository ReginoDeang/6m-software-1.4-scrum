class BaseSignal {
    constructor() {
      if (new.target === BaseSignal) {
        throw new Error("Direct instantiation of BaseSignal is not allowed");
      }
    }
  
    send() {
      console.log(`Sending ${this.getType()} signal`);
    }
  
    getType() {
      const className = this.constructor.name;
      const signalIndex = className.indexOf("Signal");
      return className.substring(0, signalIndex).toLowerCase();
    }
  }
  
  class TvSignal extends BaseSignal {
    constructor() {
      super();
    }
  }
  
  class AirconSignal extends BaseSignal {
    constructor() {
      super();
    }
  }
  
  class DoorSignal extends BaseSignal {
    constructor() {
      super();
    }
  }
  
  const tv = new TvSignal();
  tv.send(); // Output: Sending tv signal
  
  const door = new DoorSignal();
  door.send(); // Output: Sending door signal
  
  const aircon = new AirconSignal();
  aircon.send(); // Output: Sending aircon signal
  