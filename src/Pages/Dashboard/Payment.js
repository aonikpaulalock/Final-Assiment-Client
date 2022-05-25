import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
  const { id } = useParams()
  const url = `http://localhost:5000/orders/${id}`;

  const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
    method: 'GET',
    // headers: {
    //   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    // }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {orders.name}</p>
          <h2 class="card-title text-md font-medium text-gray-600">Please Pay for {orders.productName}</h2>
          <p className='font-medium text-md'>Your Order Quantity  <span className='text-orange-500 font-bold'> {orders.quantity}</span> at Price $ <span className='text-orange-500 font-bold'>{orders.price}</span></p>
          <p className="font-medium text-md">Please pay for  $ <span className='text-orange-500 font-bold'>{orders.price}</span> </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
    
        </div>
      </div>
    </div>
  );
};

export default Payment;