export async function fakeApiCalling(number: number) {
  await new Promise((resolve) => {
    return setTimeout(resolve, number);
  });
  return "called successfully";
}
