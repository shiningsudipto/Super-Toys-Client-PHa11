import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";

const TabCard = ({ category }) => {
    const { name, pictureUrl, price, rating, _id } = category;
    return (
        <div>
            <div className="card bg-base-100 h-full shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={pictureUrl} alt="Super Toys" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-xl font-semibold'>Price: {price}</p>
                            <p className='flex items-center font-bold'>{rating}
                                <Rating className='ms-3 text-xl'
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-yellow-300' />}
                                    fullSymbol={<FaStar />}
                                    readonly
                                />
                            </p>
                        </div>
                        <div className="card-actions">
                            <button className="btn border-0 bg-orange hover:border-2 hover:border-orange hover:bg-white hover:text-orange">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard;