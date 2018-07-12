import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Redirect} from 'react-router-dom';
import {Provider} from 'mobx-react';
import storeTree from './storeTree';
import 'section/common/scss/common.scss';
import Layout from 'section/layout/layout.js';

class App extends React.Component {
    render() {
        return (
            <Provider {...storeTree} >
                <HashRouter>
                    <Route path="/" component={Layout}/>
                </HashRouter>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('app'));
            // <Provider {...storeTree}>
