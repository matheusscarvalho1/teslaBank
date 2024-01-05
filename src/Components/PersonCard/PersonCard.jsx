const Depoiment = ({ name, depoiment }) => {
  return (
    <div class="flex flex-col max-w-384 gap-54 mr-35">
      <h2 className="font-dmSans font-700 text-darkScale10 text-24 uppercase">
        <img
          src="./images/topic.png"
          alt="tópico"
          className="w-3 h-30 inline mr-3"
        />{" "}
        {name}
      </h2>
      <p className="text-darkScale10 font-inter font-400 text-20 leading-34 italic">
        {depoiment}
      </p>
    </div>
  );
};

export default Depoiment;
