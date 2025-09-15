// import LogoIG from "../assets/instagram.webp";
import Pengurus from "../components/Pengurus";
// Foto Pengurus
import Doni from "../assets/foto-pengurus/doni.webp";
import Ahmad from "../assets/foto-pengurus/ahmad.webp";
import Alan from "../assets/foto-pengurus/alan.webp";
import Alin from "../assets/foto-pengurus/alin.webp";
import Anindita from "../assets/foto-pengurus/anindita.webp";
import Edwin from "../assets/foto-pengurus/edwin.webp";
import Kiki from "../assets/foto-pengurus/kiki.webp";
import Riski from "../assets/foto-pengurus/riski.webp";
import Via from "../assets/foto-pengurus/via.webp";

const Structure = () => {
  return (
    <section id="structure" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-16">
          <h1 className="text-blue-500 text-center text-2xl md:text-4xl font-extrabold">
            Structure
          </h1>
        </div>
        <div className="md:grid grid-cols-3">
          <Pengurus
            foto={Doni}
            posisi="Ketua"
            nama="Doni Kurniawan"
            instagramLink="https://www.instagram.com/doni_donee/"
            instagramNama="@doni_donee"
          />
          <Pengurus
            foto={Alan}
            posisi="Wakil Ketua"
            nama="Rahlan Yudhi"
            instagramLink="https://www.instagram.com/rahlannyudhi_/"
            instagramNama="@rahlannyudhi_"
          />
          <Pengurus
            foto={Anindita}
            posisi="Sekertaris 1"
            nama="Anindita Wulan"
            instagramLink="https://www.instagram.com/aninn.dtaa/"
            instagramNama="@aninn.dtaa"
          />
          <Pengurus
            foto={Via}
            posisi="Sekertaris 2"
            nama="Nandya Oktaviana Romadhoni"
            instagramLink="https://www.instagram.com/nandyaoktav/"
            instagramNama="@nandyaoktav"
          />
          <Pengurus
            foto={Kiki}
            posisi="Bendahara 1"
            nama="Rizqi Nurhidayah"
            instagramLink="https://www.instagram.com/rizqinrh_/"
            instagramNama="@rizqinrh_"
          />

          <Pengurus
            foto={Riski}
            posisi="Bendahara 2"
            nama="Rizki Fitria"
            instagramLink="https://www.instagram.com/riskifitriaa/"
            instagramNama="@riskifitriaa"
          />
          <Pengurus
            foto={Alin}
            posisi="Hubungan Masyarakat"
            nama="linita Maulia Lova"
            instagramLink="https://www.instagram.com/alntmlv_/"
            instagramNama="@alntmlv_"
          />

          <Pengurus
            foto={Ahmad}
            posisi="Publikasi Dekorasi dan Dokumentasi"
            nama="Ahmad Tohari"
            instagramLink="https://www.instagram.com/ahmdd_dto/"
            instagramNama="@ahmdd_dto"
          />
          <Pengurus
            foto={Edwin}
            posisi="Sarana dan Prasarana"
            nama="Muhammad Edwin Nurrohman"
            instagramLink="https://www.instagram.com/edwin_nurrohman07/"
            instagramNama="@edwin_nurrohman07"
          />
        </div>
      </div>
    </section>
  );
};

export default Structure;
