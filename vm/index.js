const vm = require('vm')

const foo = new vm.Script(`
  const foo = 'hello world'
  bar++
`)

const context = vm.createContext({
  bar: 1
})

foo.runInContext(context)


console.log(context)