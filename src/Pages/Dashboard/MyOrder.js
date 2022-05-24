import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyOrder = () => {
  const [orders, setOrders] = useState([])
  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setOrders(data)
          console.log(data);
        })
    }
  }, [user])
  return (
    <div>
      <h1 className="font-semibold text-2xl text-accent text-center">My Orders</h1>
      <div class="overflow-x-auto sm:px-14">
        <table class="table w-full">

          <thead>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>orderName</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map((order, index) => <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order.email}</td>
                  <td>{order.productName}</td>
                  <td>{order.quantity}</td>
                </tr>
              </>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;