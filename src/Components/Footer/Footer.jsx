const Footer = () => {
  return (
    <footer className="bg-terciary p-5 text-center flex justify-around">
      <p className=" text-darkScale10 font-dmSans font-500 text-18 leading-24 mobile:text-10">
        Copyright © 2024.{" "}
        <span className="font-200">Todos os direitos reservados</span>
      </p>
      <span className=" font-dmSans text-16 leading-20 text-brandColor font-500">
        Powered by <span className="font-bold">MatheusCarvalho</span>
      </span>
    </footer>
  );
};
export default Footer;
