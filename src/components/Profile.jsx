import {
  Avatar,
  Typography,
  Button,
  Container,
  Box,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Profile = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email"); // Correct key based on Login.jsx
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    // Clear local storage and navigate back to the login page
    localStorage.clear();
    navigate("/foundhere/");
  };

  const navigateToLiked = () => {
    navigate("/liked/");
  };

  const navigateToAccountSettings = () => {
    navigate("/account-settings/");
  };

  const navigateToEditProfile = () => {
    navigate("/edit-profile/");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ textAlign: "center", pt: 6 }} // Using Material-UI's sx prop for styling
    >
      <Avatar
        alt="User Avatar"
        src="/images/user-avatar.jpg" // Replace with an actual image URL if available
        sx={{ width: 100, height: 100, mx: "auto" }} // Material-UI's sx prop for width, height, and center alignment
      >
        {username.charAt(0)}
      </Avatar>

      <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
        {username || "User"}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {email || "user@example.com"}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Box display="flex" flexDirection="column" gap={2} alignItems="center">
        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: "#778DA9", borderRadius: "20px" }}
          onClick={navigateToEditProfile}
        >
          Edit Profile
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            color: "#778DA9",
            borderColor: "#778DA9",
            borderRadius: "20px",
          }}
          onClick={navigateToAccountSettings}
        >
          Account Settings
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            color: "#778DA9",
            borderColor: "#778DA9",
            borderRadius: "20px",
          }}
          onClick={navigateToLiked}
        >
          My Liked Souvenirs
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#FF8A5B", borderRadius: "20px" }}
          fullWidth
          onClick={handleLogout}
        >
          Logout
          <LogoutIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
