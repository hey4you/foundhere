import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SouvenirStoreDetails from "./SouvenirStoreDetails";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import LiquorIcon from "@mui/icons-material/Liquor";
import Chip from "@mui/material/Chip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Liked = () => {
  const likedByYou = [
    {
      id: 1,
      name: "Traditional Tea Sets Anzuri",
      location: "123 Shibuya, Tokyo",
      description: "Authentic Japanese tea sets",
      phone: "+12 345 343 44 15",
      icon: <TempleBuddhistIcon />,
    },
    {
      id: 2,
      name: "Tokyo Souvenir Mimoto",
      location: "456 Akihabara, Tokyo",
      description: "Best souvenirs in Tokyo",
      icon: <StorefrontIcon />,
    },
    {
      id: 3,
      name: "HIto Dress",
      location: "53 Akihabara, Tokyo",
      description: "Beautiful traditional kimonos",
      icon: <DryCleaningIcon />,
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOZ44YegxvN8SVFkN06gamqPNzFPmEu2as4HpA=w171-h171-n-k-no",
      image2:
        "https://lh5.googleusercontent.com/p/AF1QipOZ44YegxvN8SVFkN06gamqPNzFPmEu2as4HpA=w171-h171-n-k-no",
    },
  ];

  const likedByFriends = [
    {
      id: 4,
      name: "HSLU Merch",
      location: "1 Surstoffi, Rotkreuz",
      description: "High-quality samurai swords",
      icon: <StorefrontIcon />,
    },
    {
      id: 5,
      name: "Sake Store Fujiwara",
      location: "101 Asakusa, Tokyo",
      description: "Best Sake in the world",
      icon: <LiquorIcon />,
    },
  ];

  const [selectedStore, setSelectedStore] = useState(null);

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  const handleBack = () => {
    setSelectedStore(null);
  };

  const renderCard = (store) => (
    <Card
      key={store.id}
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        bgcolor: "#778DA9",
        color: "white",
        borderRadius: "20px",
        mb: 1,
        p: 2,
        cursor: "pointer",
        "&:hover": {
          boxShadow: 10,
        },
      }}
      onClick={() => handleStoreClick(store)}
    >
      <Avatar
        sx={{
          bgcolor: "#374151",
          width: 56,
          height: 56,
          mr: 2,
        }}
      >
        {store.icon}
      </Avatar>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {store.name}
        </Typography>
        <Typography variant="body2" color="withe">
          {store.location}
        </Typography>
        <Typography variant="body2" color="withe">
          {store.description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: 3 }}>
      {selectedStore ? (
        <SouvenirStoreDetails store={selectedStore} onBack={handleBack} />
      ) : (
        <>
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
            Liked Souvenir
          </Typography>

          <Chip
            icon={<FavoriteBorderIcon />}
            label="Liked by You!"
            sx={{
              mb: 3,
              fontWeight: "bold",
              fontSize: "14px",
            }}
            color="success"
          ></Chip>

          <Grid container spacing={2}>
            {likedByYou.map(renderCard)}
          </Grid>

          {/* Liked by Your Friends */}
          <Chip
            icon={<FavoriteBorderIcon />}
            label="Liked by yor friends!"
            sx={{
              mb: 3,
              mt: 3,
              fontWeight: "bold",
              fontSize: "14px",
            }}
            color="info"
            variant="outlined"
          ></Chip>

          <Grid container spacing={2}>
            {likedByFriends.map(renderCard)}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Liked;
