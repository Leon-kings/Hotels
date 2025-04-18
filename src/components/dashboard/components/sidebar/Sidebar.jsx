import React, { useState, useEffect } from "react";
import {
  People,
  Settings,
  PieChart,
  CalendarToday,
  ExpandMore,
  ChevronRight,
  Menu,
  Close,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { Analytics } from "../Analytics";
import LineGraph from "../charts/LineGraph";
import { MessagesSection } from "../messageContainer";
import { BookingChart } from "../charts/BookingChart";
import { PieChartData } from "../charts/PieChart";

export const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      // Auto-collapse menu on mobile
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardIcon fontSize="small" />,
      link: "/dashboard",
    },
    {
      title: "Users",
      icon: <People fontSize="small" />,
      link: "/users",
    },
    {
      title: "Analytics",
      icon: <PieChart fontSize="small" />,
      submenu: [
        { title: "Charts", link: "/analytics/charts" },
        { title: "Reports", link: "/analytics/reports" },
      ],
    },
    {
      title: "Calendar",
      icon: <CalendarToday fontSize="small" />,
      link: "/calendar",
    },
    {
      title: "Settings",
      icon: <Settings fontSize="small" />,
      submenu: [
        { title: "Profile", link: "/settings/profile" },
        { title: "Security", link: "/settings/security" },
      ],
    },
  ];

  const toggleMenu = () => setIsCollapsed(!isCollapsed);

  const toggleSubMenu = (title) => {
    const menuItem = menuItems.find((item) => item.title === title);
    if (menuItem?.submenu) {
      setOpenSubMenu(openSubMenu === title ? null : title);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Mobile Overlay */}
      {!isCollapsed && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen fixed lg:relative z-30
        ${
          isCollapsed
            ? "w-16 -translate-x-full lg:translate-x-0"
            : "w-64 lg:w-1/4 translate-x-0"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:bg-gray-700 p-2 rounded-lg"
            aria-label={isCollapsed ? "Open menu" : "Close menu"}
          >
            {isCollapsed ? (
              <Menu fontSize="small" />
            ) : (
              <Close fontSize="small" />
            )}
          </button>
        </div>

        <div className="p-4 flex justify-center border-b border-gray-700">
          {isCollapsed ? "⚡" : "Admin Panel"}
        </div>

        <nav className="mt-6 overflow-y-auto h-[calc(100vh-120px)]">
          {menuItems.map((item) => (
            <div key={item.title}>
              <div
                onClick={() => {
                  if (!item.submenu && item.link) {
                    // Close menu when clicking non-submenu items on mobile
                    if (isMobile) setIsCollapsed(true);
                  }
                  toggleSubMenu(item.title);
                }}
                className={`flex items-center p-3 mx-2 rounded-lg cursor-pointer
                  ${
                    openSubMenu === item.title
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
              >
                <span className="text-gray-300">{item.icon}</span>

                {!isCollapsed && (
                  <>
                    <span className="ml-3 text-sm">{item.title}</span>
                    {item.submenu && (
                      <span className="ml-auto text-gray-400 transition-transform">
                        {openSubMenu === item.title ? (
                          <ExpandMore fontSize="small" />
                        ) : (
                          <ChevronRight fontSize="small" />
                        )}
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Dropdown Content */}
              {!isCollapsed && item.submenu && openSubMenu === item.title && (
                <div className="ml-4 pl-6 border-l-2 border-gray-600">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.title}
                      href={subItem.link}
                      onClick={() => isMobile && setIsCollapsed(true)}
                      className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded-lg"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main
        className={`flex-1 overflow-auto bg-gray-100 transition-all duration-300
        ${isCollapsed ? "lg:ml-6" : "lg:ml-6"}`}
      >
        <div className="p-4 lg:p-6">
          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden mb-4 p-2 bg-gray-200 rounded-lg"
          >
            <Menu fontSize="small" />
          </button>
          <Analytics />
          <LineGraph/>
          <BookingChart/>
          <PieChartData/>
        </div>
      </main>
    </div>
  );
};
