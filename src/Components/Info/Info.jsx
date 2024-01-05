const Info = ({ img, alt, title, description }) => {
  return (
    <div className="flex flex-col">
      <div>
        <img src={img} alt={alt} className="w-384 h-378 rounded" />
      </div>
      <div>
        <h3 className="font-dmSans font-500 text-28 leading-34 -tracking--0.03">
          {title}
        </h3>
      </div>
      <div>
        <p className="font-inter font-500 text-16 leading-26">{description}</p>
      </div>
    </div>
  );
};

export default Info;
