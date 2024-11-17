import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { FaMapMarkedAlt, FaHeart, FaUser } from "react-icons/fa";
import { SvgIcon } from "@mui/material";

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState("map");
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === "map") {
      navigate("/map");
    } else if (newValue === "liked") {
      navigate("/liked");
    } else if (newValue === "profile") {
      navigate("/profile");
    }
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: "10",
        minHeight: "60px",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={activeTab}
        onChange={handleTabChange}
        sx={{ bgcolor: "#374151", color: "#9ca3af", height: "75px" }}
      >
        <BottomNavigationAction
          label="Map"
          value="map"
          icon={
            <SvgIcon>
              <FaMapMarkedAlt />
            </SvgIcon>
          }
          sx={{ color: "#9ca3af" }}
        />
        <BottomNavigationAction
          label="Liked"
          value="liked"
          icon={
            <SvgIcon>
              <FaHeart />
            </SvgIcon>
          }
          sx={{ color: "#9ca3af" }}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={
            <SvgIcon>
              <FaUser />
            </SvgIcon>
          }
          sx={{ color: "#9ca3af" }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
