import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../components/nav/Navbar";
import { Footer } from "../../components/footer/Footer";
import NotFound from "../not found/NotFound";
import React from "react";

export const Universal = () => {
  const location = useLocation();
  const is404 = location.state?.is404;

  return (
    <div className="w-full min-h-screen">
      {/* Header/Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-[144px] lg:pt-[168px]">{is404 ? <NotFound /> : <Outlet />}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
