//const sum = require('./sketch');
//import sketch from './sketch'
//import {sum,sub,mult,div} from './sketch';
var methods = require('./sketch.js');


test('adds two values',()=>{
	expect(methods.sum(1,2)).toBe(3);
})

test('subtracts two values neg',()=>{
	expect(methods.sub(2,1)).toBe(1);
})

test('subtracts two values pos',()=>{
	expect(methods.sub(1,2)).toBe(-1);
})

test ('multiply two values',()=>{
	expect(methods.sub(3,2)).toBe(6);
})


test('divide two values',()=>{
	expect(methods.div(4,2)).toBe(2);
})

