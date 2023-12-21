import { getRandomNumber } from "@/utils/generateRansomNumber";

export default function Layout({ children }: { children: React.ReactNode }) {
  if (getRandomNumber(2) == 1) {
    throw new Error("It is an Error");
  }
  return (
    <>
      <h3>Feature ID Layout</h3>
      {children}
    </>
  );
}
