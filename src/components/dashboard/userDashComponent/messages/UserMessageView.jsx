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
  ShoppingCart,
  Message,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserMessageData } from "./UserMessage";

export const UserMessageView = () => {
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
      icon: <DashboardIcon className="size-6" />,
      link: "/U-23-Dash-32793",
    },
    {
      title: "Users",
      icon: <People className="size-6" />,
      link: "/UVM-7289-2782",
    },
    {
      title: "Bookings",
      icon: <ShoppingCart className="size-6" />,
      link: "/UBV-7929-2092",
    },
    {
      title: "Messages",
      icon: <Message className="size-6" />,
      link: "/UMV-7988-0023",
    },
    {
      title: "Analytics",
      icon: <PieChart className="size-6" />,
      submenu: [
        { title: "Charts", link: "/GD-2761-823" },
        { title: "Reports", link: "" },
      ],
    },
    {
      title: "Calendar",
      icon: <CalendarToday className="size-6" />,
      link: "/C-6784-873",
    },
    {
      title: "Settings",
      icon: <Settings className="size-6" />,
      submenu: [
        { title: "Profile", link: "/PF-5638-893" },
        { title: "Security", link: "" },
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
          <Button
            onClick={toggleMenu}
            className="text-white hover:bg-gray-700 p-2 rounded-lg"
            aria-label={isCollapsed ? "Open menu" : "Close menu"}
          >
            {isCollapsed ? (
              <Menu className="size-6 text-green-500" />
            ) : (
              <Close className="size-6 text-red-500" />
            )}
          </Button>
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
                <Link to={item.link}>
                  <div className="text-gray-300">{item.icon}</div>
                </Link>

                {!isCollapsed && (
                  <>
                    <Link to={item.link}>
                      <div className="ml-3 text-sm">{item.title}</div>
                    </Link>
                    {item.submenu && (
                      <span className="ml-auto text-gray-400 transition-transform">
                        {openSubMenu === item.title ? (
                          <ExpandMore className="size-6" />
                        ) : (
                          <ChevronRight className="size-6" />
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
                    <Link key={subItem.index} to={subItem.link}>
                      <Button
                        onClick={() => isMobile && setIsCollapsed(true)}
                        className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded-lg"
                      >
                        {subItem.title}
                      </Button>
                    </Link>
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
            <Menu className="size-6" />
          </button>
          <UserMessageData />
        </div>
      </main>
    </div>
  );
};
