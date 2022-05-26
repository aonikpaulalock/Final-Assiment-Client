import React from 'react';
import { toast } from 'react-toastify';

const DeleteManage = ({ deleteOrder, refetch, setDeleteOrder }) => {
  const { _id, name } = deleteOrder;
  const handleDelete = () => {
    fetch(`https://vast-hollows-25888.herokuapp.com/tools/${_id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast(`Tools ${name} is deleted`)
          setDeleteOrder(null)
          refetch()
        }
      })
  }
  return (
    <div>
      <input type="checkbox" id="mange-modal-delete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-400">Are You Sure In Delete  {name}</h3>
          <div class="modal-action">
            <label for="mange-modal-delete" class="py-2 rounded-full px-8 text-white font-bold bg-green-500 border-0 cursor-pointer">Cancel</label>
            <label for="mange-modal-delete" class="py-2 rounded-full px-8 text-white font-bold bg-red-500 border-0 cursor-pointer" onClick={handleDelete}>Delete</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DeleteManage;