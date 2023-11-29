import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Userspage.css";

const Userspage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed Fetch");
        }
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e.message);
      }
    };

    getUsers();
  }, []);

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }
  return (
    <div className="user">
      <ul className="user-list">
        {users.length > 0 &&
          users.map((user) => (
            <li className="user-item" key={user.id}>
              <h3 className="user-item__name">Name: {user.name}</h3>
              <p className="user-item__info">
                <Link to={`${user.id}`} className="user-item__info">
                  More details
                </Link>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Userspage;
