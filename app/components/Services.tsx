import React from 'react';
import { ClockIcon as ClockSolidIcon } from '@heroicons/react/24/solid';


const ParkingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`bg-white text-[#2A4029] flex items-center justify-center rounded-lg shadow-sm ${className}`}
  >
    <span className="text-[28px] font-bold">P</span> 
  </div>
);


const AirportTransferCombinedIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-11 h-11 text-white absolute bottom-[2px] left-[0px]" 
    >
      <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
      <path
        fillRule="evenodd"
        d="M1.5 6.375c0-.39.31-.704.697-.737A21.755 21.755 0 0 1 12 5.25c4.406 0 8.554.646 12.303.475.39-.033.697.28.697.676v1.077a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V6.375Zm19.5 4.125H3V15.75a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V10.5Z"
        clipRule="evenodd"
      />
      <path d="M5.25 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.75 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7 text-white absolute top-[-2px] right-[-1px]">
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"/>
      <path d="M12 2.25c-.303 0-.592.034-.872.096a sıralı .75.75 0 0 0-.61.744L10.5 4.5h3l-.018-1.41a.75.75 0 0 0-.61-.744A5.23 5.23 0 0 0 12 2.25Z" />

    </svg>
  </div>
);


const servicesData = [
  {
    id: 1,
    icon: <ClockSolidIcon className="h-14 w-14 text-white" />,
    title: 'Long & Short Stay',
    description: 'Flexible Parking Options For Any Trip Duration.',
    isActive: true, 
  },
  {
    id: 2,
    icon: <AirportTransferCombinedIcon className="h-14 w-14" />,
    title: 'Airport Transfer',
    description: 'Reliable Transport To And From The Airport.',
  },
  {
    id: 3,
    icon: <ParkingIcon className="h-14 w-14" />,
    title: 'Onsite Parking',
    description: 'Prime Parking Spots Within The Airport Premises',
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto"> 
        <h2 className="text-[42px] sm:text-5xl font-extrabold text-black text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-8"> 
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`
                bg-[#2A4029] text-white rounded-2xl p-7 sm:p-8 
                flex flex-col items-center text-center 
                shadow-xl transition-all duration-300 ease-in-out
                ${service.isActive ? 'ring-4 ring-blue-500 ring-offset-4 ring-offset-gray-50' : ''}
              `}
              style={{ minHeight: '280px' }}>
              <div className="mb-6 flex items-center justify-center h-14 w-14"> 
                {service.icon}
              </div>
              <h3 className="text-[22px] font-semibold mb-3 leading-tight"> 
                {service.title}
              </h3>
              <p className="text-[13px] text-gray-300 leading-relaxed px-1"> 
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-12"> 
          <button
            aria-label="Go to service 1"
            className="w-2.5 h-2.5 bg-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ring-offset-gray-50"
          ></button>
          <button
            aria-label="Current service: service 2" 
            className="w-2.5 h-2.5 bg-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ring-offset-gray-50"
          ></button>
          <button
            aria-label="Go to service 3"
            className="w-2.5 h-2.5 bg-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ring-offset-gray-50"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;