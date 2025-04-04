import React from "react";
import "./App.css";
import { Navbar } from "./components/nav/Navbar";
import { Hero } from "./components/hero/Hero";
import { Booking } from "./components/booking/Book";
import { About } from "./pages/about/About";
import { RoomsServices } from "./pages/services/RoomServices";
import { LuxuryHotel } from "./components/videos/Video";
import { Testimony } from "./pages/testimony/Testimony";
import { OurTeam } from "./pages/our team/OurTeam";
import { Footer } from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <About />
      <RoomsServices />
      <LuxuryHotel />
      <Testimony />
      <OurTeam />
      <Footer />
    </>
  );
}
