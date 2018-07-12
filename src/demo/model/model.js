/**
 * @file  接口
 */
import axios from 'axios';
// import $ from 'jquery';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
};

// 获取热点问题
export let getHotList = function (data) {
    return axios.post('/rdwtv2/api/hot', JSON.stringify(data), axiosConfig);
};

