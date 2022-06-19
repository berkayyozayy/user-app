import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../redux/actions/userActions";
import axios from "axios";
import "../styles/UserList.css";
import UserCard from "./UserCard";

export default function UserList() {
  const users = useSelector((state) => state.allUsers.users.users);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    const response = await axios
      .get("https://holy-grouper-21.hasura.app/api/rest/users")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="user-list-container">
      <UserCard />
    </div>
  );
}
