/**
 * @file storeTree 整个app的状态树
 * @author guoyueting
 */
'use strict';

import {observable, action, extendObservable, runInAction} from 'mobx';
import NavState from 'section/nav/navStore';
import iSliderState from 'section/homeindex/component/islider/isliderStore';
import hotPointState from 'section/homeindex/component/hotpoint/hotpointStore';

class AppState {

}

export default {
    AppState: new AppState(),
    NavState: new NavState(),
    iSliderState: new iSliderState(),
    hotPointState: new hotPointState()
}