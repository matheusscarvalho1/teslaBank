const Card = ({ img, alt, title, description, option }) => {
  return (
    <div className="flex flex-col gap-5 rounded-4 bg-primary p-5 max-w-483">
      <img src={img} alt={alt} className="w-35 h-35" />
      <h3 className="font-dmSans font-500 text-18 leading-32 tracking-0.252">
        {title}
      </h3>
      <p className="font-inter font-500 text-14 leading-24 ">{description}</p>
      <span className="font-inter underline font-600 leading-17 uppercase text-brandColor cursor-pointer">
        {option}
      </span>
    </div>
  );
};

export default Card;