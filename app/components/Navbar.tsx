"use client";

import React from 'react';
import { FaUser } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav'; 

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Airport', href: '/airport' },
    { name: 'Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const logoSrc = "/images/header.png";
  const logoAlt = "Heathrow Budget Parking Logo";

  return (
    <div className="w-full bg-white border-t-[5px] border-neutral-700 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[90px]">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={190}
            height={65}
            priority
            className="object-contain"
          />
        </Link>

        <ul className="hidden sm:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-neutral-700 hover:text-[#8CC63F] text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="flex items-center bg-[#8CC63F] hover:bg-[#7BB53A] text-white font-semibold px-5 py-2.5 rounded-md text-base shadow-sm transition-colors duration-200"
            >
              <FaUser className="mr-2 h-4 w-4" />
              LOGIN
            </Link>
          </li>
        </ul>

       
        <div className="sm:hidden"> 
          <MobileNav
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            navLinks={navItems} 
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;