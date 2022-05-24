import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const MyOrder = () => {
  const [orders, setOrders] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            navigate('/')
            signOut(auth)
            localStorage.removeItem("accessToken")
          }
          return res.json()
        })
        .then(data => {
          setOrders(data)
          console.log(data);
        })
    }
  }, [user, navigate])
  return (
    <div>
      <h1 className='text-3xl text-aceent font-bold my-6'>My-Order</h1>
      <div class="overflow-x-auto sm:px-14">
        <table class="table w-full">

          <thead>
            <tr>
              <th className="font-medium text-accent">Index</th>
              <th className="font-medium text-accent">Email</th>
              <th className="font-medium text-accent">orderName</th>
              <th className="font-medium text-accent">Quantity</th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map((order, index) => <>
                <tr>
                  <th className="font-medium text-accent">{index + 1}</th>
                  <td className="font-medium text-accent">{order.email}</td>
                  <td className="font-medium text-accent text-lg">{order.productName}</td>
                  <td className="font-medium text-accent">{order.quantity}</td>
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