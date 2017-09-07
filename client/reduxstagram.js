import React from 'react';
import {render} from 'react-dom';
import css from './styles/style.styl';
import {Router, browserHistory} from 'react-router';
import routes from './routes/index';
import {Provider} from 'react-redux';
import store, {history} from './store';

const root = document.getElementById('root');

const router = (
    //browserHistory allows us to change the URLs without reloading the page
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>
);

render(
    router,
    root
);
