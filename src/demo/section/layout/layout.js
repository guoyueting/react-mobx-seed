import React from 'react';
import {inject, observer} from 'mobx-react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from 'section/home/home.js';

export default class Layout extends React.Component {
    render() {
        return (
            <section id="layout">
                <Switch>
                    <Route path="/home" component={Home} ></Route>
                    <Redirect to="/home" />
                </Switch>
            </section>
        );
    }
}