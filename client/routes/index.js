import App from '../components/App';
import PhotoGrid from '../components/PhotoGrid';
import Single from '../components/Single';
import {itemPath} from '../helpers/routes/index';
import React from 'react';

export default {
    path: '/',
    component: App,
    indexRoute: {
        component: PhotoGrid
    },
    childRoutes: [
        {
            path: itemPath(),
            component: Single
        }
    ]
};
