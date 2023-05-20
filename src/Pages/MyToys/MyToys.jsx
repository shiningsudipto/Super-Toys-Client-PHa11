import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';
import UpdateModal from './UpdateModal';
import useTitle from '../../Hook/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='mx-auto w-1/3 my-6'>
            <progress className="progress"></progress>
        </div>
    }
    const [selectedId, setSelectedId] = useState(null);
    const [myToys, setMyToys] = useState([])
    console.log(selectedId);
    useEffect(() => {
        fetch(`https://action-toys-server-taupe.vercel.app/toysBy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [selectedId])
    console.log(myToys);



    return (
        <div className='my-14'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, index) => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                number={index}
                                myToys={myToys}
                                setMyToys={setMyToys}
                                setSelectedId={setSelectedId}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                selectedId && (<UpdateModal setSelectedId={setSelectedId} selectedId={selectedId} ></UpdateModal>)
            }



        </div>
    );
};

export default MyToys;