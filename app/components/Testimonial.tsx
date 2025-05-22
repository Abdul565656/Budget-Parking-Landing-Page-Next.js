import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  avatarUrl: string;
  rating: number;
  text: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    avatarUrl: '/images/Testimonial 1.jpg', // Replace with actual or placeholder image paths
    rating: 5,
    text: 'I Was Thoroughly Impressed With The Ease Of Booking And The Affordability Of The Parking Services. The Park And Ride Option Was Convenient, And The Shuttle Was Quick And Reliable. Will Definitely Use Again!',
  },
  {
    id: 2,
    name: 'James T.',
    avatarUrl: '/images/Testimonial 2.jpg', // Replace with actual or placeholder image paths
    rating: 5,
    text: 'The Meet And Greet Service Made My Trip So Much Smoother. Dropping Off My Car At The Terminal And Having It Ready Upon Return Was A Game-Changer. Highly Recommend For Anyone Looking For A Hassle-Free Experience.',
  },
  {
    id: 3,
    name: 'Emily R.',
    avatarUrl: '/images/Testimonial 3.jpg', // Replace with actual or placeholder image paths
    rating: 5,
    text: 'I Was Pleasantly Surprised By The Low Rates And High Level Of Security. The Onsite Parking Was Easy To Access, And I Felt Confident Leaving My Car For An Extended Stay. Fantastic Service!',
  },
];

// Star Rating Component
interface StarRatingProps {
  rating: number;
  starClassName?: string;
  containerClassName?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  starClassName = 'w-5 h-5 text-amber-400', // Adjusted for closer color match
  containerClassName = 'flex space-x-1',
}) => {
  return (
    <div className={containerClassName}>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`${starClassName} ${
            index < rating ? 'text-amber-400' : 'text-gray-300'
          }`} // Assuming inactive stars are gray if rating < 5
        />
      ))}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#F7FCF7] py-16 px-4 sm:px-6 lg:px-8"> {/* Very light green background */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black text-center mb-16">
          What Our Customers Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-7 flex flex-col"
            >
              <div className="flex items-center mb-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 shrink-0">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    // For placeholder, you might use a simple background color or a generic icon
                    // onError={(e) => { e.currentTarget.src = '/images/avatars/default-avatar.png'; }}
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-black leading-tight">
                    — {testimonial.name}
                  </p>
                  <StarRating rating={testimonial.rating} starClassName="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2.5 mt-12">
          <button
            aria-label="Go to previous set of testimonials"
            className="w-3 h-3 bg-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ring-offset-[#F7FCF7]"
          ></button>
          <button
            aria-label="Current set of testimonials"
            className="w-3 h-3 bg-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ring-offset-[#F7FCF7]" // Active dot
          ></button>
          <button
            aria-label="Go to next set of testimonials"
            className="w-3 h-3 bg-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ring-offset-[#F7FCF7]"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;