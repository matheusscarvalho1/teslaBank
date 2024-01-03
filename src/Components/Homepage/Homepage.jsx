const Homepage = () => {
  return (
    <>
      <div className="flex flex-col item-center justify-center w-full">
        <div className="justify-left ml-auto mr-auto">
          <div className="mt-40 p-20">
            <h1 className="font-dmSans text-88 font-medium leading-97 tracking-wide text-left">
              <span className="block">TeslaBank</span>seu banco digital.
            </h1>
            <h3 className="font-inter text-24 font-medium leading-41 tracking-normal text-left text-darkScale10">
              Com teslaBank, você pode realizar transferências bancárias com
              zero taxa e pagar suas contas.
            </h3>
          </div>
          <ul className="grid grid-cols-2 gap-4 font-Inter">
            <li>
              <img src="./images/check.png" alt="checkbox" className="inline" />
              <p className="inline font-500 text-18 ml-2 leading-32">
                Transferência instantânea
              </p>
            </li>
            <li>
              <img src="./images/check.png" alt="checkbox" className="inline" />
              <p className="inline font-500 text-18 ml-2 leading-32">
                Pagamentos em todo o mundo
              </p>
            </li>
            <li>
              <img src="./images/check.png" alt="checkbox" className="inline" />
              <p className="inline font-500 text-18 ml-2 leading-32">
                Sem taxas absurdas
              </p>
            </li>
            <li>
              <img src="./images/check.png" alt="checkbox" className="inline" />
              <p className="inline font-500 text-18 ml-2 leading-32">
                100% pensando em você
              </p>
            </li>
          </ul>
          <div className="flex gap-10">
            <button className="bg-secondary pt-1 pb-1 pl-5 pr-5 rounded text-white">
              Abrir uma conta →
            </button>
            <img
              src="./images/apple-store.svg"
              alt="Apple Store"
              className=""
            />
            <img
              src="./images/play-store.svg"
              alt="Play Store"
              className="inline"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
