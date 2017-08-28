import React from 'react';
import {render} from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import {Router, browserHistory} from 'react-router';
import routes from './routes/index';

const root = document.getElementById('root');

const router = (
    //browserHistory allows us to change the URLs without reloading the page
    <Router history={browserHistory} routes={routes}/>
);

render(
    router,
    root
);
