/**
 * @alias 栈 类
 * @author 梁雨
 */
class Stack {
	constructor() {
		this.items = [];
	}

	/**
	 * 进栈
	 * @param {any} element
	 */
	push(element) {
		this.items.push(element);
	}
	/**
	 * 退栈
	 * @returns {any}
	 */
	pop() {
		return this.items.pop();
	}
	/**
	 * 栈顶
	 * @returns {any}
	 */
	peek() {
		return this.items[-1];
	}
	/**
	 * 是否为空
	 * @returns
	 */
	isEmpty() {
		return this.items.length === 0;
	}
	/**
	 * 大小
	 * @returns {number}
	 */
	size() {
		return this.items.length;
	}
	/**
	 * 清空栈
	 * @returns {boolean}
	 */
	clear() {
		this.items.length = 0;
		return this.items.length === 0;
	}
	/**
	 * 打印
	 */
	prnit() {
		console.log(this.items.toString());
	}
}
