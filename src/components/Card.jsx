import React from 'react';
import { numberWithCommas } from '../utils/numberWithCommas';
import { MdOutlineBed } from "react-icons/md";
import { TbRulerMeasure2 } from "react-icons/tb";

const Card = ({ item, min }) => {

    return (
        <div className={`max-w-sm rounded-xl overflow-hidden flex flex-col p-4 border border-gray-200 bg-white`}>
            <img className="w-full rounded-xl mb-2" src={item.image} alt="Sunset in the mountains"/>
            <div className="py-1">
                <h2 className={`font-bold text-xs text-left`}>{item.location}</h2>
                <h3 className={`font-bold text-xl text-left`}>{numberWithCommas(item.price)}€</h3>
                <p className={`font-bold text-xs text-left`}>{numberWithCommas(Math.round(item.price/item.area))}€/m2</p>
            </div>
            <div className="py-4 flex justify-between flex-1">
                <div className={`flex justify-center ${min?'flex-col gap-1':'gap-3 items-end'}`}>
                    <p className='flex text-gray-500 items-center gap-1'><MdOutlineBed /><span className='text-xs font-bold'>{item.bedrooms}</span></p>
                    
                    <p className='flex text-gray-500 items-center gap-1'><TbRulerMeasure2 /><span className='text-xs font-bold'>{item.area}mt2</span></p>
                </div>
            </div>
            <div className='pb-2 flex'>
                <span  
                    className="inline-block bg-green-200 text-green-700 rounded-full px-3 py-2 text-xs font-semibold text-gray-700 "
                >Publicado | {item.dateAdded}</span>
            </div>
            
        </div>
    );
};

export default Card;