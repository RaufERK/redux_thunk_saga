function* myGen() {
  yield ()=>{}
  yield 'two'
  yield 'thre'
}
const genValue = myGen()

console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());

