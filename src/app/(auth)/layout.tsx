"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <>
      {navStore.map((navItem) => {
        return (
          <h1>
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
