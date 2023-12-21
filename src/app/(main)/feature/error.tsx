"use client";
export default function ErrorBoundary({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>{error.message}</h1>
    </>
  );
}
