import React from 'react';
import Image from 'next/image';

interface Airport {
  id: string;
  name: string;
  ImageUrl: string; 
}

const airportsData: Airport[] = [
  { id: 'birmingham', name: 'Birmingham Airport', ImageUrl: '/images/airport 1.jpg' },
  { id: 'bristol', name: 'Bristol Airport', ImageUrl: '/images/airport 2.jpg' },
  { id: 'east-midlands', name: 'East Midlands Airports', ImageUrl: '/images/airport 3.jpg' },
  { id: 'edinburgh', name: 'Edinburgh Airport', ImageUrl: '/images/airport 4.jpg' },
  { id: 'gatwick', name: 'Gatwick Airport', ImageUrl: '/images/airport 5.jpg' },
  { id: 'glasgow', name: 'Glasgow Airport', ImageUrl: '/images/airport 6.jpg' },
  { id: 'heathrow', name: 'Heathrow Airport', ImageUrl: '/images/airport 7.jpg' },
  { id: 'liverpool', name: 'Liverpool Airport', ImageUrl: '/images/airport 8.jpg' },
  { id: 'luton', name: 'Luton Airport', ImageUrl: '/images/airport 9.jpg' },
  { id: 'manchester', name: 'Manchester Airport', ImageUrl: '/images/airport 10.jpg' },
  { id: 'southend', name: 'Southend Airport', ImageUrl: '/images/airport 11.jpg' },
  { id: 'stansted', name: 'Stansted Airport', ImageUrl: '/images/airport 12.jpg' },
];

const Card = () => {
  return (
    <section className="bg-[#F8F9F8] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Where To Find Us
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm text-gray-600 sm:text-base">
            Select Your Heathrow Terminal&lsquo; Compare Parking Options&lsquo; Prices&lsquo; And Services Across A Range Of Budget-Friendly Car Parks. Don&apos;t See The Service You Need? We&apos;re Constantly Expanding&apos; And New Parking Options Will Be Available Soon To Meet Your Needs. Stay Tuned For More Additions!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {airportsData.map((airport) => (
            <div
              key={airport.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="relative w-full h-40"> 
                <Image
                  src={airport.ImageUrl}
                  alt={`Photo of ${airport.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="py-5 px-4"> 
                <h3 className="text-md font-semibold text-gray-800 text-center">
                  {airport.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;