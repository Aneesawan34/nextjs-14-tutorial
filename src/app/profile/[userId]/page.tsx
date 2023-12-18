export default function UserId({ params }: { params: { userId: string } }) {
  return <h1>Users Page of {params.userId}</h1>;
}
