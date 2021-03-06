import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const MyOrder = () => {
  const [orders, setOrders] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`https://vast-hollows-25888.herokuapp.com/orders?email=${user.email}`, {
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

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are You Sure Delete Data")
    if (confirmDelete) {
      fetch(`https://vast-hollows-25888.herokuapp.com/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            const filterDelete = orders.filter(order => order._id !== id)
            setOrders(filterDelete)
          }
        })
    }

  }

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
              <th className="font-medium text-accent">Payment</th>
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
                  <td className="font-medium text-accent">
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-md btn-secondary text-white'>Pay</button></Link>
                    }
                    {(order.price && order.paid) ? <div>
                      <p className="text-green-500 font-medium">Paid</p>
                      <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                    </div>
                      :
                      // <label onClick={() => setDeleteOrder(orders)} for="delete-modal" class="py-3 rounded-full px-14 text-white font-bold bg-red-500 border-0 cursor-pointer">Delete</label>
                      <button className='btn btn-md btn-error text-white ml-3' onClick={() => handleDelete(order._id)}>Delete</button>
                    }
                  </td>
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