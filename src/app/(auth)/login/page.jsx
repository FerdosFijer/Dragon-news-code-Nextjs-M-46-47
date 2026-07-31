"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

  //! react hook approach from react hook website
  const { register, handleSubmit, formState: { errors }} = useForm();
  //  console.log(errors);

  const handleLoginFunc = async (data) => {/* console.log(data ,"I have data"); */

        const { data:res, error } = await authClient.signIn.email({
        email: data.email, 
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
        });
        console.log(res,error);
  }

   const [isShowPassword, setIsShowpassword] = useState(false)

  //! Nicher apporach e korbo na tai niche comment kore raksi and return er vitor name field gulo comment kore raksi and react hook er approach ta diye kortesi upore
  /* const handleLoginFunc = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }; */
 
  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center bg-slate-100 m-8">
      <div className=" p-20 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">
          Login your account
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit (handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend"> Email </legend>
            <input
            //   name="email"
              type="email"
              className="input"
              placeholder="Type your email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500"> Email field is required</p>}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend"> Password </legend>
            <input
            //   name="password"
              type={isShowPassword ? "" : "password"}
              className="input"
              placeholder="Type your password"
              {...register("password", { required: "password field is required" })}
            />
            <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowpassword(!isShowPassword)}> {isShowPassword ? <FaEye className="text-lg"/>: <FaEyeSlash className="text-lg"/>}</span>
            {errors.password && <p className="text-red-500"> {errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-slate-700 text-white mt-2">
            Login
          </button>
        </form>

        <p className="text-gray-600 mt-4">
          Do not have an account?
          <Link href={"/register"} className="text-blue-500">
            SignUp here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
