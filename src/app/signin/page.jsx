"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from '@heroui/react'
import { Droplet, Envelope, Lock, Eye, EyeSlash } from '@gravity-ui/icons';
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
   e.preventDefault();

  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData);

  const { data, error } = await authClient.signIn.email({
    email: userData.email,
    password: userData.password,
    rememberMe: true,
});
  const notify = () => toast.success('Logged in Successfully');
if(!error){
    notify()
    setTimeout(() => {
      router.push("/");
    }, 1000);
}
if(error){
    toast.error(`Signup Failed: ${error.message || "Unknown error"}`);
}

    }
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-3">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-8 my-16">

        <div className="flex justify-center">
           <div className="flex items-center mb-4">
                             <Droplet className="text-red-600" width={28} height={28} />
                             <div className="leading-tight">
                               <p className="text-lg font-bold text-gray-900">
                                 Blood<span className="text-red-600">Link</span>
                               </p>
                               <p className="text-[10px] font-semibold tracking-wide text-red-600">
                                 BLOOD DONATION
                               </p>
                             </div>
                             </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Login to your account to continue your journey of saving lives.
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm rounded-lg px-3 py-2 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label className="text-sm font-semibold block mb-1">Email Address</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4">
            <Envelope className="text-gray-400 mr-2" size={18} />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          <label className="text-sm font-semibold block mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-2">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full outline-none text-sm"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Eye className="text-gray-400" size={18} />
              ) : (
                <EyeSlash className="text-gray-400" size={18} />
              )}
            </button>
          </div>

          <div className="text-right mb-4">
            <Link href="/forgot-password" className="text-sm text-red-600 font-medium">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="danger"
            className="w-full font-semibold"
            isDisabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-red-600 font-semibold">
            Register Now
          </Link>
        </p>

      </div>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  )
}

export default LoginPage
