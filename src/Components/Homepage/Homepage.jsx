const Homepage = () => {
  return (
    <>
      <div className="bg-primary w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120 mobile:pl-40 ">
          <div className="grid grid-cols-2 m-auto gap-100 mobile:justify-center mobile:items-center ">
            <div className="col-start-1 row-start-1">
              <h1 className="font-dmSans text-88 font-medium leading-97 tracking-wide text-left mobile:tracking-normal mobile:text-44 mobile:leading-41">
                <span className="block">TeslaBank</span>seu banco digital.
              </h1>
              <h3 className="font-inter text-24 font-medium leading-41 tracking-normal text-left text-darkScale10 mobile:text-16 mobile:mt-10">
                Com teslaBank, você pode realizar transferências bancárias com
                zero taxa e pagar suas contas.
              </h3>
              <ul className="grid font-Inter mt-10 gap-5 col-start-1 row-start-2">
                <li>
                  <img
                    src="./images/check.png"
                    alt="checkbox"
                    className="inline"
                  />
                  <p className="inline font-500 text-18 ml-2 leading-32">
                    Transferência instantânea
                  </p>
                </li>
                <li>
                  <img
                    src="./images/check.png"
                    alt="checkbox"
                    className="inline"
                  />
                  <p className="inline font-500 text-18 ml-2 leading-32">
                    Pagamentos em todo o mundo
                  </p>
                </li>
                <li>
                  <img
                    src="./images/check.png"
                    alt="checkbox"
                    className="inline"
                  />
                  <p className="inline font-500 text-18 ml-2 leading-32">
                    Sem taxas absurdas
                  </p>
                </li>
                <li>
                  <img
                    src="./images/check.png"
                    alt="checkbox"
                    className="inline"
                  />
                  <p className="inline font-500 text-18 ml-2 leading-32">
                    100% pensando em você
                  </p>
                </li>
              </ul>
              <div className="flex gap-10 mt-20 col-start-2 row-start-2 max-w-fit">
                <button className="bg-secondary pt-1 pb-1 pl-5 pr-5 rounded text-white max-w-fit">
                  Abrir uma conta
                  <img
                    src="./images/arrow-right-button.svg"
                    alt="flecha para direita"
                    className="inline w-15 ml-2"
                  />
                </button>
                <img
                  src="./images/apple-store.svg"
                  alt="Apple Store"
                  className="inline cursor-pointer"
                />
                <img
                  src="./images/google-play-store.svg"
                  alt="Google Play Store"
                  className="inline cursor-pointer"
                />
              </div>
            </div>
            <div className="m-auto col-start-2 row-start-1">
              <img
                src="./images/cards.png"
                alt="Tesla Bank"
                className="mobile:w-200 mobile:h-200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
