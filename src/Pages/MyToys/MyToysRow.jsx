import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToysRow = ({ myToy, number }) => {
    const { } = useContext(AuthContext)
    const { name, pictureUrl, description, category, sellerEmail, sellerName, rating, price, availableQuantity, _id } = myToy;
    return (
        <tbody>
            {/* row */}
            <tr>
                <th>{number + 1}</th>
                <img src={pictureUrl} className='w-32 rounded-xl' alt="Super Toys Image" />
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{availableQuantity}</td>
                <td>{description.length > 25 ? description.slice(0, 25) : ''}...</td>
                <td>{myToy?.sellerName}</td>
                <td>{sellerEmail}</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
        </tbody>
    );
};

export default MyToysRow;