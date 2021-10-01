import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
   useEffect( () => {
       const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setFriend(data))
   }, []);
    return (
        <div>
            <h4>Friend Detail of: {friendId}</h4>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Company: {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;