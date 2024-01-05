import Card from "../Card/Card";

const Advantages = () => {
  return (
    <>
      <div className="bg-terciary mt-10 w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120">
          <div className="flex flex-col max-w-483">
            <span className="font-dmSans text-20 font-700 text-brandColor uppercase leading-27">
              #inovação
            </span>
            <h2 className="font-dmSans text-56 font-500 leading-61 tracking--0.03">
              Quais as vantagens de usar{" "}
              <span className="text-brandColor">TeslaBank</span>?
            </h2>
          </div>
          <div className="grid gap-5 mt-10 w-full">
            <Card
              img="./images/credit-card.png"
              alt="Cartão de crédito"
              title="Cartão TeslaBank"
              description="O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da TeslaBank, uma instituição financeira líder em inovação e tecnologia."
              option="Veja as opções"
              customClass="col-start-1 "
            />
            <Card
              img="./images/shopping-cart.png"
              alt="Carrinho de compra"
              title="Investimentos"
              description="O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento exclusivos e cashback em investimentos."
              option="Conheça os investimentos"
              customClass="col-start-2 "
            />
            <Card
              img="./images/clock.png"
              alt="Relógio"
              title="Atendimento 24h"
              description="No TeslaBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana."
              option="Veja as opções"
              customClass="col-start-3 "
            />
            <Card
              img="./images/shield.png"
              alt="Proteção"
              title="Segurança"
              description="Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado."
              option="Conheça as seguranças"
              customClass="col-start-2 row-start-2"
            />
            <Card
              img="./images/percent.png"
              alt="Porcentagem"
              title="Sem taxas"
              description="Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas."
              option="Como funciona"
              customClass="col-start-3 row-start-2"
            />
            <Card
              img="./images/gift.png"
              alt="Presente"
              title="Receba prêmios"
              description="Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios."
              option="Veja como"
              customClass="col-start-4 row-start-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Advantages;
