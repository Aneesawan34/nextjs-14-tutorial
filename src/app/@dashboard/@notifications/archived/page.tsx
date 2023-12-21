import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <h1>Archived</h1>
      <br />
      <Link href="/">Notification</Link>
    </Card>
  );
}
