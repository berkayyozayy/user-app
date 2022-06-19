import React from "react";
import "../styles/UserCard.css";

export default function UserCard() {
  return (
    <div className="user-card">
      <div className="image-wrapper">
        <img
          src="https://randomuser.me/api/portraits/men/21.jpg"
          alt="user-avatar"
        />
      </div>
      <div className="user-content">
        <h3>Name: Berkay</h3>
        <h4>Email: bberkay@example.com</h4>
        <p>User Score: 0</p>
      </div>
    </div>
  );
}
