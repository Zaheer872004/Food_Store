import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const DishesCardsSection = ({ dishes, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      {/* Header with Toggle Button */}
      <div 
        className="flex items-center justify-between cursor-pointer p-2 bg-gray-100 rounded-lg" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold">{title} ({dishes.length})</h2>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>

      {/* Show items only if isOpen is true */}
      {isOpen && (
        <div className="space-y-6 mt-3">
          {dishes.map((dish) => (
            <div key={dish?.card.info.id} className="flex items-center border-b pb-4">
              <div className="flex-grow">
                <div className="">
                  <h3 className="text-lg font-semibold">{dish?.card.info.name}</h3>
                  <p className="text-gray-600 font-medium flex items-center">
                    ₹{(dish?.card.info.price || dish?.card.info.defaultPrice) / 100} 
                    <svg 
                      className="ml-2 "
                      width="14" 
                      height="14" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M1.63362 8.39604C1.28368 8.7446 1.28368 9.30972 1.63362 9.65828L6.1293 14.1362C6.47924 14.4848 7.0466 14.4848 7.39654 14.1362L12.9543 8.60038C13.1228 8.43251 13.2173 8.20468 13.2168 7.96728L13.2069 3.49924C13.2058 3.00785 12.8061 2.60977 12.3128 2.60868L7.827 2.5988C7.58866 2.59828 7.35993 2.69235 7.1914 2.86022L1.63362 8.39604ZM10.8177 6.90055C11.3458 6.37452 11.3439 5.51976 10.8134 4.99139C10.283 4.46302 9.4248 4.46113 8.89668 4.98717C8.36856 5.5132 8.37045 6.36796 8.90092 6.89633C9.43138 7.4247 10.2895 7.42659 10.8177 6.90055Z" 
                        fill="#1BA672"
                      />
                    </svg>
                    {/* Offer tag check */}
                    {dish?.card.info.offerTags?.[0] && (
                      <span className="font-medium text-sm bg-green-700 text-transparent bg-clip-text">
                        {dish?.card.info.offerTags[0].title} {dish?.card.info.offerTags[0].subTitle}
                      </span>
                    )}
                  </p>
                </div>

                {/* Rating Section */}
                {dish?.card.info.rating && (
                  <div className="flex items-center text-green-600">
                    <Star className="w-4 h-4" />
                    <span className="ml-1">{dish?.card.info.rating} ({dish?.card.info.totalRatings})</span>
                  </div>
                )}

                {/* Dish Description */}
                <p className="text-gray-500 text-sm">{dish?.card.info.description}</p>
              </div>

              {/* Dish Image & Add Button */}
              <div className="relative">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${dish?.card.info.imageId}`}
                  alt={dish?.card.info.name}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-1 rounded-md shadow-md">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DishesCardsSection;
