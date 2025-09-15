import AboutUs from "../assets/about-us.webp";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-16">
          <h1 className="text-blue-500 text-center text-2xl md:text-4xl font-extrabold">
            About Us
          </h1>
        </div>
        <div className="px-6 pb-16 md:flex">
          <img
            src={AboutUs}
            alt="About Us"
            className="md:w-1/2 h-auto object-cover w-full"
          />
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-justify md:pl-6 md:w-1/2 md:text-left md:mt-0 md:text-xl">
            Kata "KERTAAJI" diambil dari bahasa Sansekerta yang berarti
            "DIHARGAI" dan juga memiliki kepanjangan yakni "Keluarga Taruna Muda
            Jitar Dukuh," adalah organisasi kepemudaan di Jitar Dukuh,
            Sumberarum, Moyudan, Sleman, Yogyakarta. Organisasi ini berkomitmen
            untuk mengembangkan potensi generasi muda di wilayahnya melalui
            berbagai kegiatan sosial, budaya, dan ekonomi. Dengan semangat
            gotong royong dan kebersamaan, KERTAAJI berupaya menciptakan
            lingkungan yang lebih baik serta memberdayakan pemuda untuk berperan
            aktif dalam pembangunan masyarakat. Kami percaya bahwa persatuan dan
            kebersamaan dapat membantu mewujudkan tujuan-tujuan besar dan
            membawa dampak positif yang signifikan bagi lingkungan sekitar.
          </p>
        </div>
        <div className="py-16">
          <h1 className="text-blue-500 text-center text-2xl md:text-4xl font-extrabold">
            Address
          </h1>
        </div>
        <div className="px-6 pb-16 md:flex md:flex-row-reverse">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.0778191659079!2d110.23247777307881!3d-7.763810784666404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1757672178015!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mx-auto w-full h-60 md:mx-0 md:w-[50%] md:h-96"
          ></iframe>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-justify md:w-1/2 md:text-left md:mt-0 md:text-xl">
            Dusun Jitar Dukuh, Sumberarum, Moyudan, Sleman, Yogyakarta Dusun
            Jitar Dukuh, Sumberarum, Moyudan, Sleman, Yogyakarta Terletak di
            Sumberarum, Moyudan, Sleman, Dusun Jitar Dukuh terdiri dari lima RT
            dan dua RW (RT 01–05 / RW 11–12) yang mencakup wilayah Jitar Dukuh,
            Bandelan, dan Gejagan. Dusun ini dikenal dengan suasana pedesaan
            yang harmonis, tradisi lokal yang kuat, serta sektor pertanian yang
            menjadi mata pencaharian utama warganya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
