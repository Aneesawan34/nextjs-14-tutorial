import Card from "@/components/card";
import { fakeApiCalling } from "@/utils/fakeApiCallingWithTimer";

export default async function Users() {
  await fakeApiCalling(3000);

  return (
    <Card>
      <h1>Users</h1>
    </Card>
  );
}
