import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
    }
    renderComment(comment, i) {
        return (
            <div className='comment' key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button
                        className='remove-comment'
                        onClick={this.props.removeComment.bind(null, this.props.params.item_id, i)}
                    >
                        &times;
                    </button>
                </p>
            </div>
        );
    }
    handleSubmit(e) {
        e.preventDefault();

        const {item_id} = this.props.params,
            author = this.refs.author.value,
            comment = this.refs.comment.value;

        this.props.addComment(item_id, author, comment);
        this.refs.commentForm.reset();
    }
    render() {
        return (
            <div className='comment'>
                {this.props.postComments.map(this.renderComment)}
                <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
                    <input type='text' ref='author' placeholder='author' />
                    <input type='text' ref='comment' placeholder='comment' />
                    <input type='submit' hidden />
                </form>
            </div>
        );
    }
}

export default Comments;
