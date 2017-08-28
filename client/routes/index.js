import Main from '../components/Main';
import PhotoGrid from '../components/PhotoGrid';
import Single from '../components/Single';
import {itemPath} from '../helpers/routes/index';
import React from 'react';

export default {
    path: '/',
    component: Main,
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
