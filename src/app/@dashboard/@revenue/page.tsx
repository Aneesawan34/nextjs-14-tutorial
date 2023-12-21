import Card from "@/components/card";
import { fakeApiCalling } from "@/utils/fakeApiCallingWithTimer";

export default async function Revenue() {
  await fakeApiCalling(2000);

  return (
    <Card>
      <h1>Revenue</h1>;
    </Card>
  );
}
