import React from 'react';

const UserAdmin = ({ user, index }) => {
  return (
    <tr>
      <th className="font-medium text-accent">{index + 1}</th>
      <td className="font-bold text-accent">{user?.email}</td>
      <td>
        <button className='btn mr-4'>Make Admin</button>
        <button className='btn btn-error'>Remove-User</button>
      </td>
    </tr>
  );
};

export default UserAdmin;