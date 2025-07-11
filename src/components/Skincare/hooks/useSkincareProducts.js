import { useEffect, useState } from "react";

export default function useSkincareProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkincare() {
      try {
        const res = await fetch("https://dummyjson.com/products/category/skincare?limit=100");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to fetch skincare products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSkincare();
  }, []);

  return { products, loading };
}
