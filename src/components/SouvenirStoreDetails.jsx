import { Fab, Typography, Box, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel"; // Carousel example (install via npm if needed)
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const SouvenirStoreDetails = ({ store, onBack }) => {
  return (
    <>
      {/* Back Button */}
      <Fab
        variant="extended"
        onClick={onBack}
        sx={{ bgcolor: "#777AA9", color: "#ffffff" }}
      >
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
              textAlign: "left",
              mb: 2,
            }}
          >
            {store.name}
          </Typography>

          {/* Store Images */}
          {store.images && store.images.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Carousel showThumbs={false} infiniteLoop autoPlay>
                {store.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Store Image ${index + 1}`}
                      style={{
                        borderRadius: "8px",
                        maxHeight: "300px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </Box>
          )}

          {/* Store Location, Phone, and Hours */}
          <Box sx={{ textAlign: "left", mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", justifyContent: "left", mb: 1 }}
            >
              <LocationOnIcon sx={{ mr: 1, color: "#2196f3" }} />{" "}
              {store.location}
            </Typography>
            {store.phone && (
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", justifyContent: "left", mb: 1 }}
              >
                <PhoneIcon sx={{ mr: 1, color: "#2196f3" }} /> {store.phone}
              </Typography>
            )}
            {store.hours && (
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", justifyContent: "left" }}
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
                textAlign: "left",
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
