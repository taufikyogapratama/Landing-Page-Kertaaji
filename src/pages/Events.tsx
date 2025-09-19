import CardCom from "../components/Card";
import Senam from "../assets/events/lomba-senam2.webp";
import LombaAnak from "../assets/events/lomba-anak.webp";
import empty from "../assets/no-event-removebg.png";

const Events = () => {
  return (
    <section id="events" className="bg-white dark:bg-gray-900">
      <div className="pt-16 pb-10">
        <h2 className="text-blue-500 text-center text-2xl md:text-4xl font-extrabold">
          Events
        </h2>
      </div>

      <div>
        <div className="pb-10">
          <h3 className="text-center text-xl font-bold dark:text-white">
            Upcoming Events
          </h3>
          <div>
            <img src={empty} alt="no upcoming events" className="mx-auto" />
          </div>
        </div>
      </div>
      {/* <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-8 md:grid md:grid-cols-3 md:justify-items-center md:gap-14">
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
      </div> */}

      <div>
        <div className="pb-10">
          <h3 className="text-center text-xl font-bold dark:text-white">
            Previous Events
          </h3>
        </div>
        <div className="pb-3 max-w-screen-xl mx-auto grid grid-cols-1 gap-8 md:grid md:grid-cols-3 md:justify-items-center md:gap-0 md:gap-y-10">
          <CardCom
            foto={Senam}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
          />
          <CardCom
            foto={LombaAnak}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
            paragraftRM2="Ini paragraft read more 2"
          />
          <CardCom
            foto={LombaAnak}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
            paragraftRM2="Ini paragraft read more 2"
          />
          <CardCom
            foto={Senam}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
          />
          <CardCom
            foto={LombaAnak}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
            paragraftRM2="Ini paragraft read more 2"
          />
          <CardCom
            foto={LombaAnak}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
            paragraftRM2="Ini paragraft read more 2"
          />
        </div>
        <div className="pb-14 flex justify-center">
          <button className="px-6 py-3.5 text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Show More
          </button>
        </div>
      </div>

      <div>
        <div className="pb-10">
          <h3 className="text-center text-xl font-bold dark:text-white">
            Acara Rutin
          </h3>
        </div>
        <div className="pb-3 max-w-screen-xl mx-auto grid grid-cols-1 gap-8 md:grid md:grid-cols-3 md:justify-items-center md:gap-0 md:gap-y-10">
          <CardCom
            foto={Senam}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
          />
          <CardCom
            foto={LombaAnak}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
            paragraftRM2="Ini paragraft read more 2"
          />
          <CardCom
            foto={LombaAnak}
            judul="Lomba Senam"
            paragraft="Ini paragraft utama"
            paragraftRM1="Ini paragraft read more 1"
            paragraftRM2="Ini paragraft read more 2"
          />
        </div>
        <div className="pb-14 flex justify-center">
          <button className="px-6 py-3.5 text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
