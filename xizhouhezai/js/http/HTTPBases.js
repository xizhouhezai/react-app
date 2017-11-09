let HTTPBases = {};

/**
 * 
 * GET请求
 * 
 * @param(参数) url
 * @param(参数) params {}obj封装
 * @param headers
 * 
 * @return(返回值) {promise}
 */

HTTPBases.get = function(url, params, headers) {
    if(params) {
        let paramsArray = [];

        // 获取 params 所有的 key 值
        let paramsKeyArray = object.keys(params);

        // 通过 forEach 方法拿到数组中每个元素,将元素与参数的值进行拼接处理,并且放入 paramsArray 中
        paramsKeyArray.forEach(key => paramsArray.push(key + '=' + params[key]));

        // 网址拼接
        if(url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += paramsArray.join('&');
        }
    }

    return new Promise(function(resolve, reject){
        fetch(url, {
            method: "GET",
            headers: headers,
        })
        .then(res => res.json())
        .then(resData => {
            resolve(resData)
        })
        .catch(err => {
            reject({status:-1})
        })
        .done()
    })
}