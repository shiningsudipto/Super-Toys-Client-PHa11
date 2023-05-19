import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyToysRow = ({ myToy, number, myToys, setMyToys, setSelectedId }) => {
    const { } = useContext(AuthContext)
    const { name, pictureUrl, description, category, sellerEmail, sellerName, rating, price, availableQuantity, _id } = myToy;

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== _id);
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }

    // const handleToyUpdate = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const price = form.price.value;
    //     const availableQuantity = form.quantity.value;
    //     const description = form.description.value;
    //     const updatedToy = {
    //         price, availableQuantity, description
    //     }
    //     console.log(updatedToy);

    //     // fetch(`http://localhost:5000/toys/${_id}`, {
    //     //     method: 'PUT',
    //     //     headers: {
    //     //         'content-type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(updatedToy)
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         console.log(data);
    //     //         if (data.modifiedCount > 0) {
    //     //             Swal.fire({
    //     //                 title: 'success',
    //     //                 text: 'Coffee added successfully!',
    //     //                 icon: 'success',
    //     //                 confirmButtonText: 'Cool'
    //     //             })
    //     //         }
    //     //     })

    // }

    return (
        <>
            {/* row */}
            <tr>
                <th>{number + 1}</th>
                <img src={pictureUrl} className='w-32 rounded-xl' alt="Super Toys Image" />
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{availableQuantity}</td>
                <td>{description.length > 25 ? description.slice(0, 20) : ''}...</td>
                <td>{myToy?.sellerName}</td>
                <td>{sellerEmail}</td>
                <td><label onClick={() => setSelectedId(_id)} htmlFor="my-modal-3" className="cursor-pointer bg-orange font-semibold p-2 rounded-lg text-white">Edit</label></td>
                <td>
                    <p onClick={() => handleDelete(_id)} className="cursor-pointer bg-orange font-semibold p-2 rounded-lg text-white">Delete</p>
                </td>
            </tr>

        </>
    );
};

export default MyToysRow;

