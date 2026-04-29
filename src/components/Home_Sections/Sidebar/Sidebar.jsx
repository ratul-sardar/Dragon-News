"use client";

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

async function handleGoogleLogin() {
  const data = await authClient.signIn.social({
    provider: "google",
  });
}

async function handleGitHubLogin() {
  const data = await authClient.signIn.social({
    provider: "github",
  });
}

export default function Sidebar() {
  return (
    <div>
      {/* Login Button*/}
      <div className="space-y-2">
        <h3 className="text-md font-semibold">Login With</h3>
        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          fullWidth={true}
          className={
            "rounded-xs border-accent text-accent hover:text-white hover:bg-accent"
          }
        >
          <FaGoogle />
          Login With Google
        </Button>
        <Button
          onClick={handleGitHubLogin}
          variant="outline"
          fullWidth={true}
          className={
            "rounded-xs border-white text-white hover:text-black hover:bg-white"
          }
        >
          <FaGithub />
          Login With GIthub
        </Button>
      </div>
    </div>
  );
}
