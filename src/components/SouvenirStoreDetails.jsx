import { Button, Typography, Card, CardMedia, Grid } from "@mui/material";
import PropTypes from "prop-types";

const SouvenirStoreDetails = ({ store, onBack }) => {
  return (
    <Card sx={{ p: 3, maxWidth: 500, mx: "auto", boxShadow: 3 }}>
      {/* Back Button */}
      {onBack && (
        <Button
          onClick={onBack}
          sx={{
            mb: 2,
            color: "#22333B",
          }}
        >
          &larr; Back to List
        </Button>
      )}

      {/* Store Name */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        {store.name}
      </Typography>

      {/* Store Location, Phone, and Hours */}
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        📍 {store.location}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        📞 {store.phone}
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        🕒 {store.hours}
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ mt: 2, fontStyle: "italic" }}>
        {store.description}
      </Typography>

      {/* Display Store Images in a Grid */}
      <Grid container spacing={1} sx={{ mt: 2 }}>
        {store.images.map((img, index) => (
          <Grid item xs={4} key={index}>
            <CardMedia
              component="img"
              image={img}
              alt={`${store.name} ${index + 1}`}
              sx={{
                width: "100%",
                height: "80px",
                borderRadius: 1,
                boxShadow: 1,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

// Define prop types
SouvenirStoreDetails.propTypes = {
  store: PropTypes.object.isRequired,
  onBack: PropTypes.func, // Optional prop for the back button
};

export default SouvenirStoreDetails;
