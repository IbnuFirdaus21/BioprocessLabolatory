import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Announcement from "./pages/Announcement";
import Material from "./pages/Material";

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === "/material";

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/material" element={<Material />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
