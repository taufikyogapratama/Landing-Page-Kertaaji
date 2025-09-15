import LogoIG from "../assets/instagram.webp";

type Props = {
  foto: string;
  posisi: string;
  nama: string;
  instagramLink: string;
  instagramNama: string;
};

const Pengurus = (props: Props) => {
  return (
    <div className="pb-12">
      <img
        src={props.foto}
        alt="foto"
        className="w-60 rounded-full mx-auto lg:w-72"
      />
      <p className="text-center mt-4 font-bold dark:text-white">
        {props.posisi}
      </p>
      <p className="text-center dark:text-white mt-2">{props.nama}</p>
      <a
        href={props.instagramLink}
        className="mt-2 flex items-center gap-2 justify-center"
      >
        <img src={LogoIG} className="w-6 block" alt="ig" />
        <p className="text-gray-500 dark:text-gray-400">
          {props.instagramNama}
        </p>
      </a>
    </div>
  );
};

export default Pengurus;
