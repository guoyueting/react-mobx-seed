/**
 * @file 自助服务
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import service from 'img/service-icon.png';
import './service.scss';


// @inject('AppState', 'SecurityState') @observer
export default class Service extends React.Component {
    render() {
            return <div className="service-page">
	                <div className="service-section">
		                <div className="first-line">
			                <img src={service}/>
			                <span>修改员工/邮箱密码</span>
		                </div>
		                <div className="second-line">
			                <span>点击后可修改您的员工登录及邮箱登录密码</span>
		                </div>
	                </div>
	                <div  className="service-section">
		                <div className="first-line">
			                <img src={service}/>
			                <span>找回员工/邮箱密码</span>
		                </div>
						<div className="second-line">
			                <span>点击后可修改您的员工登录及邮箱登录密码</span>
		                </div>
	                </div>
	                <div  className="service-section">
		                <div className="first-line">
			                <img src={service}/>
			                <span>键盘鼠标领用申请</span>
		                </div>
						<div className="second-line">
			                <span>点击后可修改您的员工登录及邮箱登录密码</span>
		                </div>
	                </div>
	                <div className="service-section">
		                <div className="first-line">
			                <img src={service}/>
			                <span>语音终端申请</span>
		                </div>
						<div className="second-line">
			                <span>点击后可修改您的员工登录及邮箱登录密码</span>
		                </div>
	                </div>
	                <div  className="service-section">
		                <div className="first-line">
			                <img src={service}/>
			                <span>RSA Token补办流程</span>
		                </div>
		                <div className="second-line">
			                <span>点击后可修改您的员工登录及邮箱登录密码</span>
		                </div>
	                </div>
            </div>;
    }
}