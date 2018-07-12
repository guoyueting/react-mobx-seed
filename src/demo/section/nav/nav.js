/**
 * @file 项目首页
 * @author guoyueting
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import classnames from 'classnames';
import './nav.scss';

@inject('AppState', 'NavState') @observer
export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.NavState = this.props.NavState;
        this.changeNav = this.changeNav.bind(this);
    }
    changeNav(key) {
        this.NavState.changeList(key);
    }
    render() {
            return <div className="nav-page">
                <ul className="list-ul">
				{
                    this.NavState.navList.map((item, index) => {
                        let navStyle = classnames({
                            'list-li': true,
                            'active': item.key === this.NavState.listShowType
                        });
                        return (
                            <li className={navStyle} key={'nav' + index} onClick={e => {this.changeNav(item.key);}}>
                                <span>{item.name}</span>
                            </li>
                        );
                    })
                }
	            </ul>
            </div>;
    }
}