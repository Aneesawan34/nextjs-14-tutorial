import Link from "next/link";
export default function Product() {
  return (
    <>
      <h1>The Products</h1>
      <p>
        <Link href={"/product/1"} key={"product 1"}>
          Product 1
        </Link>
      </p>
      <p>
        {" "}
        <Link href={"/product/2"} key={"product 2"}>
          Product 2
        </Link>
      </p>
      <p>
        {" "}
        <Link
          href={"/product/3"}
          key={"product 3"}
          replace //replace props can remove history for route
        >
          Product 3
        </Link>
      </p>
    </>
  );
}
