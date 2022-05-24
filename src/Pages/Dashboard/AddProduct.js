import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    const url = "http://localhost:5000/tools"
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      toast("Your Product add  Succesfully")
      console.log(result);
    })

  };
  return (
    <div>
      <h1 className='text-3xl text-aceent font-bold my-6'>Add Product</h1>
      <div className='w-6/12 bg-base-200 mx-auto p-8 rounded-lg shadow-xl'>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-3 input w-full max-w-md' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
          <textarea className='mb-3 input w-full max-w-md' placeholder='Description' {...register("description")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Price' type="text" {...register("price")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Minimum-Order-Quantity' type="text" {...register("minimumOrderQuantity")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Available-Quantity' type="text" {...register("availableQuantity")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Photo URL' type="text" {...register("img")} />
          <br />
          <input type="submit" value="Add Service" className='btn mt-2 btn-secondary rounded-full px-14 py-0 text-white font-bold' />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;