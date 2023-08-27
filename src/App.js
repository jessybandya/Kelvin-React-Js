import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nopage from "./pages/No-page";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
