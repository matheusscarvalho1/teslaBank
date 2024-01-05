import PersonCard from "../PersonCard/PersonCard";
const Depoiments = () => {
  return (
    <>
      <div className="bg-primary mt-10 w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120">
          <span className="font-dmSans text-20 font-700 text-brandColor uppercase leading-27">
            #depoimentos
          </span>
          <h1 className="font-dmSans font-500 text-56 leading-61 tracking--1.68">
            <span className="block ">TeslaBank fora das telinhas:</span>
            Veja o que estão falando sobre nós.
          </h1>
          <div className="flex mt-20">
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
