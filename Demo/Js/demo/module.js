// const stats = (function () {
// 	/**
// 	 * sum
// 	 * @param {number} x
// 	 * @param {number} y
// 	 * @returns
// 	 */
// 	const sum = (x, y) => x + y;
// 	/**
// 	 * square
// 	 * @param {number} x
// 	 * @returns
// 	 */
// 	const square = x => x * x;
// 	/**
// 	 * mean
// 	 * @param {Array} data
// 	 * @returns
// 	 */
// 	function mean(data) {
// 		return data.reduce(sum) / data.length;
// 	}
// 	function stddev(data) {
// 		let m = mean(data);
// 		return Math.sqrt(
// 			data
// 				.map(x => x - m)
// 				.map(square)
// 				.reduce(sum) /
// 				(data.length - 1)
// 		);
// 	}
// 	return {
// 		mean,
// 		stddev,
// 	};
// })();
// console.log("stats", stats);
// console.log(stats.mean([1, 2, 3, 45, 6]));
// console.log(stats.stddev([1, 2, 3, 45, 6]));

// const MyMath = new ((function () {
// 	const PI = 3.14;
// 	return class MyMath {
// 		/**
// 		 * PI精度
// 		 * @param { number } PI_ACCURACY 2 | 10
// 		 */
// 		constructor() {
// 			this.PI = PI;
// 		}
// 		cycleArea(radius) {
// 			return radius * radius * this.PI;
// 		}
// 		cyclePerimeter(diameter) {
// 			return diameter * this.PI;
// 		}
// 	};
// })())();
// console.log("MyMath", MyMath);
// console.log(MyMath.cycleArea(2));
// console.log(MyMath.cyclePerimeter(2));
// const REQUIRE = require("./require.js");
// console.log(REQUIRE);

class AsyncModule {
	constructor() {}
	static async import(path) {
		const require = await import(path);
		return require.default;
	}
}
const r = await AsyncModule.import("./require.js");
// console.log(r);
