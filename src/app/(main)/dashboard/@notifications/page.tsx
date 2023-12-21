import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <br />
      <Link href="/dashboard/archived">Archived</Link>
    </Card>
  );
}
