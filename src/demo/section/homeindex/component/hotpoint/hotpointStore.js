/**
 * @file isliderStore
 * @author guoyueting
 */
'use strict';

import {observable, action, runInAction} from 'mobx';
import * as model from 'src/demo/model/model';

export default class hotPointState {
    @observable hotpointList = [];

    @action getHotPointListList() {
        console.error('1');
        let params = {
            accountId: "1000607",
            mappedAppKey: "baiduzhiqiuceshi",
            pageNo: 1,
            pageSize: 3,
            sourceId: 0,
            uid: 1000607
        };
        model.getHotList(params).then(data => {
            runInAction(()=>{
                console.error('data', data);
                this.hotpointList = data;
            });
        });
    }
}
