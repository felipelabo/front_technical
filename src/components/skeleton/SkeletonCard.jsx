import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden flex flex-col p-4 border border-gray-200 bg-white animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-24 bg-gray-300 rounded-xl mb-2"></div>
            
            {/* Location and price section */}
            <div className="py-1">
                {/* Location skeleton */}
                <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                
                {/* Price skeleton */}
                <div className="h-7 bg-gray-300 rounded w-28 mb-2"></div>
                
                {/* Price per m2 skeleton */}
                <div className="h-3 bg-gray-300 rounded w-20"></div>
            </div>
            
            {/* Details section (bedrooms and area) */}
            <div className="py-4 flex justify-between flex-1">
                <div className="flex gap-3 items-end">
                    {/* Bedrooms skeleton */}
                    <div className="flex items-center gap-1">
                        <div className="h-5 w-5 bg-gray-300 rounded"></div>
                        <div className="h-3 w-6 bg-gray-300 rounded"></div>
                    </div>
                    
                    {/* Area skeleton */}
                    <div className="flex items-center gap-1">
                        <div className="h-5 w-5 bg-gray-300 rounded"></div>
                        <div className="h-3 w-12 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
            
            {/* Date badge skeleton */}
            <div className="pb-2 flex">
                <div className="h-8 bg-gray-300 rounded-full w-40"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
