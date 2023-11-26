import { useEffect } from "react";
import { useState } from "react";

import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed Fetch");
        }
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (e) {
        console.error(e.message);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Page scrolled!");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  } else {
    return (
      <div className="user">
        <ul className="user-list">
          {users.length > 0 &&
            users.map((user) => (
              <li className="user-item" key={user.id}>
                <h3 className="user-item__name">Name: {user.name}</h3>
                <p className="user-item__username">Username: {user.username}</p>
                <p className="user-item__email">Email: {user.email}</p>
                <p className="user-item__website">Website: {user.website}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Users;
