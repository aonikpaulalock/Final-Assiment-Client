// import React from 'react';

// const DeletedOrder = ({ deleteOrder, setDeleteOrder,orders}) => {
//   // const { _id, name } = deleteOrder;
//   const handleDelete = (id) => {
//     fetch(`http://localhost:5000/orders/${id}`, {
//       method: "DELETE",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('accessToken')}`
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if (data.deletedCount) {
//           const filterDelete = deleteOrder.filter(order => order._id !== id)
//           setDeleteOrder(filterDelete)
//         }
//       })
//   }
//   return (
//     <div>
//       <input type="checkbox" id="delete-modal" class="modal-toggle" />
//       <div class="modal modal-bottom sm:modal-middle">
//         <div class="modal-box">
//           <h3 class="font-bold text-lg text-red-400">Are You Sure In Delete </h3>
//           <div class="modal-action">
//             <label for="delete-modal" class="py-2 rounded-full px-8 text-white font-bold bg-green-500 border-0 cursor-pointer">Cancel</label>
//             <label for="delete-modal" class="py-2 rounded-full px-8 text-white font-bold bg-red-500 border-0 cursor-pointer" onClick={() => handleDelete(orders._id)}>Delete</label>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// };

// export default DeletedOrder;