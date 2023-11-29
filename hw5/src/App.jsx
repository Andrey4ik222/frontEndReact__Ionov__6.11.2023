import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import UserInfopage from "./pages/UserInfopage/UserInfopage";
import Userspage from "./pages/Userspage/Userspage";
import Notfoundpage from "./pages/Notfoundpage/Notfoundpage";

import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/users" element={<Userspage />} />
            <Route path="/users/:id" element={<UserInfopage />} />
          </Route>

          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
