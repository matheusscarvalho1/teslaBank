import Box from "../Box/Box";

const About = () => {
  return (
    <>
      <div className="bg-primary mt-10 w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120 mobile:p-40">
          <div className="flex justify-evenly mb-100">
            <div className="mr-400 mobile:hidden">
              <img
                src="./images/app.png"
                alt="Aplicativo teslabank"
                className="absolute w-380 h-800"
              />
              <img
                src="./images/check-radio.png"
                alt="Checkbox"
                className="relative top-70 right-70"
              />
              <img
                src="./images/mouse.png"
                alt="mouse"
                className="relative top-64 left-80"
              />
              <img
                src="./images/like.png"
                alt="like"
                className="relative top-80 right-40"
              />
            </div>
            <div className="flex flex-col">
              <div className="max-w-696">
                <h2 className="font-dmSans text-56 font-500 leading-61 tracking--0.03 mb-5 ">
                  Abra sua conta{" "}
                  <span className="text-brandColor">gratuita</span>!
                </h2>
                <p className="font-inter text-22 font-500 leading-35.2">
                  Envie e receba dinheiro de forma mais prática e rápida. Faça
                  Pix, TEDs e transferências para todos os bancos sem pagar
                  nada.
                </p>
              </div>
              <div className="m-20">
                <Box
                  img=".\images\money.png"
                  alt="dinheiro"
                  title="Seu dinheiro rendendo mais"
                  description="Rendem mais que a poupança e você resgata quando quiser."
                />
                <hr />
                <Box
                  img=".\images\phone.png"
                  alt="celular"
                  title="Conta digital 100% grátis"
                  description="Transferências, boletos de depósitos e outros serviços gratuitos."
                />
                <hr />
                <Box
                  img=".\images\smile.png"
                  alt="smile"
                  title="Conta sem anuidade"
                  description="Conta digital com cartão de crédito sem anuidade sem complicação."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
