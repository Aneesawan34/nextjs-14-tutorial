import { WonderImage } from "@/app/(main)/photo-feed/wonders";
import Image from "next/image";

export default function ImageContainerForModal({
  photo,
}: {
  photo: WonderImage;
}) {
  return (
    <>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4 text-black">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </>
  );
}
