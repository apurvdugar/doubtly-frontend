import React from "react";
import { Button } from "@radix-ui/themes";

function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-2 bg-primary">
        <div className="border-2 flex flex-col w-[360px] px-10 py-10 rounded-lg bg-[#e6f2ff]">
          <h1 className="text-center text-3xl font-bold mb-2">LOG IN</h1>
          <label htmlFor="Email" className="text-lg font-semibold mt-5 ml-1">Email</label>
          <input type="email" className="p-2 rounded-md" />
          <label htmlFor="Password" className="text-lg font-semibold mt-5 ml-1">Password</label>
          <input type="password" className="p-2 rounded-md" />

          <div className="mt-8 mx-auto">
            <Button color="blue" size="3" radius="large">
              Login
            </Button>
          </div>

          <div className="mx-auto text-sm font-semibold mt-10">
            <span>Not a user? <a href="" className="text-[blue] underline">Sign Up</a></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;