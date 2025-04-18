import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Booking } from "../../components/booking/Book";
import { About } from "../about/About";
import Service from "../service/Service";
import { RoomsServices } from "../services/RoomServices";
import { LuxuryHotel } from "../../components/videos/Video";
import { Testimony } from "../testimony/Testimony";
import { OurTeam } from "../our team/OurTeam";
import { ContactSection } from "../contact/Contact";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full">
          <Booking />
        </div>
        <div className="w-full">
          <About />
        </div>
        <div className="w-full">
          <Service />
        </div>
        <div className="w-full">
          <RoomsServices />
        </div>
        <div className="w-full">
          <LuxuryHotel />
        </div>
        <div className="w-full">
          <Testimony />
        </div>
        {/* <div className="w-full">
          <OurTeam />
        </div> */}
        <div className="w-full">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
