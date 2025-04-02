
import { Star } from "lucide-react";

const HeaderSection = (
   {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality
  }) => {
  return (
    <div className="mx-28 p-4 rounded-2xl shadow-md bg-gray-100 border border-gray-300">
      <h2 className="text-xl font-bold">{name || "Unknown"}</h2>
      <div className="mt-2">
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <Star className="w-5 h-5" />
          <span>{avgRating || "N/A"} ({totalRatingsString || "0 ratings"})</span>
          <span className="text-black">&bull; {costForTwoMessage || "Price not available"}</span>
        </div>
        <div className="mt-1 text-red-500 font-medium">
          {cuisines?.length
            ? cuisines.join(", ")
            : "No cuisines available"}
        </div>
        <div className="ml-3 mt-2 text-gray-700">
          <span className="font-semibold">&bull; Outlet:</span> {locality || "Unknown"}
        </div>
        <div className="ml-3 text-gray-600">&bull; 10-15 mins</div>
      </div>
    </div>
  );
};


export default HeaderSection;
