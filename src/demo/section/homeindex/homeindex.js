/**
 * @file 项目首页
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import test from 'img/test.png';
import './homeindex.scss';

import HotPoint from './component/hotpoint/hotpoint';
import Recommend from './component/recommend/recommend';
import Slider from './component/islider/islider';
// @inject('AppState') @observer
export default class HomeIndex extends React.Component {
    render() {
            return <div className="homeindex-page">
	            <Slider />
                <HotPoint />
                <Recommend />
            </div>;
    }
}


// <img className="banner-img" src={test}/>
