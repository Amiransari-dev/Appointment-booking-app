import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import RippleGrid from "./components/RippleGrid";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* 🔥 FULL SCREEN BACKGROUND */}
      <div className="fixed inset-0 -z-10">
  <RippleGrid
    enableRainbow={true}
    gridColor="#f3be24"
    rippleIntensity={0.04}
    gridSize={11}
    gridThickness={12}
    fadeDistance={5}
    vignetteStrength={5}
    glowIntensity={0.2}
    opacity={0.45}
    gridRotation={0}
    mouseInteraction
    mouseInteractionRadius={0.8}
  />
</div>
      <div className="relative z-10 mx-4 sm:mx-[10%]">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
