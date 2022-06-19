import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles/UserCard.css";

export default function UserCard() {
  const users = useSelector((state) => state.allUsers.users.users);
  const renderList =
    users &&
    users.map((user) => {
      const { id, name, email, score, imageUrl } = user;
      return (
        <div className="user-card" key={id}>
          <div className="image-wrapper">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="user-content">
            <h3>Name: {name} </h3>
            <h4>Email: {email} </h4>
            <p>User Score: {score} </p>
          </div>
        </div>
      );
    });

  return <>{renderList}</>;
}
