/**
 * @file 问题推荐
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import repeat from 'img/repeat.png';
import recommend from './recommend.scss';

import dislike from 'img/dislike.png';
export default class Recommend extends React.Component {
    render() {
            return <div className="recommend-page">
                <div className="topline">
		            <div className="topline-left">
		                <span className='hot'>问题推荐</span>
	                </div>
	                <div className="topline-right">
		                <img className='repeat' src={repeat} />
		                <span>换一批</span>
	                </div>
                </div>
                <div className="hot-content">
	                <ul>
		                <li>
			                <span>打印机使用方法</span>
			                <img src={dislike}/>
		                </li>
		                <li>
			                <span>临时软TOKEN申请流程</span>
			                <img src={dislike}/>
		                </li>
		                <li>
			                <span>电脑翻墙-国外代理配置</span>
			                <img src={dislike}/>
		                </li>
	                </ul>
                </div>
            </div>;
    }
}