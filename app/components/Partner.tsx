import React from 'react';
import Image from 'next/image';


interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
  width: number; 
  height: number; 
  tailwindHeightClass: string; 
}


const partnerLogosData: PartnerLogo[] = [
  {
    id: 'google',
    src: '/images/google.png', 
    alt: 'Google',
    width: 300, 
    height: 100, 
    tailwindHeightClass: 'h-15 sm:h-28', 
  },
  {
    id: 'trustpilot',
    src: '/images/trustpilot.png', 
    alt: 'Trustpilot',
    width: 290, 
    height: 70,  
    tailwindHeightClass: 'h-15 sm:h-28', 
  },
  {
    id: 'yelp',
    src: '/images/yelp.png', 
    alt: 'Yelp',
    width: 165, 
    height: 70,  
    tailwindHeightClass: 'h-11 sm:h-14', 
  },
  {
    id: 'tripadvisor',
    src: '/images/trip.png', 
    alt: 'Tripadvisor',
    width: 800, 
    height: 90, 
    tailwindHeightClass: 'h-12 sm:h-20', 
  },
];

const PartnerLogosSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9F8] py-8 sm:py-12"> 
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex flex-wrap justify-center items-center
                        gap-x-12 sm:gap-x-14 md:gap-x-16
                        gap-y-8 sm:gap-y-10">
          {partnerLogosData.map((logo) => (
            <div key={logo.id} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}   
                height={logo.height} 
                className={`${logo.tailwindHeightClass} w-auto object-contain`}
                
               
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;