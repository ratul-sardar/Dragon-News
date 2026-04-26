import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@heroui/react";

export default function Sidebar() {
  return (
    <div>
      {/* Login Button*/}
      <div className="space-y-2">
        <h3 className="text-md font-semibold">Login With</h3>
        <Button
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
