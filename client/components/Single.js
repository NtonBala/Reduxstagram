import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
    const {item_id} = props.params,
        i = props.posts.findIndex((post) => post.code === item_id);

    const post = props.posts[i],
        postComments = props.comments[item_id] || [];

    return (
        <div className='single-photo'>
            <Photo
                {...props}
                i={i}
                post={post}
            />
            <Comments postComments={postComments} {...props} />
        </div>
    );
};

export default Single;
