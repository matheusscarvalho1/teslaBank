const Depoiment = ({ name, depoiment }) => {
  return (
    <div class="flex flex-col max-w-384 gap-54">
      <h2 className="font-dmSans font-700 text-darkScale10 text-24 uppercase">
        {name}
      </h2>
      <p>{depoiment}</p>
    </div>
  );
};

export default Depoiment;
