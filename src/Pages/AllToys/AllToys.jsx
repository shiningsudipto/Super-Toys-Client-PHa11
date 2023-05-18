import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataROw from './DataROw';

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {
                        toys.map((toy, index) => <DataROw
                            key={toy._id}
                            toy={toy}
                            number={index}
                        ></DataROw>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllToys;