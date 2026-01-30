import { ErrorComponent, Link, rootRouteId, useMatch, useRouter } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

import { Button } from "../ui/button";

export function DefaultCatchBoundary({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.routeId === rootRouteId,
  });

  console.error("DefaultCatchBoundary Error:", error);

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
      <ErrorComponent error={error} />
      <pre>{error.stack}</pre>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() => {
            router.invalidate();
          }}
          className="font-extrabold uppercase"
        >
          Try Again
        </Button>
        <Button
          onClick={() => {
            reset();
          }}
          className="font-extrabold uppercase"
        >
          Reset
        </Button>
        {isRoot ? (
          <Button
            asChild
            className="font-extrabold uppercase"
          >
            <Link
              to="/"
              reloadDocument={true}
            >
              Home
            </Link>
          </Button>
        ) : (
          <Button
            asChild
            className="font-extrabold uppercase"
          >
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                router.history.back();
                reset();
              }}
            >
              Go Back
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
