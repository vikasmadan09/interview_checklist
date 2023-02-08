class EventEmitter {
  constructor() {
    this._emit = {};
  }
  on(name, listener) {
    if (!this._emit[name]) {
      this._emit[name] = [];
    }
    this._emit[name].push(listener);
  }
  remove(name, listenerToRemove) {
    if (!this._emit[name]) {
      throw new Error(
        `Can't remove the listener. Event "${name}" doesn't exists`
      );
    }
    const filterListener = (listener) => listener !== listenerToRemove;
    this._emit[name] = this._emit[name].filter(filterListener);
  }
  emit(name, data) {
    if (!this._emit[name]) {
      throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
    }
    const fireCallbacks = (cb) => cb(data);
    this._emit[name].forEach(fireCallbacks);
  }
}

const myEventEmitter = new EventEmitter();
const handleMyEvent = (data) => console.log("Was Fired: ", data);
myEventEmitter.on("testEvent", handleMyEvent);
myEventEmitter.emit("testEvent", "Hello");

class EventEmitter {
  on = (eventName, callback) =>
    window.addEventListener(eventName, callback, false);
  off = (eventName, callback) =>
    window.removeEventListener(eventName, callback, false);
  emit = (eventName, data) =>
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
}

const emitter = new EventEmitter();
const eventCallback = (event) => {
  console.log("eventCallback", event.detail);
};

emitter.on("event-xxx", eventCallback);

emitter.emit("event-xxx", { name: "fatfish" });
emitter.emit("event-xxx", { name: "medium" });
