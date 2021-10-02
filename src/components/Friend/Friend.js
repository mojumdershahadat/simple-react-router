import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const history = useHistory();
    const { id, name, phone, website, address} = props.friend;

    const handleClick = () => {
        history.push(`/friend/${id}`)
    }

    return (
        <div className="friend-design">
            <h2>Name: {name}</h2>
            <p>Phone: {phone} <br /> Website: {website} <br /> Address:{address.city}</p>
            <Link id="link-design" to={`/friend/${id}`}>Visit me</Link>
            <br />
            <Link to={`/friend/${id}`}>
              <button>Visit me</button>
            </Link>
            <br />
            <button onClick={handleClick}>Visit click</button>
        </div>
    );
};

export default Friend;