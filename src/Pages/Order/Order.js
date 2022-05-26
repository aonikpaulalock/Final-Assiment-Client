import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import axios from 'axios';
import Swal from 'sweetalert2';
const Order = () => {
  const { register, formState: { errors }, handleSubmit, watch, reset } = useForm();
  const [products, setProducts] = useState({})
  const [user] = useAuthState(auth)
  const { id } = useParams()
  const { data, isLoading } = useQuery('/tools', () =>
    axios.get(`https://vast-hollows-25888.herokuapp.com/tools/${id}`).then(response => {
      setProducts(response.data)
    })
  )

  if (isLoading) {
    return <Loading />
  }

  const onSubmit = async data => {
    const quantity = watch("min_order");
    const order = {
      name: user?.displayName,
      email: user?.email,
      price: products.perPrice,
      quantity,
      productName: products.name

    }
    await axios.post("https://vast-hollows-25888.herokuapp.com/orders", order)
      .then((response) => {
       if(response.data.insertedId){
         toast("Your Order Successfully")
         reset()
       }
      })
  }


  return (
    <div className="flex lg:px-14 mt-6">
      <div className=" ">
        <div class="card lg:card-side shadow-2xl mt-8">
          <figure>
            <img src={products?.img} alt="Album" className='w-full' />
          </figure>
          <div class="card-body">
            <div class="">
              <h2 class="card-title pb-2">{products.name}</h2>
              <p className='text-justify font-normal text-gray-500 pb-4'>{products.description}</p>
              <h6 className="text-left text-md font-medium">Minimum-Quantity: {products.minimumOrderQuantity}</h6>
              <h6 className="text-left text-md font-medium py-4">Available-Quantity: {products.availableQuantity}</h6>
              <h4 className="text-orange-400 text-2xl text-left"><span className="font-bold text-accent text-sm ">Price : </span> ${products.perPrice}</h4>
              <div>
                <div className="flex-1">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-md">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        readOnly
                        placeholder={user?.displayName}
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control w-full max-w-md">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        placeholder={user?.email}
                        className="input input-bordered"
                        readOnly
                      />
                    </div>
                    <div className="form-control w-full max-w-md">
                      <label className="label">
                        <span className="label-text">Availavle</span>
                      </label>
                      <input
                        placeholder={` ${products.name} Availavle : ${products.availableQuantity}`}
                        readOnly
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control w-full max-w-md">
                      <label className="label">
                        <span className="label-text">Minimum-Order</span>
                      </label>
                      <input
                        placeholder={`Minimum-Order: ${products.minimumOrderQuantity} pics`}
                        className="input input-bordered"
                        {...register("min_order", {
                          required: {
                            value: true,
                            message: 'minimum Order Quantity is Required'
                          },
                        })}
                      />
                      <label className="label">
                        {
                          parseInt(products?.availableQuantity) < parseInt(watch().min_order) ? (
                            <span className="text-red-500">
                              you can not order then stock
                            </span>
                          )
                            : parseInt(products?.minimumOrderQuantity) > parseInt(watch().min_order) ? (
                              <span className="text-red-500">
                                you not order less then minimum
                              </span>
                            ) : (

                              ""
                            )}
                        {
                          errors.min_order?.type === "required" && (
                            <span className="lebel-text-alt text-red-500">
                              {errors.min_order.message}
                            </span>
                          )
                        }
                      </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                      <label className="label">
                        <span className="label-text">Price (Per-Prices)</span>
                      </label>
                      <input
                        placeholder={` $${products.perPrice} `}
                        readOnly
                        className="input input-bordered"
                      />
                    </div>
                    <div class="from-control w-full max-w-md mt-6">
                      {
                        parseInt(products?.availableQuantity) < parseInt(watch().min_order) || parseInt(products?.minimumOrderQuantity) > parseInt(watch().min_order) ? (
                          <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold" disabled>Order-Now</button>
                        ) : (
                          <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold">Order-Now</button>
                        )
                      }
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;