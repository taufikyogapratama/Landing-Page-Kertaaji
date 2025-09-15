import Logo from "../assets/logo.svg";

const Home = () => {
  return (
    <>
      <section id="home" className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto h-[600px] md:h-[700px] md:pt-0 p-4 flex flex-col justify-center md:justify-between md:flex-wrap md:flex-row-reverse">
          {/* <div className="max-w-screen-xl mx-auto h-screen md:pt-6 p-4 flex flex-col justify-center md:justify-between md:flex-wrap md:flex-row-reverse"> */}
          <div className="logo w-full md:w-[50%] mt-16 md:mt-14 md:flex md:justify-end">
            <img
              src={Logo}
              className="w-[250px] mx-auto md:mx-0 md:w-[500px] md:mt-[-100px]"
              alt="Logo"
            />
          </div>
          <div className="kalimat md:w-[50%] flex justify-center md:items-center mt-12 md:mt-0">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-center md:text-left mb-1.5 md:mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Keluarga Taruna Muda Jitar Dukuh
              </h1>
              <a
                href="#contact"
                className="px-6 py-3.5 text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
