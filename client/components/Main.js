import React from 'react';
import {Link} from 'react-router';

const Main = (props) => (
    <div>
        <h1><Link to='/'>Reduxstagram</Link></h1>
        {React.cloneElement(props.children, props)}
    </div>
);

export default Main;

//use cloneElement() function to pass props of our container to our children
