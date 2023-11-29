import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";

import "./Layout.css";

const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {
    setIsAuth(true);
  };

  if (!isAuth) {
    return (
      <div>
        <Header />
        <main>
          <button className="button-auth " onClick={handleAuth}>
            Autorization
          </button>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
