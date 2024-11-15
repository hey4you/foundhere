import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  CardMedia,
} from "@mui/material";

const SouvenirDetails = ({ souvenir }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: "auto", boxShadow: 3 }}>
      {/* Souvenir Images */}
      <CardMedia
        component="img"
        alt="Souvenir Image"
        height="400"
        image={souvenir.images[0]} // Assuming images are provided as an array
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        {/* Souvenir Title and Verified Tag */}
        <Typography variant="h4" component="div" gutterBottom>
          {souvenir.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" color="textSecondary">
            {souvenir.location}
          </Typography>
          <Chip
            label={souvenir.type}
            color={souvenir.type === "Verified" ? "primary" : "secondary"}
          />
        </Box>

        {/* Souvenir Description */}
        <Typography variant="body2" color="textSecondary" paragraph>
          {souvenir.description}
        </Typography>

        {/* Souvenir Additional Info */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              <strong>Phone:</strong> {souvenir.phone}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              <strong>Opening Hours:</strong> {souvenir.openingHours}
            </Typography>
          </Grid>
        </Grid>

        {/* Souvenir Images */}
        <Box mt={2} display="flex" gap={2}>
          {souvenir.images.slice(1).map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              alt={`Souvenir Image ${index + 2}`}
              height="150"
              image={image}
              sx={{ objectFit: "cover", width: "100%" }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

// Example Usage
const souvenirData = {
  name: "Handmade Wooden Doll",
  description:
    "A handcrafted wooden doll from the local artisans, each one is unique and made with love.",
  location: "Artisan Market, Kyoto, Japan",
  phone: "+81 90-1234-5678",
  openingHours: "Mon-Sat: 10:00 AM - 6:00 PM",
  type: "Verified", // 'Verified' or 'Community'
  images: [
    "https://example.com/image1.jpg", // Main image
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ],
};

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <SouvenirDetails souvenir={souvenirData} />
    </div>
  );
}
