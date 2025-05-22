import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  const primaryGreen = '#8CC63F'; 

  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg" 
              alt="Our team working in the office"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              priority
            />
          </div>




          <div className="relative py-4">
         


            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-[-50px] h-[250px] opacity-[0.10] -z-10" // Slightly adjusted opacity
              style={{
                backgroundColor: primaryGreen,
                borderRadius: '50% / 30%',
                filter: 'blur(60px)', 
              }}>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
              About Us
            </h1>
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  RELIABLE & SECURE PARKING SOLUTIONS
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  At Budget Parking Heathrow, we prioritize your peace of mind with
                  secure and convenient parking options. Our facilities are equipped
                  with 24/7 CCTV, secure fencing, and regular patrols, ensuring your
                  vehicle is safe while you travel.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  AFFORDABLE & CUSTOMER-FOCUSED SERVICES
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We believe in providing budget-friendly parking without sacrificing
                  quality. With options like Park and Ride and Meet and Greet, we
                  cater to various needs and budgets, all backed by exceptional
                  customer service to make your experience seamless from start to
                  finish.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-10">
              <Link
                href="/parking-options"
                className="inline-block text-white font-medium py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition-opacity text-sm sm:text-base"
                style={{ backgroundColor: primaryGreen }}>
                Our Parking Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;