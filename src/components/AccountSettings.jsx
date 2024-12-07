import { useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    locationHidden: false,
    notificationsEnabled: true,
    darkMode: false,
    autoUpdates: true,
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
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
        sx={{
          textAlign: "center",
          mb: 3,
          fontWeight: "bold",
          bgcolor: "#777AA9",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Account Settings
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <List>
        <ListItem>
          <ListItemText
            primary="Hide Location"
            secondary="Prevent others from seeing your location"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.locationHidden}
                onChange={() => handleToggle("locationHidden")}
                color="success"
              />
            }
            label=""
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Enable Notifications"
            secondary="Receive notifications from the app"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.notificationsEnabled}
                onChange={() => handleToggle("notificationsEnabled")}
                color="success"
              />
            }
            label=""
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Dark Mode"
            secondary="Use a dark theme for the app"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.darkMode}
                onChange={() => handleToggle("darkMode")}
                color="success"
              />
            }
            label=""
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Auto Updates"
            secondary="Enable automatic app updates"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.autoUpdates}
                onChange={() => handleToggle("autoUpdates")}
                color="success"
              />
            }
            label=""
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default AccountSettings;
