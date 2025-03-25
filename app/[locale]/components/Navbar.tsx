"use client";
import { useState, useEffect, useRef } from "react";
import LanguageSwitcher from "@/app/[locale]/components/LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer when clicking outside in mobile view
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth < 1024 && isOpen && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="drawer" ref={drawerRef}>
      {/* Keep the input and checkbox state in sync */}
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />

      <div className="drawer-content fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-base-100 shadow-sm">
        {/* Left: Drawer Toggle Button (Mobile) */}
        <label htmlFor="nav-drawer" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
          </svg>
        </label>

        {/* Center: Logo */}
        <a className="text-xl font-bold">Satyanveshana Mandali</a>

        {/* Right: Some Actions (Optional) */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side">
        {/* Overlay to close the drawer */}
        <label htmlFor="nav-drawer" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>

        <ul className="menu p-4 w-64 min-h-full bg-base-100 shadow-lg">
          <li><a href="#">Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </div>
    </div>
  );
}
