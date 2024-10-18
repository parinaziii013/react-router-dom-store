import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Home, About, Products, Footer, ProductDetails } from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/details/:id" element={<ProductDetails />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
