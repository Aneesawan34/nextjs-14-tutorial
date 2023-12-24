import ImageContainerForModal from "@/components/imageContainerForModal";
import wondersImages, { WonderImage } from "../../../wonders";
import Modal from "@/components/modal";

export default function Id({ params }: { params: { id: string } }) {
  const photo: WonderImage = wondersImages.find(
    (photo) => photo.id === params.id
  )!;
  return (
    <Modal>
      <ImageContainerForModal photo={photo} />
    </Modal>
  );
}
