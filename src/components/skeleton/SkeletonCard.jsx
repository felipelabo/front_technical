import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-56 bg-gray-300"></div>
            
            {/* Property type skeleton */}
            <div className="px-4 py-1 flex justify-start">
                <div className="h-3 bg-gray-300 rounded w-20"></div>
            </div>
            
            {/* Location skeleton */}
            <div className="px-4 py-1 flex justify-start">
                <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
            </div>
            
            {/* Details and price skeleton */}
            <div className="px-4 pt-4 pb-2 flex justify-between">
                <div className='flex justify-center gap-3'>
                    {/* Bedrooms skeleton */}
                    <div className='flex items-center gap-1'>
                        <div className="h-4 w-4 bg-gray-300 rounded"></div>
                        <div className="h-3 w-6 bg-gray-300 rounded"></div>
                    </div>
                    
                    {/* Area skeleton */}
                    <div className='flex items-center gap-1'>
                        <div className="h-4 w-4 bg-gray-300 rounded"></div>
                        <div className="h-3 w-12 bg-gray-300 rounded"></div>
                    </div>
                </div>
                
                {/* Price skeleton */}
                <div className='h-6 w-24 bg-gray-300 rounded'></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
