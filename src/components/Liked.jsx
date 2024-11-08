import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import SouvenirStoreDetails from "./SouvenirStoreDetails";

const Liked = () => {
  const likedStores = [
    {
      id: 1,
      name: "Traditional Tea Sets Anzuri",
      location: " 123 Shibuya, Tokyo",
      phone: " +81 123-456-7890",
      description: "A wonderful place to find authentic souvenirs!",
      hours: " 10am - 8pm",
      images: [
        "https://lh5.googleusercontent.com/p/AF1QipMtCNyKc-aTLUAXVOyUTCloYFfrrJSmGpwa1sME=w390-h262-n-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipOADK5eAdt0SVVLXY2iLDZoxsT8C-KZWM9TJ3-q=w195-h130-n-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipN6gXHNtz4YRRU5lVbnLEsxYPFAJzYhqNxuNTvN=w129-h130-n-k-no",
      ],
    },
    {
      id: 2,
      name: "Tokyo Souvenir Mimoto",
      location: " 456 Akihabara, Tokyo",
      phone: " +81 098-765-4321",
      description: "Find the best souvenirs here!",
      hours: " 11am - 7pm",
      images: [
        "https://via.placeholder.com/300x180",
        "https://via.placeholder.com/300x180",
      ],
    },
  ];

  const [selectedStore, setSelectedStore] = useState(null);

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  // Pass this function to go back to the list view
  const handleBack = () => {
    setSelectedStore(null);
  };

  return (
    <Box>
      {selectedStore ? (
        <SouvenirStoreDetails store={selectedStore} onBack={handleBack} />
      ) : (
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center", my: 2 }}>
            Liked Souvenir Places
          </Typography>
          <List>
            {likedStores.map((store) => (
              <Box key={store.id}>
                <ListItem button onClick={() => handleStoreClick(store)}>
                  <ListItemText
                    primary={store.name}
                    secondary={store.location}
                  />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Liked;
