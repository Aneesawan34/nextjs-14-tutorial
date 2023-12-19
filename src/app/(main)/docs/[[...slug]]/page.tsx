export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Docs features id {params.slug[0]} and concepts id {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Doc features id {params.slug[0]}</h1>;
  }
  return <h1>Docs main page</h1>;
}
