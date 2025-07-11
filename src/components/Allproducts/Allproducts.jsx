import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import isValidImageUrl from "../../utils/imageValidator";
import useBeautyProducts from "./hooks/useProducts";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const placeholderImage = "/placeholder.jpg";

const ProductsCards = () => {
  const { products, loading } = useBeautyProducts();

  if (loading) return <Typography textAlign="center">Loading...</Typography>;

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: "20px 40px" }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Handpicked Beauty Products for You
        </Typography>

        <Grid container spacing={3}>
          {products
            .filter((product) => isValidImageUrl(product.image))
            .map((product) => {
              const price = parseFloat(product.price) || 0;
              const originalPrice = price > 0 ? price + price * 0.2 : price;
              const discount =
                price > 0 ? ((originalPrice - price) / originalPrice) * 100 : 0;

              return (
                <Grid item xs={12} sm={6} md={3} lg={2.4} key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{
                        height: 320,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: 2,
                        borderRadius: 2,
                        transition: "0.3s",
                        width: "300px",
                        marginLeft: "20px",
                        "&:hover": { transform: "scale(1.03)" },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={
                          isValidImageUrl(product.image)
                            ? product.image
                            : placeholderImage
                        }
                        alt={product.title}
                        sx={{
                          height: 160,
                          objectFit: "contain",
                          padding: 2,
                        }}
                      />
                      <CardContent
                        sx={{
                          padding: "10px 16px",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight="500"
                          sx={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            minHeight: "42px",
                            color: "#000",
                          }}
                        >
                          {product.title}
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography fontWeight="bold" color="black">
                            ₹{price.toFixed(2)}
                          </Typography>
                          {discount > 0 && (
                            <>
                              <Typography
                                variant="body2"
                                sx={{
                                  textDecoration: "line-through",
                                  color: "#888",
                                }}
                              >
                                ₹{originalPrice.toFixed(2)}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="green"
                                fontWeight="bold"
                              >
                                {Math.round(discount)}% off
                              </Typography>
                            </>
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsCards;
