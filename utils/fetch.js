/**
 * fetch.js
 * @author shaqihe
 * Created 2015-01-08
 */

import AjaxPromise from 'ajax-promise'

/**
 * 获取远程数据
 *
 * @method fetch
 * @memberof common
 * @type {Function}
 *
 * @param {string} url 远程URL
 * @param {Object} data 发送的数据
 * @param {Object} options 相关配置，参考`上面的ajax`方法
 * @return {Promise} 成功后会自动获取`data`数据
 */
function fetch(url, data) {
    return AjaxPromise.post(url, data);
}

export { fetch }
