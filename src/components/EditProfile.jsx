import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Divider,
} from "@mui/material";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "User123";
    const storedEmail = localStorage.getItem("email") || "user@example.com";
    setUsername(storedUsername);
    setEmail(storedEmail);
  }, []);

  // Handle saving the updated username
  const handleSaveUsername = () => {
    localStorage.setItem("username", username);
  };

  // Handle password reset (trigger alert)
  const handlePasswordReset = () => {
    setAlertOpen(true);
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h5"
        svariant="h5"
        sx={{
          textAlign: "center",
          mb: 3,
          fontWeight: "bold",
          bgcolor: "#777AA9",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Edit Profile
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* Username Input */}
      <TextField
        label="Username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <Button
        fullWidth
        onClick={handleSaveUsername}
        variant="outlined"
        sx={{
          color: "#778DA9",
          borderColor: "#778DA9",
          borderRadius: "20px",
          mb: "20px",
        }}
      >
        Save new Username
      </Button>

      {/* Email Label */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Email:</strong> {email}
      </Typography>

      {/* Password Reset Button */}
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={handlePasswordReset}
        sx={{ borderRadius: "20px" }}
      >
        Change Password
      </Button>

      {/* Password Reset Alert */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Password reset email has been sent!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditProfile;
