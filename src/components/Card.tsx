import { Card } from "flowbite-react";
import ModalComp from "./Modal";

type props = {
  foto: string;
  judul: string;
  paagraft: string;
  paragraftRM1: string;
  paragraftRM2?: string;
};

const CardCom = (props: props) => {
  return (
    <Card
      className="max-w-80 mx-auto md:max-w-sm  md:mx-0"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={props.foto}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.judul}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.paagraft}
      </p>
      <ModalComp
        judul={props.judul}
        paragraft1={props.paragraftRM1}
        paragraft2={props.paragraftRM2 ? props.paragraftRM2 : ""}
      />
    </Card>
  );
};

export default CardCom;
