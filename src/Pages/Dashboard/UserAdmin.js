import React from 'react';
import { toast } from 'react-toastify';

const UserAdmin = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          toast.error('Failed to Make an admin');
        }
        return res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
        console.log(data);

      })
  }
  return (
    <tr>
      <th className="font-medium text-accent">{index + 1}</th>
      <td className="font-bold text-accent">{email}</td>
      <td>
        {(role !== "admin") ? <button className='btn mr-4 rounded-full px-14 py-0 text-white font-bold' onClick={handleAdmin}>Make admin</button> : <h4 className="text-green-400 font-bold text-xl">Already Have An Admin</h4>}

      </td>
    </tr>
  );
};

export default UserAdmin;