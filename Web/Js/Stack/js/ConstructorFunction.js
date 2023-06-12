/**
 * @alias 栈 构造函数
 * @author ily
 * @returns {Stack}
 */
function Stack() {
	if (!new.target) return new Stack();
	const items = [];
	/**
	 * 进栈
	 * @param {any} element
	 */
	this.push = function (element) {
		items.push(element);
	};
	/**
	 * 退栈
	 * @returns {any}
	 */
	this.pop = function () {
		return items.pop();
	};
	/**
	 * 栈顶
	 * @returns {any}
	 */
	this.peek = function () {
		return items[-1];
	};
	/**
	 * 是否为空
	 * @returns
	 */
	this.isEmpty = function () {
		return items.length === 0;
	};
	/**
	 * 大小
	 * @returns {number}
	 */
	this.size = function () {
		return items.length;
	};
	/**
	 * 清空栈
	 * @returns {boolean}
	 */
	this.clear = function () {
		items.length = 0;
		return items.length === 0;
	};
	/**
	 * 打印
	 */
	this.prnit = function () {
		console.log(items.toString());
	};
}
