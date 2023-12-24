import wondersImages, { WonderImage } from "../wonders";
import ImageContainerForModal from "@/components/imageContainerForModal";

export default function Id({ params }: { params: { id: string } }) {
  const photo: WonderImage = wondersImages.find(
    (photo) => photo.id == params.id
  )!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <ImageContainerForModal photo={photo} />
      </div>
    </div>
  );
}
