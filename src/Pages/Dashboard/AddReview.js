import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const url = "https://vast-hollows-25888.herokuapp.com/reviews"
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        toast("Thank you your valuable feedback")
        reset()
      })
  }
  return (
    <div>
      <h1 className='text-3xl text-aceent font-bold my-6'>Add Your Feedback</h1>
      <div className='md:w-6/12 w-full bg-base-200 mx-auto p-8 rounded-lg shadow-xl'>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-3 input w-full max-w-md' placeholder="Enter Your name" {...register("name", { required: true, maxLength: 20 })} />
          <br />
          <textarea className='mb-3 input w-full max-w-md' placeholder='Enter Your Feedback' {...register("description")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Enter feedback ratting' type="text" {...register("rating")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Enter your image link' type="text" {...register("img")} />
          <br />
          <input type="submit" value="Review" className='btn mt-2 btn-secondary rounded-full px-14 py-0 text-white font-bold' />
        </form>
      </div>
    </div>
  );
};

export default AddReview;