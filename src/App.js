import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
// import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs,roomInput , userAddRoom,InstituteDetailsform } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Newdevice from "./pages/device/Newdevice";
import Devicelist from "./pages/device/Devicelist";
import Roomlist from "./pages/room/Roomlist";
import Newroom from "./pages/room/Newroom";
import Single from "./pages/single/Single";
// import Adduser from ".pages/room/AddUses";
import Adduser from "./pages/room/AddUser";
import Signup from "./pages/signup/Signup";
import InstituteDetails from "./pages/institutedetails/InstituteDetails";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="signup">
              <Route
                index
                element={
                    <Signup />
                }
              />
            </Route>
            <Route path="details">
              <Route
                index
                element={
                  <RequireAuth>
                    <InstituteDetails  inputs={ InstituteDetailsform} title="Add details of the Institute"/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="roomlist">
              <Route
                index
                element={
                  <RequireAuth>
                    <Roomlist />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="singleview/:id">
              <Route
                index
                element={
                  <RequireAuth>
                    <Single/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="newroom">
              <Route
                index
                element={
                  <RequireAuth>
                    <Newroom inputs={roomInput} title="Add New Room" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="adduser/:id">
              <Route
                index
                element={
                  <RequireAuth>
                    <Adduser inputs={ userAddRoom} title="Add New Users to A room" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="newdevice">
              <Route
                index
                element={
                  <RequireAuth>
                    <Newdevice />
                  </RequireAuth>
                }
              />
              
            </Route>
            <Route path="devicelist">
              <Route
                index
                element={
                  <RequireAuth>
                    <Devicelist />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
