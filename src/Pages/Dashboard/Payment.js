import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0ljcEIu4r15ToPEZO1QRyCh11qTJ2mq0OULDaY0ss3g41U19AcGpC1QesbBFzTLxNS0b0OvWxcLZlT1OBPzDmm00sbztt6gV');
const Payment = () => {
  const { id } = useParams()
  const url = `http://localhost:5000/orders/${id}`;

  const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='md:pl-24'>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mb-6">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {orders.name}</p>
          <h2 class="card-title text-md font-medium text-gray-600">Please Pay for {orders.productName}</h2>
          <p className='font-medium text-md'>Your Order Quantity  <span className='text-orange-500 font-bold'> {orders.quantity}</span> at Price $ <span className='text-orange-500 font-bold'>{orders.price}</span></p>
          <p className="font-medium text-md">Please pay for  $ <span className='text-orange-500 font-bold'>{orders.price}</span> </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-xl bg-base-100 p-4">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;