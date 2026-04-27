"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

async function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target.email.value);
}

export default function Signup() {
  return (
    <>
      <section className="">
        <div className="cssContainer min-h-[80vh] py-8 flex flex-col items-center justify-center">
          <h2 className="mb-6">Hi, from Login page</h2>

          <div className="rounded-xl p-6 space-y-3 border border-gray-600">
            <form onSubmit={handleSubmit}>
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
              <Link href={"/signup"} className="text-blue-500">
                signup
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
