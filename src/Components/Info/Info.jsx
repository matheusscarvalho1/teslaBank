const Info = ({ img1, alt1, title, description, info, img2, alt2 }) => {
  return (
    <div className="flex flex-col max-w-320">
      <div className="w-fit">
        <img src={img1} alt={alt1} className="w-368 h-318 rounded-16 mb-5" />
      </div>
      <div>
        <h3 className="font-dmSans font-500 text-28 leading-34 -tracking--0.03 mb-30 text-left">
          {title}
        </h3>
      </div>
      <div>
        <p className="font-inter font-500 text-16 leading-26 text-left">
          {description}
        </p>
        <div className="cursor-pointer mt-20 w-fit ">
          <small className="font-inter underline font-600 leading-17 uppercase text-brandColor ">
            {info}
          </small>
          <img src={img2} alt={alt2} className="ml-2 inline w-15" />
        </div>
      </div>
    </div>
  );
};

export default Info;
