import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Body from "./components/Body/Body";
import Photos from "./components/photos/Photos";
import ProductsCards from "./components/Allproducts/Allproducts";
import SkinCards from "./components/Skincare/Skincare";
import ProductDetail from "./pages/ProductDetails/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Dashboard/>}/>
          <Route path="/body" element={<Body/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/allproducts" element={<ProductsCards/>}/>
          <Route path="/skin" element={<SkinCards/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
