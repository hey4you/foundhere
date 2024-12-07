import { Routes, Route, useLocation } from "react-router-dom";
import Map from "./components/Map";
import Login from "./components/Login";
import Profile from "./components/Profile";
import BottomNavigationBar from "./components/BottomNavigationBar";
import Liked from "./components/Liked";
import AccountSettings from "./components/AccountSettings";
import EditProfile from "./components/EditProfile";

export default function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Routes>
        <Route path="foundhere/" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>

      {/* Conditionally render BottomNavigation based on current route */}
      {location.pathname !== "/foundhere/" && <BottomNavigationBar />}
    </>
  );
}
