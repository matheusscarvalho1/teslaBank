import Item from "../Item/Item";
const Help = () => {
  return (
    <>
      <div className="bg-terciary mt-10 w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120 flex flex-col justify-center items-center">
          <span className="font-dmSans text-20 font-700 text-brandColor uppercase leading-27">
            #ajuda
          </span>
          <h2 className="font-dmSans font-500 text-56 leading-73 tracking--0.03 mb-5">
            Ficou alguma dúvida?
          </h2>
          <h4 className="font-inter font-400 text-24 leading-29 mb-20">
            Confira nossa lista de perguntas frequentes que recebemos
          </h4>
          <Item
            img1="./images/smartphone.png"
            alt1="Ajuda"
            title="Como posso abrir uma conta bancária?"
            img2="./images/dropdown-2.png"
            alt2="Dropdown"
          />
          <Item
            img1="./images/smartphone.png"
            alt1="Ajuda"
            title="Qual é o meu saldo atual?"
            img2="./images/dropdown-2.png"
            alt2="Dropdown"
          />
          <Item
            img1="./images/smartphone.png"
            alt1="Ajuda"
            title="Como faço para transferir dinheiro para outra conta?"
            img2="./images/dropdown-2.png"
            alt2="Dropdown"
          />
        </div>
      </div>
    </>
  );
};

export default Help;
