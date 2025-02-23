import React from "react";
import { Button } from "@radix-ui/themes";

function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-2 bg-primary">
        <h2 className="text-4xl font-extrabold">Welcome to Doubtly</h2>
        <span className="text-md font-normal text-textSecondary">
          A community-driven platform to share and resolve your doubts
        </span>
        <div className="mt-3">
            <Button color="blue" size="3" radius="large">
            Post a Doubt
            </Button>
        </div>
      </div>
    </>
  );
}

export default Landing