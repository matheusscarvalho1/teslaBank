import Info from "../Info/Info";

const Blog = () => {
  return (
    <>
      <div className="bg-primary flex-col mt-10 justify-center align-center flex w-full">
        <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120 text-center">
          <div className="flex justify-between item-center">
            <div>
              <h2 className="font-dmSans text-64 font-500 leading-71 tracking--0.03">
                Blog
              </h2>
            </div>
            <div>
              <button>
                <span className="text-brandColor max-w-191">
                  Todas as postagens
                  <img
                    src="./images/arrow-right-button-red.svg"
                    alt="flecha para direita"
                    className="inline ml-2"
                  />{" "}
                </span>
              </button>
            </div>
          </div>
          <div className="flex mt-40">
            <Info
              src="./images/blog-1.png"
              alt="Business"
              title="Como começar a usar o TeslaBank para sua startup"
              description="Descubra como a sua startup pode se beneficiar dos serviços financeiros do TeslaBank. Nesta postagem, apresentamos um guia fácil para ajudá-lo a começar a usar o TeslaBank."
            />

            <Info
              src="./images/blog-2.png"
              alt="Finanças"
              title="10 coisas que ninguém te contou sobre o TeslaBank"
              description="Você está pensando em usar o TeslaBank para gerenciar suas finanças pessoais? Antes de decidir, confira esta postagem para descobrir 10 coisas que ninguém te contou sobre o TeslaBank."
            />
            <Info
              src="./images/blog-3.png"
              alt="Poupança"
              title="7 maneiras de melhorar seus hábitos de poupança"
              description="Você deseja economizar dinheiro, mas acha difícil manter bons hábitos de poupança? Confira esta postagem para descobrir sete maneiras eficazes de melhorar seus hábitos de poupança."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
