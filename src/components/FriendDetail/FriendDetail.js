import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
           <h3>Friend Detail of: {friendId}</h3>
           <h3>{friend.name}</h3>
           <h2>{friend.phone}</h2>
           <p>Works at: {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;