import {
  Avatar,
  Typography,
  Button,
  Container,
  Box,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email"); // Correct key based on Login.jsx
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    // Clear local storage and navigate back to the login page
    localStorage.clear();
    navigate("/foundhere/");
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
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
        {username || "User"}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {email || "user@example.com"}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Box display="flex" flexDirection="column" gap={2} alignItems="center">
        <Button variant="contained" fullWidth sx={{ bgcolor: "#2CDA9D" }}>
          Edit Profile
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ color: "#22333B", borderColor: "#22333B" }}
        >
          Account Settings
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ color: "#22333B", borderColor: "#22333B" }}
        >
          My Liked Souvenirs
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#FF8A5B" }}
          fullWidth
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
