import React from 'react';
import Image from 'next/image';

// Define the structure for each logo's data
interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
  width: number; // Intrinsic width of the source image
  height: number; // Intrinsic height of the source image
  tailwindHeightClass: string; // Tailwind class to control displayed height
}

// Data for the logos with increased display heights
const partnerLogosData: PartnerLogo[] = [
  {
    id: 'google',
    src: '/images/google.png', // Ensure this path is correct
    alt: 'Google',
    width: 300, // Intrinsic width of your google.png
    height: 100, // Intrinsic height of your google.png
    // Increased height to match Tripadvisor for better visibility
    tailwindHeightClass: 'h-15 sm:h-28', // Approx 48px / 64px displayed height
  },
  {
    id: 'trustpilot',
    src: '/images/trustpilot.png', // Ensure this path is correct
    alt: 'Trustpilot',
    width: 290, // Intrinsic width of your trustpilot.png
    height: 70,  // Intrinsic height of your trustpilot.png
    // Increased height to match Tripadvisor for better visibility
    tailwindHeightClass: 'h-15 sm:h-28', // Approx 48px / 64px displayed height
  },
  {
    id: 'yelp',
    src: '/images/yelp.png', // Ensure this path is correct
    alt: 'Yelp',
    width: 165, // Intrinsic width of your yelp.png
    height: 70,  // Intrinsic height of your yelp.png
    tailwindHeightClass: 'h-11 sm:h-14', // Approx 44px / 56px displayed height
  },
  {
    id: 'tripadvisor',
    src: '/images/trip.png', // Ensure this path is correct
    alt: 'Tripadvisor',
    width: 800, // Intrinsic width of your trip.png
    height: 90,  // Intrinsic height of your trip.png
    tailwindHeightClass: 'h-12 sm:h-20', // Approx 48px / 64px displayed height
  },
];

const PartnerLogosSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9F8] py-8 sm:py-12"> {/* Slightly increased padding */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Increased max-width */}
        <div className="flex flex-wrap justify-center items-center
                        gap-x-12 sm:gap-x-14 md:gap-x-16
                        gap-y-8 sm:gap-y-10"> {/* Slightly increased gaps */}
          {partnerLogosData.map((logo) => (
            <div key={logo.id} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}   // Intrinsic width of the source image
                height={logo.height} // Intrinsic height of the source image
                className={`${logo.tailwindHeightClass} w-auto object-contain`}
                // Consider preloading if these are above the fold, e.g., the largest one or first few.
                // priority={logo.id === 'tripadvisor' || logo.id === 'google'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;