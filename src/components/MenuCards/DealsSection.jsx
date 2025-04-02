import React from "react";
const DealsSection = ({ deals }) => {


  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
      <h3 className=" text-lg font-semibold">Deals for you</h3>
      <div className="mt-2 flex space-x-4 overflow-x-auto scrollbar-hide">
        {deals?.length > 0 ? (
          <div className="flex space-x-4">
            {deals.map((deal, index) => (
              <div key={index} className="flex my-2 w-64 p-3 rounded-lg bg-white shadow">
                <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold">
                  %
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{deal?.info?.header}</p>
                  <p className="font-medium text-sm bg-green-700 text-transparent bg-clip-text">{deal?.info?.couponCode	}</p>
                  <p className="text-sm text-gray-500">{deal?.info?.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No deals available</p>
        )}
      </div>
    </div>
  );
};

export default DealsSection;
