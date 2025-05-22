// components/Footer.tsx
import React from "react";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#173819] text-white text-sm pt-10">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-8 border-b border-green-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">Subscribe Our Newsletter</h2>
            <p className="text-gray-300 text-xs">
              Know more about our Privacy Policy - you can easily unsubscribe any time!
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="px-4 py-2 rounded-l-md text-gray-800 w-full md:w-72 focus:outline-none"
            />
            <button className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded-r-lg">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="mb-4">
            <h1 className="text-xl font-bold">Budget <br />Parking</h1>
          </div>
          <p className="text-gray-300 text-xs">
            Budget Parking Heathrow offers secure, affordable, and convenient parking solutions
            tailored to your needs. Enjoy peace of mind while you travel with our 24/7 support
            and a range of budget-friendly options.
          </p>
        </div>

        {/* Airport List */}
        <div>
          <h3 className="font-semibold mb-4">Airport</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Gatwick Airport",
              "Heathrow Airport",
              "Birmingham Airport",
              "Manchester Airport",
              "Stansted Airport",
              "Luton Airport",
              "Bristol Airport",
              "Edinburgh Airport",
              "Glasgow Airport",
              "London City Airport",
            ].map((airport) => (
              <li key={airport} className="flex items-center gap-1">
                <FaPlane className="text-white" /> {airport}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Reading */}
        <div>
          <h3 className="font-semibold mb-4">Important Reading</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "About Us",
              "Blog",
              "Contact Us",
              "Privacy Policy",
              "Terms & Condition",
              "Cancellations & Refund",
              "FAQ’s",
            ].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Airport Parking",
              "Meet And Greet Parking",
              "Park And Ride",
              "Onsite Parking",
              "Long & Short Stay",
              "Premium & Valet Parking",
              "Hotel & Parking",
              "Airport Lounges",
              "Airport Transfer",
            ].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-4">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-200 text-xs">
    {/*
      - Changed py-6 to py-3 for a slimmer bar, closer to the image.
      - Changed text-gray-300 to text-gray-200 for slightly brighter text if needed,
        but text-gray-300 is also fine.
    */}
    <p className="text-center md:text-left">
      {/*
        - Removed 'flex justify-center' as positioning is handled by the parent.
        - Added 'text-center md:text-left' for better text alignment:
          centered on small (stacked) screens, left-aligned on medium+ (row) screens.
      */}
      Working Hours : Mon - Sun 24h
    </p>
    <Image
      src="/images/credit img.png"
      alt="Accepted payment methods"
      width={160} /* Adjusted width for a typical payment icon sprite (e.g., 4 icons, each ~40px wide) */
      height={24}  /* Adjusted height to make icons smaller, e.g., 24px tall */
    />
    {/*
      - Changed width and height to more realistic values for small payment icons.
        The original 100x100 would be very large.
        These values (160x24) assume your 'credit img.png' is a horizontal sprite
        of multiple payment logos. Adjust as needed based on your actual image.
      - Improved alt text for accessibility.
    */}
  </div>
  </div>


        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-gray-300 text-xs">
          <p>© 2024 Copyright Heathrow Budget Parking. All Right Reserved</p>
          <div className="flex text-xl text-white gap-10 ">
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
