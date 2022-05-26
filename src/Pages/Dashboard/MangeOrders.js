import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MangeOrders = () => {
  const { data: orders, isLoading, refetch } = useQuery('order', () => fetch('https://vast-hollows-25888.herokuapp.com/order')
    .then(res => res.json()));
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="px-20">
      <h1 className='text-3xl text-aceent font-bold my-6'>Manage Orders</h1>
      <table class="table w-full">

        <thead>
          <tr className='text-center'>
            <th className="font-medium text-accent">Index</th>
            <th className="font-medium text-accent">Name</th>
            <th className="font-medium text-accent">Eamil</th>
            <th className="font-medium text-accent">Quantity</th>
            <th className="font-medium text-accent">Manage</th>
          </tr>
        </thead>
        <tbody>

          {
            orders.map((order, index) => <OrderRow
              key={order._id}
              index={index}
              order={order}
              refetch={refetch}
            >
            </OrderRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MangeOrders;