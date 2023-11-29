import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./UserInfopage.css";

const UserInfopage = () => {
  const { id } = useParams();
  const [user, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/users");
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
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
  }, [id]);

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  const { name, username, email } = user;
  const { street, suite, city } = user.address;

  return (
    <div className="user-info">
      <ul className="user-info__list">
        <li className="user-info__item">
          <p className="user-info__name">Name: {name}</p>
        </li>
        <li className="user-info__item">
          <p className="user-info__username">Username: {username}</p>
        </li>
        <li className="user-info__item">
          <p className="user-info__email">Email: {email}</p>
        </li>
        <li className="user-info__item">
          <ul className="user-info-address__list">
            Address:
            <li className="user-info-address__item">
              <p className="user-info-address__street">Street: {street}</p>
            </li>
            <li className="user-info-address__item">
              <p className="user-info-address__suite">Suite: {suite}</p>
            </li>
            <li className="user-info-address__item">
              <p className="user-info-address__city">{city}</p>
            </li>
          </ul>
        </li>
      </ul>
      <button className="button-return btn" onClick={handleRedirect}>
        Return
      </button>
    </div>
  );
};

export default UserInfopage;
