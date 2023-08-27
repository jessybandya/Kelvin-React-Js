import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nopage from "./pages/No-page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SIgn-in";
import SignUp from "./pages/SIgn-up";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="*" element={<Nopage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
