import React from 'react';

const CommentDetail = (props) => {
    return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.authorImage} alt="avatar" />
                </a>
                <div className="content">
                    <a className="author" href="/">{props.author}</a>
                    <div className="metadata">
                        <span className="date">{props.postTime}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
    );
};

export default CommentDetail;