/**
 * @alias map
 * @param {Function} callbackFn
 * @param {Array} thisTarget
 * @author ily
 * @returns {Array}
 */
const map = function (callbackFn, thisTarget) {
	const res = [];
	for (let index = 0; index < this.length; index++) {
		res[index] = callbackFn(this[index], index, thisTarget);
	}
	return res;
};

/**
 * @alias filter
 * @param {Function} callbackFn
 * @param {Array} thisTarget
 * @author ily
 * @returns {Array}
 */
const filter = function (callbackFn, thisTarget) {
	const res = [];
	for (let index = 0; index < this.length; index++) {
		if (callbackFn(this[index], index, thisTarget)) res.push(this[index]);
	}
	return res;
};

/**
 * @alias reduce
 * @param {Function} callbackFn
 * @param {number|string} initial @default 0
 * @returns {number|string}
 * @author ily
 */
const reduce = function (callbackFn, initial = 0) {
	let res = initial;
	for (let index = 0; index < this.length; index++) {
		res = callbackFn(res, this[index]);
	}
	return res;
};

/**
 * @alias concat
 * @argument {} callbackFn
 * @returns {Array}
 * @author ily
 */
const concat = function (...more) {
	const res = [...this];
	for (let index = 0; index < more.length; index++) {
		// 内置的**Symbol.isConcatSpreadable**符号用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素。
		// 参阅：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
		if (more[index][Symbol.isConcatSpreadable] === true) res.push(...more[index]);
		else if (more[index][Symbol.isConcatSpreadable] === false) {
			res.push(more[index]);
		} else {
			res.push(...more[index]);
		}
	}
	return res;
};

/**
 * @alias every
 * @param {Function} callbackFn
 * @param {Array} thisTarget
 * @author ily
 * @returns {boolean}
 */
const every = function (callbackFn, thisTarget) {
	for (let index = 0; index < this.length; index++) {
		if (!callbackFn(this[index], index, thisTarget)) {
			return false;
		}
	}
	return true;
};

/**
 * @alias some
 * @param {Function} callbackFn
 * @param {Array} thisTarget
 * @author ily
 * @returns {boolean}
 */
const some = function (callbackFn, thisTarget) {
	for (let index = 0; index < this.length; index++) {
		if (callbackFn(this[index], index, thisTarget)) {
			return true;
		}
	}
	return false;
};

export { map, filter, reduce, concat, every, some };
