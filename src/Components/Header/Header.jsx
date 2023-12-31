const Header = () => {
  return (
    <header className="p-8 flex justify-around absolute w-full items-center mobile:justify-between bg-terciary">
      <h1 className="text-brandColor font-dmSans text-32 font-bold leading-32 tracking-wide text-left">
        teslabank.
      </h1>
      <nav className="mobile:hidden">
        <ul className="flex items-center space-x-2 gap-16 ">
          <li className="font-inter text-16 font-medium leading-27 tracking-normal text-left cursor-pointer">
            Benefícios
          </li>
          <li className="font-inter text-16 font-medium leading-27 tracking-normal text-left cursor-pointer">
            Conta digital&nbsp;
            <img
              src="./images/dropdown.png"
              alt="dropdown"
              className=" inline"
            />
          </li>
          <li className="font-inter text-16 font-medium leading-27 tracking-normal text-left cursor-pointer">
            Suporte
          </li>
          <li className="font-inter text-16 font-medium leading-27 tracking-normal text-left cursor-pointer">
            Blog&nbsp;
            <img
              src="./images/dropdown.png"
              alt="dropdown"
              className=" inline"
            />
          </li>
        </ul>
      </nav>
      <ul className="flex gap-5 items-center ml-5 mobile:text-15 mobile:justify-evenly">
        <li>
          <button className="text-brandColor pt-1 pb-1 pl-0 pr-0">
            Entrar
          </button>
        </li>
        <li>
          <button className="bg-secondary pt-1 pb-1 pl-5 pr-5 rounded text-white">
            Abrir conta
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
