import React from 'react';

const ItemCard = (props) => {
    const {
        id,
        name,
        cloudinaryImageId,
        locality,
        areaName,
        costForTwo,
        cuisines,
        avgRating,
    } = props.info;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt={name}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600 text-sm">{locality}, {areaName}</p>
                <p className="text-gray-800 font-medium mt-2">Cost for Two: ₹{costForTwo}</p>
                <p className="text-gray-800 font-medium">Cuisines: {cuisines.join(', ')}</p>
                <div className="flex items-center mt-2">
                    <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {avgRating} ★
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;