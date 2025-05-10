"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-[70px]" />

      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full flex justify-between items-center py-6 px-4 md:px-8 lg:px-[120px] transition-all duration-300 fixed top-0 left-0 z-50 bg-[#F9F8EB]"
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/home" className="rounded-full overflow-hidden">
            <Image
              src="/logo_pakuwon.svg"
              alt="Logo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isScrolled ? 1 : 1 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:flex space-x-6 md:space-x-[30px] lg:space-x-[50px] text-black"
        >
          <Link href="/listing" className="hover:text-gray-500">Listing</Link>
          <Link href="/facility" className="hover:text-gray-500">Fasilitas</Link>
          <Link href="/faq" className="hover:text-gray-500">FAQ</Link>
          <Link href="/about" className="hover:text-gray-500">Tentang Kami</Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden z-[60]">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden fixed top-[70px] left-0 right-0 bg-[#F9F8EB] text-black flex flex-col items-center space-y-6 py-8 z-40"
          >
            <Link href="/listing" className="hover:text-gray-500" onClick={toggleMenu}>Listing</Link>
            <Link href="/facility" className="hover:text-gray-500" onClick={toggleMenu}>Facility</Link>
            <Link href="/faq" className="hover:text-gray-500" onClick={toggleMenu}>FAQ</Link>
            <Link href="/about" className="hover:text-gray-500" onClick={toggleMenu}>About Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
