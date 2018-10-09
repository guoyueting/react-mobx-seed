/**
 * @file  接口
 */
import axios from 'axios';
// import $ from 'jquery';

// let axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         'Access-Control-Allow-Origin': '*'
//     }
// };
// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     // if (response.config.url === '/rdwtv2/api/hot') {
//     response.headers['Content-Type'] = 'application/json;charset=UTF-8';
//     // }
//     return response;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

// 获取热点问题
export let allowDownload = function (data) {
    console.error('data', data);
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

    // let param = new URLSearchParams();
    // param.append("begin", encodeURIComponent(data.begin));
    // param.append("end", encodeURIComponent(data.end));

    let begin = encodeURIComponent(data.begin);
    let end = encodeURIComponent(data.end)

    // let param =
    // console.error('data', typeof data.begin);
    // return axios.post('/download/allowDownload', param, axiosConfig);
    return axios.post('/download/allowDownload?begin=' + begin + '&end=' + end, {}, axiosConfig);

};

