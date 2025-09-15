import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";

type Props = {
  judul: string;
  paragraft1: string;
  paragraft2?: string;
};

const ModalComp = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-28">
        Show More
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>{props.judul}</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.paragraft1}
            </p>
            {props.paragraft2 ? (
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {props.paragraft2}
              </p>
            ) : (
              false
            )}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalComp;
