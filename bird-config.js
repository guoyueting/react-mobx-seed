/**
 * @file  bird-config.js
 */
var bird = require('./node_modules/gulp-bird/index');
// 静态服务器配置，可同时配置多个，域名需host到127.0.0.1
var server = {
    '8009': {
        // 静态文件根目录
        'basePath': './src/',
        // 是否开启调试模式，true(表示server端不缓存)，false（反之）
        'debug': true
        // 忽略的静态文件请求，与此正则匹配的请求将直接走转发规则（可选配置）
        // 'ignoreRegExp': /\/js\/urls\.js/g

    }
};
// 转发规则——静态服务器没有响应的或者忽略的请求将根据一下规则转发
var transpondRules = {
    '8009': {
        // 目标服务器的ip和端口，域名也可，但注意不要被host了
        targetServer: {
            'port': '80',
            // 'port': '8080',
            'host': 'http://ningmeng.dev.weiyun.baidu.com',
            // 'host': 'cp01-ps-dev373-liuchao31.epc.baidu.com',
            // 当为true时，如果cookie or header中有相同key，则替换
            'replaceHeaders': true,
            'headers': {
                    'Host': "http://m1-ite-hidev04.m1.baidu.com",
                    'Referer': "http://m1-ite-hidev04.m1.baidu.com"
                }
            }
        // 特殊请求转发，可选配置，内部的host、port和attachHeaders为可选参数
        // regExpPath: {
        //     // '/oa-frontend-apply-1.0.0-SNAPSHOT': {
        //     //     'host': 'cp01-dev-heliping.epc.baidu.com/',
        //     //     'port': '8080',
        //     //     //'attachHeaders': {'app-id': 5},
        //     //     'path': '\/'
        //     // }npm
        // }
    },
    'ajaxOnly': false
};

var toolsConf = {
    weinre: {
        open: false, // 和移动调试工具条中的vconsole冲突, 当为true时vconsole自动关闭
        port: 8009
    },
    showTools: false // 移动端调试工具条，PC端开发可关闭
};

bird.start(server, transpondRules, toolsConf);
