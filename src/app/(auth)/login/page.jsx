"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formObj = Object.fromEntries(formData);
  const { email, password } = formObj;
  console.log("Logging in:", email);

  const { data, error } = await authClient.signIn.email({
    email,
    password,
    callbackURL: "/",
  });

  if (error) {
    console.error("Login error:", error.message);
  } else {
    console.log("Login success:", data);
  }
}

export default function Login() {
  return (
    <>
      <section className="">
        <div className="cssContainer min-h-[80vh] py-8 flex flex-col items-center justify-center">
          <h2 className="mb-6 text-2xl font-bold">Login</h2>

          <div className="rounded-xl p-6 space-y-3 border border-gray-600 w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email input*/}
              <fieldset>
                <legend className="mb-2">Email</legend>
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  required
                  className="w-full border-2 border-lime-500 p-2 rounded"
                />
              </fieldset>
              {/* Password input*/}
              <fieldset>
                <legend className="mb-2">Password</legend>
                <input
                  type="password"
                  name="password"
                  id="userPassword"
                  required
                  className="w-full border-2 border-lime-500 p-2 rounded"
                />
              </fieldset>
              {/* Submit Button*/}
              <Button type="submit" color="primary">
                Login
              </Button>
            </form>

            <p className="text-center">
              Don't have an account?{" "}
              <Link href={"/signup"} className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
