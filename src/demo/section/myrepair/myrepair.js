/**
 * @file 自助服务
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';

import './myrepair.scss';


// @inject('AppState', 'SecurityState') @observer
export default class MyRepair extends React.Component {
    render() {
            return <div className="repair-page">
	                 <div className="service-section">
		                <div className="first-line">
			                <span className="service-content">修改员工/邮箱密码</span>
			                <span className="service-status-finish">已完成</span>
		                </div>
		                <div className="second-line">
			                <span>维修人：张同学</span>
			                <span>时间：2018-06-06</span>
		                </div>
		                <div className="third-line">
			                <span>Thinpad以使用超过5年，目前已经老旧不能使用</span>
		                </div>
	                </div>
	                <div className="divide-line"></div>

	                <div className="service-section">
		                <div className="first-line">
			                <span className="service-content">修改员工/邮箱密码</span>
			                <span className="service-status-passtime">已过期</span>
		                </div>
		                <div className="second-line">
			                <span>维修人：张同学</span>
			                <span>时间：2018-06-06</span>
		                </div>
		                <div className="third-line">
			                <span>Thinpad以使用超过5年，目前已经老旧不能使用</span>
		                </div>
	                </div>
	                <div className="divide-line"></div>

	                <div className="service-section">
		                <div className="first-line">
			                <span className="service-content">修改员工/邮箱密码</span>
			                <span className="service-status-doing">受理中</span>
		                </div>
		                <div className="second-line">
			                <span>维修人：张同学</span>
			                <span>时间：2018-06-06</span>
		                </div>
		                <div className="third-line">
			                <span>Thinpad以使用超过5年，目前已经老旧不能使用</span>
		                </div>
	                </div>
	                <div className="divide-line"></div>

	                <div className="service-section">
		                <div className="first-line">
			                <span className="service-content">修改员工/邮箱密码</span>
			                <span className="service-status-aseess">待评价</span>
		                </div>
		                <div className="second-line">
			                <span>维修人：张同学</span>
			                <span>时间：2018-06-06</span>
		                </div>
		                <div className="third-line">
			                <span>Thinpad以使用超过5年，目前已经老旧不能使用</span>
		                </div>
	                </div>
	                <div className="divide-line"></div>
            </div>;
    }
}