import Link from "next/link";

export default function F1() {
  return (
    <>
      <h3>F1 Page</h3>
      <Link href={"/f1/f2"}>Go To F2</Link>
    </>
  );
}
