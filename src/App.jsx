// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
