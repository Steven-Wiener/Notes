// 1. What is printed to the console?
var foo = function foo() {
    console.log(foo === foo);  
};
foo(); // true

///// 2. What is the alert?
function aaa() {
    return
    {
        test: 1
    };
}
alert(typeof aaa()); // undefined

// 3. What is the result?
Number("1") - 1 == 0 // true

// 4. What is the result?
(true + false) > 2 + true; // false

///// 5. What is alerted?
function bar() {
	return foo; // blank
	foo = 10; // alerts undefined
    function foo() {} // alerts undefined. Together with return foo, alerts function
    var foo = '11'; // alerts undefined
}
alert(typeof bar()); // function. Bar returns a function "foo", therefore the typeof bar() is function

// 6. What is the result?
"1" - - "1"; // 2

///// 7. What is the order of values alerted?
var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go()); // 3
alert(foo.baz.bar()); // 1

// 8. What is the result?
new String("This is a string") instanceof String; // true

///// 9. What is the result?
[] + [] + 'foo'.split(''); // "f","o","o"

// 10. What is the result?
new Array(5).toString(); // ",,,,,"

// 11. What is printed in the console?
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr); // ['bin']

// 12. What is the result?
String('Hello') === 'Hello'; // true

///// 13. What is printed on the console?
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x); // undefined

// 14. What is the result?
"This is a string" instanceof String; // false

///// 15. What is the result?
var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar; // NaN

///// 16. What is the result of console.log?
var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr); // true

///// 17. What value is alerted?
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length); // 2

///// 18. What is the result?
10 > 9 > 8 === true; // false

///// 19. What value is alerted?
function foo(a, b) {
	arguments[1] = 2;
	alert(b); // undefined
}
foo(1);

// 20. What is the result?
NaN === NaN; // false

// CLOSURES
// 1. What will the following code output?
for (var i = 0; i < 3; i++) {
	setTimeout(function() { alert(i); }, 1000 + i); // This actually alerts 3 three times
}
// 1. Revised..
for (var i = 0; i < 3; i++) {
	setTimeout(function(i_local) {
		return function() { alert(i_local); }
	}(i), 1000 + i);
}

// 2. Write a function that would allow you to do this
// function here //
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
// 2. Continued
function createBase(x) {
	function (y) {
		return x + y; // We are referencing x here even though it was declared outside of this function, allowed by closures
	}
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// 3. How would you use a closure to create a private adder?
function adder() {
	var _adder = 0;
	return { // Return an object with several functions that allow you to modify the private _adder variable
		add: function(increment) { _adder += increment; },
		retrieve: function () { return 'The adder is currently at: ' + _adder; }
	}
}

// Error if we were to try to access the private variable like next line:
//_adder;

// Usage of adder function
var c = adder();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The adder is currently at: 14

// 4. Another way with two counters
var makeCounter = function() { // I don't think i need var here
	var _counter = 0;
	function changeBy(val) {
		_counter += val;
	}
	return {
		increment: function() { changeBy(1); },
		decrement: function() { changeBy(-1); },
		value: function() { return _counter; }
	}
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); // Alerts 0
counter1.increment();
counter1.increment();
alert(counter1.value()); // Alerts 2
counter1.decrement();
alert(counter1.value()); // Alerts 1
alert(counter2.value()); // Alerts 0