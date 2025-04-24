import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../components/nav/Navbar";
import { Footer } from "../../components/footer/Footer";
import NotFound from "../not found/NotFound";
import React from "react";

export default function Layout() {
  const location = useLocation();
  const is404 = location.state?.is404;

  return (
    <div className="app-container">
      {/* Header/Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main>{is404 ? <NotFound /> : <Outlet />}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
