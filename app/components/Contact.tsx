// components/ContactSection.tsx
import React from "react";
import { FaGlobe, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="relative bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg contact.jpg"
          alt="Plane background"
          width={1000}
          height={1000}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Overlay to darken the image slightly */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 md:px-10 grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="text-gray-800">
          <h2 className="text-3xl font-bold mb-2">Need Assistance?</h2>
          <p className="mb-8 text-sm">
            Reach out to our team for any questions or support. We&apos;re here 24/7 to help with your Heathrow parking needs.
          </p>

          <div className="lg:w-1/2 text-gray-800 mb-10 lg:mb-0">
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-5 text-gray-800">How to Reach Us</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center">
                    <FaGlobe className="w-5 h-5 text-[#84B864] mr-3 flex-shrink-0" />
                    <span>www.heathrowbudgetparking.co.uk</span>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="w-5 h-5 text-[#84B864] mr-3 flex-shrink-0" />
                    <span>info@heathrowbudgetparking.co.uk</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhoneAlt className="w-5 h-5 text-[#84B864] mr-3 flex-shrink-0" />
                    <span>+447880333368</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-5 text-gray-800">Why Choose Us?</h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-800">Affordable Rates</h4>
                    <p className="mt-1">
                      Get the best prices for secure and convenient parking at Heathrow.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Convenient Locations</h4>
                    <p className="mt-1">
                      Easily accessible parking options close to the airport 24/7.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Support</h4>
                    <p className="mt-1">
                      Our team is available around the clock to assist with all your parking needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Send A Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
              rows={3}
            />
            <button
              type="submit"
              className="bg-green-500 text-white text-sm px-6 py-2 rounded hover:bg-green-600 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
