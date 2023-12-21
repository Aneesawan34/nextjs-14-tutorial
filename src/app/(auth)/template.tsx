// use for the template.tsx is same as layout.tsx but it contains re-rendering if nesting route update

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navStore = [
  {
    href: "/login",
    routename: "Login",
  },
  {
    href: "/register",
    routename: "Register",
  },
  {
    href: "/forget-password",
    routename: "Forget Password",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [inputVal, setInputVal] = useState<string>("");
  return (
    <>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        style={{ color: "black" }}
      />
      {navStore.map((navItem) => {
        return (
          <h1 key={navItem.routename}>
            Route name =&gt;
            <Link
              href={navItem.href}
              key={navItem.routename}
              className={
                pathName === navItem.href ? "font-bold" : "text-blue-500"
              }
            >
              {navItem.routename}
            </Link>
          </h1>
        );
      })}
      <br />
      {children}
    </>
  );
}
