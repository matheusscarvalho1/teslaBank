import PersonCard from "../PersonCard/PersonCard";
const Depoiments = () => {
  return (
    <>
      <div className="bg-primary mt-10 w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120 mobile:p-40">
          <span className="font-dmSans text-20 font-700 text-brandColor uppercase leading-27 mobile:text-15">
            #depoimentos
          </span>
          <h1 className="font-dmSans font-500 text-56 leading-61 tracking--1.68 mobile:text-25">
            <span className="block mobile:mb-2">
              TeslaBank fora das telinhas:
            </span>
            Veja o que estão falando sobre nós.
          </h1>
          <div className="flex mt-40 gap-10 mobile:flex-col">
            <PersonCard
              name="nikola tesla"
              depoiment="Estou realmente impressionado com a qualidade do serviço do TeslaBank. Desde que comecei a usá-lo, todas as minhas transações financeiras ficaram mais fáceis e ágeis."
            />
            <PersonCard
              name="steve jobs"
              depoiment="O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não preciso mais enfrentar filas em agências bancárias ou lidar com taxas e tarifas absurdas."
            />
            <PersonCard
              name="alan turing"
              depoiment="Eu era bastante cético em relação ao banco digital, mas decidi experimentar por curiosidade. Fiquei surpreso com a facilidade e segurança das transações, além de todas as funcionalidades exclusivas oferecidas."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Depoiments;
