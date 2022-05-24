import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const ManageRow = ({ tool, index, refetch }) => {
  const [user] = useAuthState(auth)
  const { img, name,_id } = tool;
  const handleDelete = () => {
    fetch(`http://localhost:5000/tools/${_id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast(`Tools ${name} is deleted`)
          refetch()
        }
      })
  }
  return (
    <tr>
      <th className="font-medium text-accent">{index + 1}</th>
      <td className="font-medium text-accent">
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td className="font-medium text-accent text-lg">{name}</td>
      <td>
        <button className='py-3 rounded-full px-14 text-white font-bold bg-red-500 border-0' onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ManageRow;