const About = () => {
  return (
    <>
      <div className="justify-between item-center w-full h-screen">
        <div className="p-20">
          <div className="flex justify-evenly">
            <div>
              <img
                src="./images/app.png"
                alt="Aplicativo teslabank"
                className="absolute"
              />
              <img
                src="./images/check-radio.png"
                alt="Checkbox"
                className="relative top-20 right-20"
              />
              <img
                src="./images/mouse.png"
                alt="mouse"
                className="relative top-64 left-80"
              />
              <img
                src="./images/like.png"
                alt="like"
                className="relative top-80 right-11"
              />
            </div>
            <div className="flex flex-col ml-40">
              <div className="max-w-3xl">
                <h2 className="font-inter text-32 font-bold leading-41 tracking-normal">
                  Abra sua conta{" "}
                  <span className="text-brandColor">gratuita</span>!
                </h2>
                <p className="font-inter text-18 font-medium leading-41 tracking-normal text-left text-darkScale10">
                  Envie e receba dinheiro de forma mais prática e rápida. Faça
                  Pix, TEDs e transferências para todos os bancos sem pagar
                  nada.
                </p>
              </div>
              <div className="mt-20">
                <img
                  src="./images/money.png"
                  alt="dinheiro"
                  className="inline"
                />
                <h3>Seu dinheiro rendendo mais</h3>
                <p>Rendem mais que a poupança e você resgata quando quiser.</p>
                <hr />
                <img
                  src="./images/phone.png"
                  alt="celular"
                  className="inline"
                />
                <h3>Conta digital 100% grátis</h3>
                <p>
                  Transferências, boletos de depósito e outros serviços
                  gratuitos
                </p>
                <hr />
                <img src="./images/smile.png" alt="smile" className="inline" />
                <h3>Cartão sem anuidade</h3>
                <p>
                  Conta digital com cartão de crédito sem anuidade e sem
                  complicação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
