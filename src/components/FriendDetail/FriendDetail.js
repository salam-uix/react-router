import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();
   useEffect( () => {
       const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setFriend(data))
   }, []);

   const handleClick = () => {
       history.push(`/friends`)
   }
    return (
        <div>
            <h4>Friend Detail of: {friendId}</h4>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Company: {friend.company?.name}</p>
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;