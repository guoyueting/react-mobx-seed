/**
 * @file storeTree 整个app的状态树
 * @author guoyueting
 */
'use strict';

import {observable, action, extendObservable, runInAction} from 'mobx';

import * as model from 'model/model';

class AppState {
    @observable isAllowDownload = 1;

    @action checkAllowDownload(param) {
        let me = this;
        model.allowDownload(param);
    }
}

export default {
    AppState: new AppState()
}