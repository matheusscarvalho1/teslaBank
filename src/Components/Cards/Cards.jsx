const Cards = () => {
  return (
    <>
      <div className="bg-primary flex-col mt-10 justify-center items-center flex w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120 text-center mobile:p-40">
          <div className="max-w-858">
            <span className="font-dmSans text-20 font-700 text-brandColor uppercase leading-24 -tracking--0.03 mb-5 mobile:text-15">
              #cartões
            </span>
            <h2 className="font-dmSans font-500 text-72 leading-79 tracking--0.03 mobile:text-36 mobile:leading-61">
              O cartão perfeito para suas necessidades.
            </h2>
            <p className="font-inter font-500 text-24 leading-38.5 mt-10 mobile:text-20">
              Encontre o cartão perfeito para suas necessidades financeiras.
              Seja para viagens ou compras do dia a dia, temos uma opção que se
              adapta a você.
            </p>
          </div>
          <img
            src="./images/cards-2.png"
            alt="cartões"
            className="m-auto mt-35"
          />
          <div className="flex justify-center mt-25 gap-5">
            <div>
              <button className="bg-brandColor pt-2 pb-2 pl-5 pr-5 rounded text-white border-2 font-inter text-20 font-500 leading-20 mobile:text-7 ">
                Abrir conta
              </button>
            </div>
            <div>
              <button className="bg-#E8E8E8 pt-2 pb-2 pl-5 pr-5 rounded text-darkScale10 border-2 font-inter text-20 font-500 leading-20">
                Comparar cartões
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
