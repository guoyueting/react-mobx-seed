/**
 * @file 项目首页
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';

import Nav from 'section/nav/nav.js';
import HomeIndex from 'section/homeindex/homeindex.js';
import Service from 'section/service/service.js';
import MyRepair from 'section/myrepair/myrepair.js';
import './home.scss';

@inject('AppState', 'NavState') @observer
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.NavState = this.props.NavState;
    }
    render() {
        let listShowType = this.NavState.listShowType;

        return <div className="home-page">
            <Nav />
            {listShowType === 'nav-index' ? <HomeIndex /> : null}
            {listShowType === 'nav-service' ? <Service /> : null}
            {listShowType === 'nav-repair' ? <MyRepair /> : null}

        </div>;
    }
}