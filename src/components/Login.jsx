// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();

  // State variables to store user inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Save the input values to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password); // Note: Storing passwords in local storage is not recommended for production

    // Navigate to the main app page
    navigate("/map");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ width: "150px", marginBottom: "20px", borderRadius: "8%" }}
      />

      <Typography variant="h6" gutterBottom>
        Welcome to the Login
      </Typography>

      <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: 400 }}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, bgcolor: "#4BB3FD" }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}
