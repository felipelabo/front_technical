import React from 'react';
import { numberWithCommas } from '../utils/numberWithCommas';
import { MdOutlineBed } from "react-icons/md";
import { TbRulerMeasure2 } from "react-icons/tb";

const Card = ({ item, min }) => {

    return (
        <div className={`max-w-sm rounded overflow-hidden flex flex-col ${min ? '': 'shadow-lg'}`}>
            <img className="w-full" src={item.image} alt="Sunset in the mountains"/>
            <div className="px-4 py-1 flex justify-start">
                <p className="text-xs text-gray-500 flex justify-between w-full">
                    <span>{item.propertyType}</span>
                    {<span>{item.dateAdded}</span>}
                </p>
            </div>
            <div className="px-4 py-1 flex justify-start">
                <p className={`font-bold ${min ? '' : 'text-xl mb-2'}`}>{item.location}</p>
            </div>
            <div className="px-4 py-4 flex justify-between flex-1">
                <div className={`flex justify-center ${min?'flex-col gap-1':'gap-3 items-end'}`}>
                    <p className='flex text-gray-500 items-center gap-1'><MdOutlineBed /><span className='text-xs font-bold'>{item.bedrooms}</span></p>
                    
                    <p className='flex text-gray-500 items-center gap-1'><TbRulerMeasure2 /><span className='text-xs font-bold'>{item.area}mt2</span></p>
                </div>
                
                <p className={`text-xl font-bold text-green-700 flex items-end`}>{numberWithCommas(item.price)}€</p>
                {/*<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>*/}
            </div>
            <div className=' px-4 pb-2 flex'>
                {!min && item.features.map((feature, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{feature}</span>
                ))}
            </div>
            
        </div>
    );
};

export default Card;