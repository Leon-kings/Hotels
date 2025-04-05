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
import Service from "./pages/service/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/A-7483-783/34" />
            <Route element={<Booking />} path="/B-7839-283/34" />
            <Route element={<Service />} path="/S-6832-342/34" />
            <Route element={<RoomsServices />} path="/R-8763-327/34" />
            <Route element={<OurTeam />} path="/O-2973-342/34" />
            <Route element={<Testimony />} path="/T-8732-452/34" />
          </Routes>{" "}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
