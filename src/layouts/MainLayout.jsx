import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ComponentNavbar from "../components/componentNavbar.jsx";
import ContactPreview from "../components/ContactPreview.jsx";

function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? <Navbar /> : <ComponentNavbar />}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <ContactPreview />
    </>
  );
}

export default MainLayout;
