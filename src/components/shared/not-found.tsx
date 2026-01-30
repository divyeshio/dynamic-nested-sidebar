import { Link } from "@tanstack/react-router";

import { Button } from "../ui/button";

export function NotFound() {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-6">
        <p className="text-8xl">Not Found</p>
        <Button variant="link">
          <Link
            to={"/"}
            className="text-2xl"
          >
            Go to Home
          </Link>
        </Button>
      </div>
    </>
  );
}
