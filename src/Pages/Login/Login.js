import React from 'react';
import login from "../../Assets/Vouser/login.png"
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
// import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate, Navigate, Link } from 'react-router-dom';
import { data } from 'autoprefixer';
import auth from '../../Firebase.init';
const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  // Google Provider

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  // Email Password Authentication
  const [signInWithEmailAndPassword, signUser, signLoading, signError,
  ] = useSignInWithEmailAndPassword(auth);
  // React-Hooks Forms
  const { register, formState: { errors }, handleSubmit } = useForm();

  // Handle Firebase Error 
  useEffect(() => {
    if (googleUser || signUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, signUser, navigate, from])
  let errorFirebase;
  if (googleError || signError) {
    errorFirebase = <span className="text-semibold text-red-400">{googleError?.message || signError?.message}</span>
  }
  if (googleLoading || signLoading) {
    return <Loading />
  }
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    console.log(data)
  };
  return (
    <div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card shadow-2xl lg:w-5/12 md:w-9/12 sm:w-8/12 sm:p-1 p-0">
            <div class="card-body">
              <h2 class="text-2xl font-semibold text-center text-accent">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="email"
                    placeholder="Enter Email"
                    class="input input-bordered"
                    {...register("email",
                      {
                        required: {
                          value: true,
                          message: "Email is required"
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Enter Valid Email'
                        }
                      })}
                  />
                  <label class="label">
                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
                  </label>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="password"
                    placeholder="Enter Password"
                    class="input input-bordered"
                    {...register("password",
                      {
                        required: {
                          value: true,
                          message: "Password is required"
                        },
                        minLength: {
                          value: 6,
                          message: 'Minimum 6 charkter'
                        }
                      })}
                  />
                  <label class="label">
                    <Link to="" class="label-text-alt text-md font-medium">Forgot password?</Link>
                  </label>
                  <label class="label">
                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
                  </label>
                  {errorFirebase}
                </div>
                <button type="submit" class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold w-full">Login</button>
                <p className="text-accent mt-2">New In Doctor_Portal ? <Link className='font-medium text-secondary' to="/signup">Create An Account</Link></p>
              </form>
              <div class="divider text-accent">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline btn-accent
           text-white"
              >Signin With Google</button>
            </div>
          </div>
          <div class="text-center lg:text-left  md:flex-1 w-full">
            <img src={login} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;