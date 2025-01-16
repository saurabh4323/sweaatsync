import React from "react";

const WellnessHub = () => {
  const categories = [
    {
      id: "joggers",
      name: "Joggers",
      size: "large",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_442,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg1.png",
    },
    {
      id: "tshirts",
      name: "Tshirts",
      size: "small",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_535,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg2.png",
    },
    {
      id: "yogaPants",
      name: "Yoga Pants",
      size: "small",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_597,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg3.png",
    },
    {
      id: "yogaPants2",
      name: "Yoga Pants 2",
      size: "small",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_597,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg4.png",
    },
    {
      id: "yogaPants3",
      name: "Yoga Pants 3",
      size: "small",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_458,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg5.png",
    },
  ];

  return (
    <div
      className="rounded-3xl p-10 w-[80%] max-w-6xl mx-auto max-h-[70vh] mt-[-7%] z-[9999] absolute left-1/2 transform -translate-x-1/2"
      style={{ backgroundColor: "#4704cf" }} //9297b2
    >
      <div className="flex flex-col lg:flex-row gap-8 z-[99999]">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-bold text-black mb-2">Wellness Hub</h1>
          <p className="text-xl font-semibold text-white mb-8 max-w-sm">
            One place for all your well-being needs
          </p>

          <div className="flex flex-col gap-4">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-fit transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
              WORKOUT GEAR
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-fit transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
              LABS
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-fit transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
              MINDFULNESS
            </button>
          </div>
        </div>

        {/* Right Section - Grid */}
        <div className="lg:w-2/3 grid grid-cols-3 gap-4">
          {/* First column - Joggers full height */}
          <div className="col-span-1 h-full">
            <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] h-[400px]">
              <img
                src={categories[0].src}
                alt={categories[0].name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Second column - 2 stacked images */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] h-[192px]">
              <img
                src={categories[1].src}
                alt={categories[1].name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] h-[192px]">
              <img
                src={categories[2].src}
                alt={categories[2].name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Third column - 2 stacked images */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] h-[192px]">
              <img
                src={categories[3].src}
                alt={categories[3].name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] h-[192px]">
              <img
                src={categories[4].src}
                alt={categories[4].name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessHub;
