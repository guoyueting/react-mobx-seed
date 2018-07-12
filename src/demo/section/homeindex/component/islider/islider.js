/**
 * @file 轮播图组件
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import iSlider from 'islider.js';
import './islider.scss';

import test from 'img/test.png';
import bannerone from 'img/banner.png';
import bannertwo from 'img/bannertwo.jpg';

import * as model from 'src/demo/model/model';
require('modules/iSlider.plugin.button');

@inject('AppState', 'iSliderState') @observer
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let dataArr = [{
                content: test
            },
            {
                content: bannerone
            },
            {
                content: bannertwo
            }];
        
        let islider = new iSlider({
            dom: document.getElementById('iSlider-wrapper'),
            data: dataArr,
            isLooping: true,
            isOverspread: true,
            animateTime: 800,
            plugins: ['button']
        });
    }

    render() {
        return<div className='islider-page'>
            <div id='iSlider-wrapper' className="banner-wrap"></div>
            <div className="title-bar">这是一个demo，更多资料请关注'https://guoyueting.github.io'</div>
        </div>
    }
}
