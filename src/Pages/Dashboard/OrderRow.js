import React from 'react';

const OrderRow = ({ order, index, refetch }) => {
  const {productName,email,quantity} = order ;
  return (
    <tr>
      <th className="font-medium text-accent">{index + 1}</th>
      <td className="font-medium text-accent">{productName}</td>
      <td className="font-medium text-accent text-lg">{email}</td>
      <td className="font-medium text-accent text-lg">{quantity}</td>
      <td>
        <button className='py-2 rounded-full px-8 text-white font-bold bg-red-500 border-0'>Delete</button>
      </td>
    </tr>
  );
};

export default OrderRow;