/**
 * @alias 校验是否为数组
 * @param {any} target 要校验的目标
 * @returns {boolean} 返回值
 * @author ily
 */
function isArray(target) {
	if (!Array.isArray) {
		Array.isArray = function (target) {
			// 兼容 ES5 以下版本语法
			return Object.prototype.toString.call(target) === "[object Array]";
		};
	} else {
		return Array.isArray(target);
	}
}

export default {
	isArray,
};
