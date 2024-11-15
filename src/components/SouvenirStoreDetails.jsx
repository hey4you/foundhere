import { Fab, Typography, Box, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PropTypes from "prop-types";

const SouvenirStoreDetails = ({ store, onBack }) => {
  return (
    <>
      {/* Back Button */}
      <Fab variant="extended" onClick={onBack} sx={{ bgcolor: "#777AA9" }}>
        <ArrowBackIcon sx={{ mr: 1 }} />
        Back to List
      </Fab>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt: 2,
        }}
      >
        {/* Store Main Content */}
        <Paper
          sx={{
            width: "100%",
            maxWidth: 800,
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "#ffffff",
          }}
        >
          {/* Store Name */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              mb: 2,
            }}
          >
            {store.name}
          </Typography>

          {/* Store Location, Phone, and Hours */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", justifyContent: "center", mb: 1 }}
            >
              <LocationOnIcon sx={{ mr: 1, color: "#2196f3" }} />{" "}
              {store.location}
            </Typography>
            {store.phone && (
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", justifyContent: "center", mb: 1 }}
              >
                <PhoneIcon sx={{ mr: 1, color: "#2196f3" }} /> {store.phone}
              </Typography>
            )}
            {store.hours && (
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <AccessTimeIcon sx={{ mr: 1, color: "#2196f3" }} />{" "}
                {store.hours}
              </Typography>
            )}
          </Box>

          {/* Store Description */}
          {store.description && (
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                color: "#666",
                mb: 4,
                textAlign: "center",
              }}
            >
              {store.description}
            </Typography>
          )}
        </Paper>
      </Box>
    </>
  );
};

// Define prop types
SouvenirStoreDetails.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string,
    hours: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onBack: PropTypes.func, // Optional prop for the back button
};

export default SouvenirStoreDetails;
