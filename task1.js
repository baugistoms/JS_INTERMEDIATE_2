const append = acc => next => next === undefined ? acc : append(`${acc} -> ${next}`)
const schedule = next => setTimeout(next, 1)
const promisedAppend = next => res => new Promise(resolve => schedule(() => resolve(res(next))))
const logHandler = res => console.log('Actual return:', res && res())
const doSomething = promisedAppend('doSomething')
const doSomethingElse = promisedAppend('doSomethingElse')

console.log('Should return:', 'start -> doSomething -> doSomethingElse')

Promise.resolve(append('start'))
  .then(res => doSomething(res))
  .then(res => doSomethingElse(res))
  .then(logHandler)