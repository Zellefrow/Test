//const sum = require('./sketch');
import sketch from './sketch'


test('adds two values',()=>{
	expect(sketch.sum(1,2)).toBe(3);
})

test('subtracts two values neg',()=>{
	expect(sketch.sub(2,1)).toBe(1);
})

test('subtracts two values pos',()=>{
	expect(sketch.sub(1,2)).toBe(-1);
})

test ('multiply two values',()=>{
	expect(sketch.sub(3,2)).toBe(6);
})


test('divide two values',()=>{
	expect(sketch.div(4,2)).toBe(2);
})

