/**
 * @file navStore
 * @author guoyueting
 */
'use strict';

import {observable, action, runInAction} from 'mobx';

export default class NavState {
    @observable listShowType = 'nav-index';

    constructor() {
        this.navList = [
            {
                key: 'nav-index',
                className: 'nav-index',
                name: '首页'
            },
            {
                key: 'nav-service',
                className: 'nav-service',
                name: '自助服务'
            },
            {
                key: 'nav-repair',
                className: 'nav-repair',
                name: '我的报修'
            }
        ];
    }
    // 切换列表
    @action changeList(listShowType) {
        this.listShowType = listShowType;
    }
}
