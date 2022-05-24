import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading"
import UserAdmin from './UserAdmin';
const AllUser = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className=' px-20'>
      <h1 className='text-3xl text-aceent font-bold my-6'>All Users And Make Admin</h1>
      <table class="table w-full">

        <thead>
          <tr>
            <th className="font-medium text-accent">Index</th>
            <th className="font-medium text-accent">Email</th>
            <th className="font-medium text-accent">Make-Admin</th>
          </tr>
        </thead>
        <tbody>

          {
            users.map((user, index) => <UserAdmin
              key={user._id}
              index={index}
              user={user}
              refetch={refetch}
            >
            </UserAdmin>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;