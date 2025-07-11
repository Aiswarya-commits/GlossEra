import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h6">No product data found.</Typography>
        <Button onClick={() => navigate(-1)} variant="contained" sx={{ mt: 2 }}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Card sx={{ width: 1600, boxShadow: 3, borderRadius: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: "contain", p: 2 }}
          />
          <CardContent>
            <i
              class="fa-solid fa-cart-plus fa-2xl"
              style={{
                color: "#74c0fc",
                marginLeft: "1200px",
                marginTop: "40px",
                marginRight:"10px"
              }}
            ></i>
            <i
              class="fa-solid fa-heart fa-2xl"
              style={{ color: "#bf2b33" ,marginLeft:"30px"}}
            ></i>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Price: ₹{product.price.toFixed(2)}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Description: {product.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ProductDetail;
