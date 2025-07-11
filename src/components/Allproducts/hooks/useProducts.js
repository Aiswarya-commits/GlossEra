import { useEffect, useState } from "react";

export default function useBeautyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    "https://dummyjson.com/products/category/beauty?limit=100",
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=loreal",
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl",
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation",
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara",
  ];

  useEffect(() => {
    const cached = localStorage.getItem("beauty_products");
    if (cached) {
      setProducts(JSON.parse(cached));
      setLoading(false);
      return;
    }

    async function fetchAll() {
      setLoading(true);
      try {
        const results = await Promise.all(
          endpoints.map((url) => fetch(url).then((r) => r.json()))
        );

        const flatProducts = results.flat();

        const allProducts = Array.isArray(flatProducts)
          ? flatProducts
          : flatProducts.map((res) => res.products || res);

        const filtered = allProducts
          .filter(
            (p) =>
              (p.image_link || p.thumbnail) &&
              (p.name || p.title) &&
              (p.price || p.price === 0)
          )
          .map((p, index) => ({
            id: index,
            title: p.title || p.name,
            image: p.image_link || p.thumbnail,
            price: parseFloat(p.price) || 0,
            description: p.description || "No description available.",
          }));

        const limited = filtered.slice(0, 200);
        localStorage.setItem("beauty_products", JSON.stringify(limited)); // ✅ cache
        setProducts(limited);
      } catch (err) {
        console.error("Failed to fetch beauty products", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return { products, loading };
}
