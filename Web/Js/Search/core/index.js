/**
 * @alias Search.js
 */

/**
 * @alias 拆分字符串
 * @param {string|number|boolean} value
 * @returns {Array<string>}
 * @author ily
 */
const split = value => value.toString().toLowerCase().trim().split("");

/**
 * @alias 包含
 * @param {string|number|boolean} value
 * @param {string|number|boolean} key
 * @returns {boolean}
 * @author ily
 */
const includes = (value, key) => value.toString().toLowerCase().indexOf(key) > -1;

/**
 * @alias 单关键字搜索
 * @param {string|number} keyword 关键字
 * @param {Array<string>} fields 筛选的字段
 * @param {Array<any>} dataSource 数据源s
 * @returns {Array<any>} 筛选后的数据
 * @author ily
 */
function searchByKeyword(keyword, fields, dataSource) {
	const key = keyword.toString().toLowerCase().trim();
	return dataSource.filter(el => fields.some(item => includes(el[item], key)));
}

/**
 * @alias 多关键字搜索
 * @param {Object} keywords 筛选的字段及对应的关键字
 * @param {Array<any>} dataSource 数据源
 * @returns {Array<any>} 筛选后的数据
 */
function searchByKeywords(keywords, dataSource) {
	return dataSource.filter(el => {
		const keys = Object.keys(keywords);
		return keys.every(key => {
			return includes(el[key], keywords[key]);
		});
	});
}

/**
 * @alias 单关键字模糊搜索
 * @param {string|number} keyword 关键字
 * @param {Array<string>} fields 筛选的字段
 * @param {Array<any>} dataSource 数据源
 * @returns {Array<any>} 筛选后的数据
 * @author ily
 */
function fuzzySearchByKeyword(keyword, fields, dataSource) {
	const keys = split(keyword);
	return dataSource.filter(element => fields.some(item => keys.some(value => includes(element[item], value))));
}

/**
 * @alias 多关键字模糊搜索
 * @param {Object} keywords 参与筛选的字段及对应的关键字
 * @param {Array<any>} dataSource 数据源
 * @returns {Array<Object>} 筛选后的数据
 * @author ily
 */
function fuzzySearchByKeywords(keywords, dataSource) {
	return dataSource.filter(el => {
		const keys = Object.keys(keywords);
		return keys.every((key, key_i) => {
			const fuzzyKeys = split(keywords[key]);
			return fuzzyKeys.some(value => includes(el[keys[key_i]], value));
		});
	});
}

/**
 * 导出
 */
export { searchByKeyword, searchByKeywords, fuzzySearchByKeyword, fuzzySearchByKeywords };
