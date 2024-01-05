const Item = ({ img1, alt1, title, img2, alt2 }) => {
  return (
    <div className="flex gap-5 mb-10 items-center justify-between w-650 cursor-pointer bg-red-100 rounded-85  p-5">
      <img src={img1} alt={alt1} className="w-35 h-35" />
      <h3 className="font-dmSans font-500 text-20 leading-26 ">{title}</h3>
      <img src={img2} alt={alt2} className="w-25 h-25" />
    </div>
  );
};

export default Item;
