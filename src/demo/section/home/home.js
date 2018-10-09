/**
 * @file 项目首页
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import { Button, DatePicker, LocaleProvider } from 'antd';
import './home.scss';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';

import * as model from 'model/model';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD HH:mm';

@inject('AppState') @observer
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.NavState = this.props.NavState;
        this.onTimeChange = this.onTimeChange.bind(this);
        this.handleExport = this.handleExport.bind(this);
        this.disabledDate = this.disabledDate.bind(this);
        let currentInit = new moment();
        let zeroInit = moment({hour:0, minute:0, second:0, millisecond:0});
        this.state = {
            starttime: zeroInit.format(dateFormat),
            endtime: currentInit.format(dateFormat)
        }
    }
    onTimeChange(value, dataString) {
        let starttime = dataString[0];
        let endtime = dataString[1];
        this.setState({
            starttime: starttime,
            endtime: endtime
        });
    }

    handleExport() {
        let {starttime, endtime} = this.state;
        let param = {
            begin: starttime,
            end: endtime
        };
        model.allowDownload(param).then(data => {
            let status = data.data.data;
            if (status === 1 || status === '1') {
                alert('当前时间段没有数据，请扩大选择范围');
            }
            else if(status === 0 || status === '0'){
                let exportUrl = 'http://ningmeng.weiyun.baidu.com'
                                    + '/download/getCourseAndCommentsData'
                                    + '?begin='
                                    + starttime
                                    + '&end='
                                    + endtime;
                window.open(exportUrl);
            }
            else {
                alert('服务器返回错误');
            }
        });
        
    }

    disabledDate(current) {
        let flag = (current && current < moment('2018-08-07'));
        return flag;
    }

    render() {
        let current = new moment();
        let zero = moment({hour:0, minute:0, second:0, millisecond:0});
        return <LocaleProvider locale={zh_CN}>
            <div className="home-page">
                <div className="datapicker">
                    <span className="time-show">时间选择：</span>
                    <RangePicker
                        renderExtraFooter={() => "请先选择日期范围，再前往右下角「选择时间」处设置小时和分钟"}
                        defaultValue={[zero, current]}
                        disabledDate={this.disabledDate}
                        size="small"
                        format="YYYY-MM-DD HH:mm"
                        showTime
                        onChange={this.onTimeChange}/>
                    <Button className="export" size="small" type="primary" onClick={() => {this.handleExport()}}>导出数据</Button>
                </div>
            </div>
        </LocaleProvider>;
    }
}
