const msg = 'TypeScript'

function sayHello(msg: string): string {
  return 'hello,' + msg
}

let hello = sayHello('typescript')
console.log(hello)