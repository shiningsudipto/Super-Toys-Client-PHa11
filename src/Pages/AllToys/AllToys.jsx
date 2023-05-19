import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DataROw from './DataROw';

const AllToys = () => {
    // const toys = useLoaderData();
    // console.log(toys);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000/toys")
            .then(res => res.json())
            .then(data => setToys(data)
            )
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toysName/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data)
            )
    }

    return (
        <div className='my-14'>
            <div className="form-control">
                <div className="input-group">
                    <input onChange={e => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
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