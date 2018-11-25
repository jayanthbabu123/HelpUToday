import React, {Component} from 'react';
let CommonService = {
    service:(url, method, headers, body)=> {
        let _jsonObject = {};
        _jsonObject.headers = headers;
        _jsonObject.method = method;
        if (method !== 'GET') {
            _jsonObject.body = body;
        }
        return new Promise((resolve, reject) => {
            fetch(url, _jsonObject)
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    },
    getCardsData: function (body) {
        const _self = this;
        return new Promise((resolve, reject)=> {
            _self.service('http://localhost:3000/main_cat_array', 'GET').then((result)=> {
                if (result && result.length > 0) {
                    resolve(result);
                } else if (result.message) {
                    resolve({
                        message: result.message
                    });
                } else {
                    resolve({
                        message: 'something went wrong'
                    });
                }
            });
        });
    }
}
export default CommonService;