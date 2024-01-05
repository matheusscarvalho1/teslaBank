const Download = () => {
  return (
    <div className="bg-#FFF8F9 mt-10 w-full">
      <div className="max-w-1440 ml-auto mr-auto pt-120 pb-120">
        <div className="flex flex-col">
          <h2 className="font-dmSans text-64 font-500 leading-71 tracking--0.03 max-w-686">
            Uma nova experiência em{" "}
            <span className="text-brandColor">serviços financeiros</span>.
          </h2>
          <p className="font-inter font-500 text-24 leading-38.5 max-w-696">
            Nossa abordagem inovadora e personalizada oferece uma experiência
            única para atender às suas necessidades.
          </p>
          <div class="flex gap-5 justify-start">
            <div>
              <button>
                <img
                  src="./images/apple-store-button.png"
                  alt="Apple Store"
                  className="w-200 h-60"
                />
              </button>
            </div>
            <div>
              <button>
                <img
                  src="./images/google-play-store-button.png"
                  alt="Google Play"
                  className="w-200 h-60"
                />
              </button>
            </div>
          </div>
          <div>
            <div className="bg-brandColor rounded-80 p-4 w-384 h-378 flex justify-center item-center">
              <img
                src="./images/union.png"
                alt="Union"
                className="w-133 h-163"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
