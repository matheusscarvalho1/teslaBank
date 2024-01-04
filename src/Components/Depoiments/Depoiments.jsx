import PersonCard from "../PersonCard/PersonCard";
const Depoiments = () => {
  return (
    <>
      <span className="font-dmSans text-20 font-700 text-brandColor uppercase leading-27">
        #depoimentos
      </span>
      <h1>
        <span className="bold block">TeslaBank fora das telinhas:</span>
        Veja o que estão falando sobre nós.
      </h1>
      <div className="flex">
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
    </>
  );
};

export default Depoiments;
