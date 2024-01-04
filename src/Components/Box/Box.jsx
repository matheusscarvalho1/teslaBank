const Box = ({ img, alt, title, description }) => {
  return (
    <div className="flex mt-10 mb-10">
      <img src={img} alt={alt} className="inline w-60 h-60" />
      <div className="flex flex-col ml-5 mb-5">
        <div>
          <h3 className="font-DMsans text-24 font-medium leading-41 tracking-normal">
            {title}
          </h3>
        </div>
        <div className="font-inter text-16 font-400 leading-21 tracking-normal text-left text-darkScale10 mt-3">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
