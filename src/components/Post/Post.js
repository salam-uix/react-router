import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    const history = useHistory()
    const handleClick = () => {
        history.push(`/post/${id}`);
    }
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post Details</Link>
            <br />
            <button onClick={handleClick}>Clic to see details</button>
        </div>
    );
};

export default Post;