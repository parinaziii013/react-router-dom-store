import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Home, About, Products } from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
