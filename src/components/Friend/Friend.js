import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    };
    const url = `/friend/${id}`;
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h4>Cal me: {phone}</h4>
            <p>Visit: {website}</p>
            <p><small>Location: {address.city}</small></p>
            <Link to={url}>Visit me</Link>
        </div>
    );
};

export default Friend;