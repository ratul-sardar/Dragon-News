"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { error } from "better-auth/api";
import Link from "next/link";

async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formObj = Object.fromEntries(formData);
  const { name, email, password } = formObj;
  console.log(formObj);

  const { data, error } = await authClient.signUp.email({
    name, // required
    email, // required
    password, // required
    callbackURL: "/",
  });

  console.log("error: ", error);
}

export default function Signup() {
  return (
    <>
      <section className="">
        <div className="cssContainer min-h-[80vh] py-8 flex flex-col items-center justify-center">
          <h2 className="mb-6">Hi, from Signup page</h2>

          <div className="rounded-xl p-6 space-y-3 border border-gray-600">
            <form onSubmit={handleSubmit}>
              {/* Email input*/}
              <fieldset className="mb-4">
                <legend className="mb-2">Name</legend>
                <input
                  type="text"
                  name="name"
                  id="userName"
                  required
                  className="border-2 border-lime-500"
                />
              </fieldset>

              {/* Email input*/}
              <fieldset className="mb-4">
                <legend className="mb-2">Email</legend>
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  required
                  className="border-2 border-lime-500"
                />
              </fieldset>

              {/* Password input*/}
              <fieldset className="mb-8">
                <legend className="mb-2">Password</legend>
                <input
                  type="password"
                  name="password"
                  id="userPassword"
                  required
                  className="border-2 border-lime-500"
                />
              </fieldset>
              {/* Submit Button*/}
              <Button>
                <input type="submit" value="submit" />
              </Button>
            </form>

            <p className="">
              Or{" "}
              <Link href={"/login"} className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
