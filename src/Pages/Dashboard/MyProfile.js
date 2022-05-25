import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { toast } from 'react-toastify';
const MyProfile = () => {
  const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    const url = "http://localhost:5000/profiles"
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        toast("Successfully Update Your profile")
        console.log(result);
      })
    console.log(data);
  }
  return (
    <div>
      <h1 className='text-3xl text-aceent font-bold my-6'>Upadate My Profile</h1>
      <div className='md:w-6/12 w-full bg-base-200 mx-auto p-8 rounded-lg shadow-xl'>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-3 input w-full max-w-md' placeholder="Enter Your Name" {...register("name", { required: true, maxLength: 20 })} />
          <input className='mb-3 input w-full max-w-md' placeholder="Enter Your Email" type="email" {...register("email")} />
          <br />
          <textarea className='mb-3 input w-full max-w-md' placeholder='Say Somethings' {...register("description")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Enter Education background' type="text" {...register("education")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Enter Your Location' type="text" {...register("location")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Enter your Linkdin Profile' type="text" {...register("linkdin")} />
          <br />
          <input className='mb-3 input w-full max-w-md' placeholder='Enter your phone number' type="text" {...register("phoneNumber")} />
          <br />
          <input type="submit" value="Update Profile" className='btn mt-2 btn-secondary rounded-full px-14 py-0 text-white font-bold' />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;