"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

  //! react hook approach from react hook website
  const { register, handleSubmit, formState: { errors }} = useForm();

  const handleRegisterFunc =async (data) => {
    //! data gulo pawar jonno dstructured kore nibo niche console e pabo
    const {email, name, photo, password} =data;

    const { data:res, error } = await authClient.signUp.email({
        name: name, 
        email: email,
        password: password,
        image: photo,
        callbackURL: "/login",
    });
    
    console.log(res, error);
    if(error){
        alert(error.message)
    }
    if(res){
        alert("Signup successful")
    }
};
 
  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center bg-slate-100 m-8">
      <div className=" p-20 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">
          Register an account
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit (handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend"> Name </legend>
            <input
              type="text"
              className="input"
              placeholder="Type your name"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500"> Name field is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend"> Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your photo url"
              {...register("photo", { required: true })}
            />
            {errors.photo && <p className="text-red-500"> Photo URL field is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend"> Email </legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500"> Email field is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend"> Password </legend>
            <input
              type="password"
              className="input"
              placeholder="Type your password"
              {...register("password", { required: "password field is required" })}
            />
            {errors.password && <p className="text-red-500"> {errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-slate-700 text-white mt-2">
            Register
          </button>
        </form>

        <p className="text-gray-600 mt-4">
          Already have an account?
          <Link href={"/login"} className="text-blue-500">
            SignIn here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
