"use client"
import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';

// Define types for props if any; this component doesn't take props for now
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  // State to manage which tab is active in the booking form
  const [activeTab, setActiveTab] = useState<string>('Airport Parking');

  const tabs = [
    'Airport Parking',
    'Hotel & Parking',
    'Lounge',
    'Airport Transfer',
  ];

 
  const primaryGreen = '#8CC63F'; 
  const darkGreenGradientFrom = '#1A4D2E'; 
  const darkGreenGradientTo = '#2A623D';  
  const whatsappColor = '#25D366';
  const phoneColor = '#FFA500'; 

  return (
    <div className="relative bg-white"> 
      <div
        className="relative text-white px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-32 md:pb-40" 
        style={{
          background: `linear-gradient(to bottom, ${darkGreenGradientFrom}, ${darkGreenGradientTo})`,
        }}
      >
        <div className="container mx-auto max-w-screen-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Affordable & Secure <br />
            Heathrow Airport Parking
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            Discover secure, budget-friendly parking at Heathrow Airport. Enjoy
            convenient options that maximize your savings and give you peace of
            mind, all while ensuring a hassle-free travel experience.
          </p>
        </div>
      </div>

      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 space-y-3 mr-3 sm:mr-4 md:mr-5">
        <a
          href="https://wa.me/yourphonenumber" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white shadow-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: whatsappColor }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:yourphonenumber" // Replace with your phone number
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white shadow-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: phoneColor }}
          aria-label="Call us"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>

      
      <div className="relative px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 z-20 pb-10"> 
        <div className="container mx-auto max-w-screen-xl bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8">
          {/* Tabs */}
          <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 sm:px-5 text-sm sm:text-base font-medium rounded-md border transition-all duration-200 focus:outline-none
                  ${
                    activeTab === tab
                      ? 'text-white border-transparent shadow-md' 
                      : 'text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400' 
                  }
                `}
                style={{
                  backgroundColor: activeTab === tab ? primaryGreen : 'white',
                  borderColor: activeTab === tab ? primaryGreen : '#D1D5DB', 
                  color: activeTab === tab ? 'white' : primaryGreen,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Airport Parking' && (
            <form onSubmit={(e) => e.preventDefault()}> 
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[2fr,2fr,2fr,1fr] gap-4 md:gap-6 items-end">
                {/* Airport Select */}
                <div className="flex flex-col">
                  <label htmlFor="airport" className="text-sm font-medium text-gray-700 mb-1">Airport</label>
                  <div className="relative">
                    <select
                      id="airport"
                      className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 focus:border-green-500 bg-gray-50 text-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Airport</option>
                      <option value="lhr-t2">Heathrow Terminal 2</option>
                      <option value="lhr-t3">Heathrow Terminal 3</option>
                      <option value="lhr-t4">Heathrow Terminal 4</option>
                      <option value="lhr-t5">Heathrow Terminal 5</option>
                    </select>
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dateFrom" className="text-sm font-medium text-gray-700 mb-1">Date From</label>
                  <div className="flex space-x-2">
                    <div className="relative flex-grow">
                      <input type="text" id="dateFrom" placeholder="We, 14/08/2024" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-green-500 focus:border-green-500 bg-gray-50 text-sm appearance-none" />
                    </div>
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 focus:border-green-500 bg-gray-50 text-sm pr-8">
                        <option>12:00</option>
                        <option>13:00</option>
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dateTo" className="text-sm font-medium text-gray-700 mb-1">Date To</label>
                  <div className="flex space-x-2">
                    <div className="relative flex-grow">
                      <input type="text" id="dateTo" placeholder="We, 21/08/2024" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-green-500 focus:border-green-500 bg-gray-50 text-sm appearance-none" />
                    </div>
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 focus:border-green-500 bg-gray-50 text-sm pr-8">
                        <option>12:00</option>
                        <option>13:00</option>
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 px-4 rounded-md shadow-md hover:opacity-90 transition-opacity text-sm sm:text-base mt-4 md:mt-0" // Added mt for mobile spacing
                  style={{ backgroundColor: primaryGreen }}
                >
                  Search Parkin Space
                </button>
              </div>
            </form>
          )}
           {activeTab !== 'Airport Parking' && (
             <div className="text-center text-gray-500 py-10">
                Content for {activeTab} will be here.
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;