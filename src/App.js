import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./components/RequireAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/purchase/:id" element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </>
  );
}
AOS.init();
export default App;
