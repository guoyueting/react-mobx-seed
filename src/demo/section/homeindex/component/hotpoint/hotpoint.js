/**
 * @file 热点问题
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import './hotpoint.scss';
import repeat from 'img/repeat.png';

@inject('AppState', 'hotPointState') @observer
export default class HotPoint extends React.Component {
    constructor(props) {
        super(props);
        this.hotPointState = this.props.hotPointState;
    }
    render() {
            return <div className="hotpoint-page">
                <div className="topline">
                    <div className="topline-left">
                        <span className='hot'>热点问题</span>
                    </div>
                    <div className="topline-right">
                        <img className='repeat' src={repeat} />
                        <span>换一批</span>
                    </div>
                </div>
                <div className="hot-content">
                    <ul>
                        <li><span>手机配置邮箱/链接公司WIFI如何设置</span></li>
                        <li><span>彩色打印机的使用方法</span></li>
                        <li><span>IThelp的办公位置在哪里？</span></li>
                    </ul>
                </div>
            </div>;
    }
}