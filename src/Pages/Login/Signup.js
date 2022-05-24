import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
import signup from "../../Assets/Vouser/login.png"
import { toast } from 'react-toastify';
import useToken from '../../Hooks/useToken';
const Signup = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // Google Provider

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  
  // Email Password base Create user
  const [createUserWithEmailAndPassword, createUser, createLoading, createError
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [token] = useToken(googleUser || createUser)
  const [updateProfile, updating, upError] = useUpdateProfile(auth);
  // React-Hooks Forms
  const { register, formState: { errors }, handleSubmit } = useForm();

  // Handle Firebase Error 
  let errorFirebase;
  if (googleError || createError || upError) {
    errorFirebase = <span className="text-semibold text-red-400">{googleError?.message || createError?.message}</span>
  }
  if (googleLoading || createLoading) {
    return <Loading />
  }
  if (googleUser || createUser) {
    // navigate("/")
    console.log(googleUser, createUser);
  }


  // handle From submit
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name });
    console.log(data)
    toast.success("Your Form Submited Successfully")
  };
  return (
    <div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card shadow-2xl lg:w-5/12 md:w-9/12 sm:w-8/12 sm:p-1 p-0">
            <div class="card-body">
              <h2 class="text-2xl font-semibold text-center text-accent">Signup</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text font-semibold">Name</span>
                  </label>
                  <input type="text"
                    placeholder="Enter Name"
                    class="input input-bordered"
                    {...register("name",
                      {
                        required: {
                          value: true,
                          message: "Name is required"
                        }
                      })}
                  />
                  <label class="label">
                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.name?.message}</span>}
                  </label>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text font-semibold">Email</span>
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
                    <span class="label-text font-semibold">Password</span>
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
                <button type="submit" class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold w-full">Signup</button>
                <p className="text-accent mt-2">Already have an account ? <Link className='font-medium text-secondary' to="/login">Please Login</Link></p>
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
            <img src={signup} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;