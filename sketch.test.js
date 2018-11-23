//const sum = require('./sketch');
//import sketch from './sketch'
import {sum,sub,mult,div} from './sketch';


test('adds two values',()=>{
	expect(sum(1,2)).toBe(3);
})

test('subtracts two values neg',()=>{
	expect(sub(2,1)).toBe(1);
})

test('subtracts two values pos',()=>{
	expect(sub(1,2)).toBe(-1);
})

test ('multiply two values',()=>{
	expect(sub(3,2)).toBe(6);
})


test('divide two values',()=>{
	expect(div(4,2)).toBe(2);
})

