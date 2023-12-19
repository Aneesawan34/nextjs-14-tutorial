import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Default layout metadata", // it will execute if no child pages added with metadata
    template: "%s | layout template metadata", // it will run with child title value
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={{ backgroundColor: "#ADD8E6", padding: "1rem" }}>
        Header
      </header>
      {children}
      <footer
        style={{
          backgroundColor: "#ADD8E6",
          padding: "1rem",
        }}
      >
        Footer
      </footer>
    </>
  );
}
