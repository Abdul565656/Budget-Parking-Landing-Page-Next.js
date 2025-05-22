// components/FeaturesSection.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { BsPatchCheckFill } from 'react-icons/bs';
import { IoTicketOutline } from 'react-icons/io5';
import { FaUsers, FaParking } from 'react-icons/fa';

interface Feature {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  { id: 1, icon: BsPatchCheckFill, title: 'Best Price Guarantee', description: 'Get the lowest rates on Heathrow parking, guaranteed.' },
  { id: 2, icon: IoTicketOutline, title: 'Easy Booking', description: 'Quick and hassle-free online reservations.' },
  { id: 3, icon: FaUsers, title: 'Airport & Hotel Parking', description: 'Convenient parking solutions for both airport and hotel stays.' },
  { id: 4, icon: FaParking, title: '24/7 Customer Services', description: 'Support available anytime, day or night.' },
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const IconComponent = feature.icon;
  const iconColorClass = 'text-lime-600'; // Or your brand green e.g., text-[#8CC63F]
  const iconCircleBgClass = 'bg-lime-50'; // Or bg-[#8CC63F]/10
  const cardBorderColorClass = 'border-lime-300'; // Or border-[#8CC63F]

  return (
    <div
      className={`bg-white p-6 md:p-7 rounded-2xl border ${cardBorderColorClass} shadow-sm flex flex-col items-center text-center h-full transition-shadow hover:shadow-md`}
    >
      <div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${iconCircleBgClass} flex items-center justify-center mb-5 md:mb-6`}
      >
        <IconComponent className={`${iconColorClass} text-2xl md:text-3xl`} />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
        {feature.title}
      </h3>
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    // REMOVED bg-gray-50 from here. Padding is kept for spacing.
    <div className="py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;