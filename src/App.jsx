import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import SignInPage from "./pages/SignInPage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
