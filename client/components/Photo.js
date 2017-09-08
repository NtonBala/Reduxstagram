import React from 'react';
import {Link} from 'react-router';
import {itemPath} from '../helpers/routes/index';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = (props) => (
    <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
            <Link to={`/${itemPath(props.post.code)}`}>
                <img
                    src={props.post.display_src}
                    alt={props.post.caption}
                    className='grid-photo'
                />
            </Link>
            <CSSTransitionGroup
                transitionName='like'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <span
                    key={props.post.likes}
                    className='likes-heart'
                >
                    {props.post.likes}
                </span>
            </CSSTransitionGroup>
        </div>
        <figcaption>
            <p>{props.post.caption}</p>
            <div className='control-buttons'>
                <button
                    onClick={props.increment.bind(null, props.i)}
                    className='likes'
                >
                    &hearts; {props.post.likes}
                </button>
                <Link
                    className='button'
                    to={`/${itemPath(props.post.code)}`}
                >
                    <span className='comment-count'>
                        <span className='speech-bubble'></span>
                        {` ${props.comments[props.post.code] ? props.comments[props.post.code].length : 0}`}
                    </span>
                </Link>
            </div>
        </figcaption>
    </figure>
);

export default Photo;
