"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went worng. Please try again</h1>
      <button onClick={() => reset()} className=" hover:text-amber-600">
        Try Again
      </button>
    </div>
  );
}
