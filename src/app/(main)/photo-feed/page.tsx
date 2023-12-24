import Link from "next/link";
import wondersImages from "./wonders";
import Image from "next/image";

export default function PhotoFeeds() {
  const Photos = [
    {
      name: "Photo 1",
      id: 1,
    },
    {
      name: "Photo 2",
      id: 2,
    },
    {
      name: "Photo 3",
      id: 3,
    },
  ];
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wondersImages.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
