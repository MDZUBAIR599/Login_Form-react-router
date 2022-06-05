import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import PrivateRoute from "../Conetxt/PrivateRoute";
import Login from "./Login";
import Users from "./Users";
import UsersPage from "./UsersPage";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Users"
            element={
              // <PrivateRoute>
              <Users />
              // {/* </PrivateRoute> */}
            }
          />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default AllRoutes;
