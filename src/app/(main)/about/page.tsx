"use client";
import { getRandomNumber } from "@/utils/generateRansomNumber";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product"); // we can also add replace method to remove history navigation
  };
  if (getRandomNumber(2) == 1) {
    throw new Error("It is an Error");
  }
  return (
    <>
      <h1>About Page</h1>;<button onClick={handleClick}>Go to Product</button>;
    </>
  );
}
