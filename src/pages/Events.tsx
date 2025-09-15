import CardCom from "../components/Card";
import Senam from "../assets/events/lomba-senam2.webp";
import LombaAnak from "../assets/events/lomba-anak.webp";

const Events = () => {
  return (
    <section id="events" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-8 md:grid md:grid-cols-3 md:justify-items-center md:gap-14">
        <CardCom
          foto={Senam}
          judul="Lomba Senam"
          paagraft="Ini paragraft utama"
          paragraftRM1="Ini paragraft read more 1"
        />
        <CardCom
          foto={LombaAnak}
          judul="Lomba Senam"
          paagraft="Ini paragraft utama"
          paragraftRM1="Ini paragraft read more 1"
          paragraftRM2="Ini paragraft read more 2"
        />
        <CardCom
          foto={LombaAnak}
          judul="Lomba Senam"
          paagraft="Ini paragraft utama"
          paragraftRM1="Ini paragraft read more 1"
          paragraftRM2="Ini paragraft read more 2"
        />
        <CardCom
          foto={Senam}
          judul="Lomba Senam"
          paagraft="Ini paragraft utama"
          paragraftRM1="Ini paragraft read more 1"
        />
        <CardCom
          foto={LombaAnak}
          judul="Lomba Senam"
          paagraft="Ini paragraft utama"
          paragraftRM1="Ini paragraft read more 1"
          paragraftRM2="Ini paragraft read more 2"
        />
        <CardCom
          foto={LombaAnak}
          judul="Lomba Senam"
          paagraft="Ini paragraft utama"
          paragraftRM1="Ini paragraft read more 1"
          paragraftRM2="Ini paragraft read more 2"
        />
        <CardCom
          foto={LombaAnak}
          judul="Lomba Senam"
          paagraft="Ini paragraft utama"
          paragraftRM1="Ini paragraft read more 1"
          paragraftRM2="Ini paragraft read more 2"
        />
      </div>
    </section>
  );
};

export default Events;
