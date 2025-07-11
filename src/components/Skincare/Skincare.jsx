import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import useSkincareProducts from "./hooks/useSkincareProducts";

const SkinCards = () => {
  const { products, loading } = useSkincareProducts();
  if (loading) return <Typography textAlign="center">Loading...</Typography>;

  return (
    <Box p={4}>
      <Typography variant="h5" mb={3}>Skincare Products</Typography>
      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={3} key={p.id}>
            <Card sx={{ height: 360, display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={p.thumbnail}
                alt={p.title}
                sx={{ height: 160, objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body1" noWrap>{p.title}</Typography>
                <Typography fontWeight="bold">₹{p.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkinCards;
