/**
 * 工厂函数
 * @param {number} from
 * @param {number} to
 * @returns
 */
function range(from, to) {
	const r = Object.create(range.methods);
	r.from = from;
	r.to = to;
	return r;
}

range.methods = {
	/**
	 * 包含
	 * @param {number} x
	 * @returns
	 */
	includes(x) {
		return this.from <= x && x <= this.to;
	},
	/**
	 * 生成器
	 */
	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
	},
	/**
	 * 转换为字符串
	 * @returns
	 */
	toString() {
		return "(" + this.from + "..." + this.to + ")";
	},
};
const r = range(2, 4);
console.log("r", r.includes(2));
console.log("r", r.toString());
console.log("r", r);
console.log("r", [...r]);
console.log("r", range);
console.dir("r", range);

/**
 * 构造函数
 * @param {number} from
 * @param {number} to
 * @returns
 */
function Range(from, to) {
	// 非new调用时，返回new创建的实例
	// class不允许非new创建实例
	if (!new.target) return new Range(from, to);
	this.from = from;
	this.to = to;
}

Range.prototype = {
	/**
	 * 包含
	 * @param {number} x
	 * @returns
	 */
	includes(x) {
		return this.from <= x && x <= this.to;
	},
	/**
	 * 生成器
	 */
	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
	},
	/**
	 * 转换为字符串
	 * @returns
	 */
	toString() {
		return "(" + this.from + "..." + this.to + ")";
	},
};

const newR = new Range(2, 4);
console.log("newR", newR.includes(2));
console.log("newR", newR.toString());
console.log("newR", newR);
console.log("newR", [...newR]);
console.log("newR", Range);
console.dir("newR", Range);

const notNewR = Range(2, 4);
console.log("notNewR", notNewR);

const two = new Number(2);
console.log("two instanceof Number", two instanceof Number);
console.log("two === 2", two === 2);
console.log("newR instanceof Range", newR instanceof Range);
console.log("range.methods.isPrototypeOf(r)", range.methods.isPrototypeOf(r));

/**
 * Range类
 */
class Range {
	/**
	 * 构造器函数
	 * @param {number} from
	 * @param {number} to
	 */
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}

	/**
	 * 静态方法
	 * 解析
	 * @param {string} s
	 */
	static parse(s) {
		const metchs = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
		console.log(metchs);
		if (!metchs) throw new TypeError(`Cannot parse Range from ${s}.`);
		return new Range(parseInt(metchs[1]), parseInt(metchs[2]));
	}
	/**
	 * 包含
	 * @param {number} x
	 * @returns
	 */
	includes(x) {
		return this.from <= x && x <= this.to;
	}
	/**
	 * 生成器
	 */
	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
	}
	/**
	 * 转换为字符串
	 * @returns
	 */
	toString() {
		return "(" + this.from + "..." + this.to + ")";
	}
}

const classR = new Range(2, 4);
console.log("classR", classR);
const staticR = Range.parse("(1...2)");
console.log("staticR", staticR);

/**
 * Span类，继承自Range
 */
class Span extends Range {
	constructor(start, length) {
		if (length >= 0) {
			super(start, start + length);
		} else {
			super(start + length, start);
		}
	}
}
const classS = new Span(2, 5);
console.log("classS", classS);
console.log("classS", classS.includes(6));

/**
 * 类表达式
 * @param {number} x
 */
const Square = class {
	constructor(x) {
		this.area = x * x;
	}
};

class Complex {
	#r = 0;
	#i = 0;
	constructor(real, imaginaey) {
		this.r = real;
		this.i = imaginaey;
	}
	plus(that) {
		return new Complex(this.r * that.r, this.i * that.i);
	}
	times(that) {
		return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
	}
	static sum(c, d) {
		return c.plus(d);
	}
	static product(c, d) {
		return c.times(d);
	}
	get real() {
		return this.r;
	}
	get imaginaey() {
		return this.i;
	}
	get magnitude() {
		return Math.hypot(this.r, this.i);
	}
	toString() {
		return `{${this.r}, ${this.i}}`;
	}
	equals(that) {
		return that instanceof Complex && this.r === that.r && this.i === that.i;
	}
	static ZERO = new Complex(0, 0);
}

Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);
console.log("Complex.ZERO", Complex.ZERO);
console.log("Complex.ONE", Complex.ONE);
console.log("Complex.I", Complex.I);

const c = new Complex(2, 3);
console.log("c", c);
const d = new Complex(c.i, c.r);
console.log("d", d);
console.log("c.plus(d).toString()", c.plus(d).toString());
console.log("c.magnitude", c.magnitude);
const cp = Complex.product(c, d);
console.log("cp", cp);
console.log("Complex.ZERO.toString()", Complex.ZERO.toString());

class Person {
	name = "未知";
	constructor(name) {
		if (name) this.name = name;
	}
	getName() {
		return this.name;
	}
}
const p = new Person();
console.log("p", p, p.getName());

const xiaoming = new Person("小明");
console.log("xiaoming", xiaoming);

class Student extends Person {
	constructor(name) {
		super(name);
	}
	getName() {
		console.log("Student getName");
		return "name: " + this.name;
	}
}
const s = new Student("s");
console.log("s", s);
console.log("s", s.getName());

function Teacher(name) {
	this.name = name;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
const t = new Teacher("t");
console.log("t", t);

class EZArray extends Array {
	get first() {
		return this[0];
	}
	get last() {
		return this[this.length - 1];
	}
}
let ezArr = new EZArray(1, 2, 3, 4);
console.log("ezArr", ezArr);
console.log("ezArr", ezArr instanceof EZArray);
console.log("ezArr", ezArr instanceof Array);
console.log("ezArr", ezArr.first);
console.log("ezArr", ezArr.last);

class TypeMap extends Map {
	constructor(keyType, valueType, entries) {
		if (entries) {
			for (const [k, v] of entries) {
				if (typeof k !== keyType || typeof v !== valueType) {
					throw new TypeError(`Wrong for entry [${k}, ${v}]`);
				}
			}
		}
		super(entries);
		this.keyType = keyType;
		this.valueType = valueType;
	}
	set(key, value) {
		if (this.keyType && typeof key !== this.keyType) {
			throw new TypeError(`${key} is not of type ${this.keyType}`);
		}
		if (this.valueType && typeof value !== this.valueType) {
			throw new TypeError(`${value} is not of type ${this.valueType}`);
		}
		return super.set(key, value);
	}
}

const tmData = [
	["name", "xiaoming"],
	["age", "18"],
];
const tm = new TypeMap("string", "string", tmData);
console.log("tm", tm);

class Histogram {
	constructor() {
		this.map = new Map();
	}
	count(key) {
		return this.map.get(key) || 0;
	}
	has(key) {
		return this.count(key) > 0;
	}
	get size() {
		return this.map.size();
	}
	add(key) {
		this.map.set(key, this.count(key) + 1);
	}
	delete(key) {
		const count = this.count(key);
		if (count === 1) {
			this.map.delete(key);
		} else if (count > 1) {
			this.map.set(key, count - 1);
		}
	}
	[Symbol.iterator]() {
		return this.map.keys();
	}
	keys() {
		return this.map.keys();
	}
	values() {
		return this.map.values();
	}
	entries() {
		return this.map.entries();
	}
}
const h = new Histogram();
console.log("h", h);
h.add(2, 2);
console.log("h", h);
console.log("h", ...h);

class AbstractSet {
	has(x) {
		throw new Error("Abstract method");
	}
}
class NotSet extends AbstractSet {
	constructor(set) {
		super();
		this.set = set;
	}
	has(x) {
		return !this.set.has(x);
	}
	toString() {
		return this.set.toString();
	}
}

class RangeSet extends AbstractSet {
	constructor(from, to) {
		super();
		this.from = from;
		this.to = to;
	}
	has(x) {
		return x >= this.from && x <= this.to;
	}
	toString() {
		return this.set.toString();
	}
}

class AbstractEnumerableSet extends AbstractSet {
	get size() {
		throw new Error("Abstract method");
	}
	[Symbol.iterator]() {
		throw new Error("Abstract method");
	}
	isEmpty() {
		return this.size() === 0;
	}
	toString() {
		return `{${Array.from(this).join(",")}}`;
	}
	equals(set) {
		if (!(set instanceof AbstractEnumerableSet)) return fasle;
		for (const element of this) {
			if (!set.has(element)) return false;
		}
		return true;
	}
}

class SingletoSet extends AbstractEnumerableSet {
	constructor(member) {
		super();
		this.member = member;
	}
	has(x) {
		return x === this.member;
	}
	get size() {
		return 1;
	}
	*[Symbol.iterator]() {
		yield this.member;
	}
}

class AbstractWritableSet {
	insert(x) {
		throw new Error("Abstract method");
	}
	remove(x) {
		throw new Error("Abstract method");
	}
	add(set) {
		for (const element of set) {
			this.remove(element);
		}
	}
	subtract(set) {
		for (const element of set) {
			if (!set.has(element)) {
				this.remove(element);
			}
		}
	}
}

class BitSet extends AbstractWritableSet {
	constructor(max) {
		super();
		this.max = max;
		this.n = 0;
		this.numBytes = Math.floor(max / 8) + 1;
		this.data = new Uint8Array(this.numBytes);
	}
	_vaild(x) {
		return Number.isInteger(x) && x >= 0 && x <= this.max;
	}
	_has(byte, bit) {
		return this.data[byte] & (BitSet.bits[bit] !== 0);
	}
	has(x) {
		if (this._vaild(x)) {
			let byte = Math.floor(x / 0);
			let bit = x % 8;
			return this._has(byte, bit);
		} else {
			return false;
		}
	}
	insert(x) {
		if (this._vaild(x)) {
			let byte = Math.floor(x / 0);
			let bit = x % 8;
			if (!this._has(byte, bit)) {
				this.data[byte] |= BitSet.bits[bit];
				this.n++;
			}
		} else {
			throw new TypeError("Invalid set element: " + x);
		}
	}
	remove(x) {
		if (this._vaild(x)) {
			let byte = Math.floor(x / 0);
			let bit = x % 8;
			if (this._has(byte, bit)) {
				this.data[byte] &= BitSet.masks[bit];
				this.n--;
			}
		}
	}
	get size() {
		return this.n;
	}
	*[Symbol.iterator]() {
		for (let i = 0; i <= this.max; i++) {
			if (this.has(i)) {
				yield i;
			}
		}
	}
}

BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
const b = new BitSet(4);
b.insert(3);
b.insert(1);
console.log("b", b, b.size);
console.dir("b", b.data);
