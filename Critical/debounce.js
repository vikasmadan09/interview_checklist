// Debouncing puts a limit on a function not be called again until a certain amount of time has passed without it being called.
// As in "execute this function only if 100 milliseconds have passed without it being called."

function debounce(cb, delay = 250) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// Throttling puts a limit on as a maximum number of times a function can be called over time.
// As in "execute this function at most once every 100 milliseconds."
function throttle(cb, delay = 250) {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
