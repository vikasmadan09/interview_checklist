// const promise1 = new Promise((resolve, reject) => { })
// const promise2 = new Promise((resolve, reject) => { });
// const promise3 = new Promise((resolve, reject) => { });

// promise1.then(res => promise2.then())

function outerFunction() {
  var values = [];
  function init() {
    for (let i = 0; i < arguments.length; i++) {
      values.push(arguments[i]);
    }
    console.log(arguments, values);
  }
  function sum() {
    return console.log(values.reduce((a, b) => a + b, 0));
  }
  return {
    init,
    sum,
  };
}
const Math = outerFunction();
Math.init(1, 2, 3, 4);
Math.sum();

const Component = React.Memo(() => {}, []);
