import Slider from "react-slick";
import { DataExperience } from "../../shared/dataWorkingExperience";


const CarouselSlider = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className="w-full max-w-6xl mx-auto mt-[-7%] px-2 sm:mx-[5%] md:mx-[10%] lg:mx-[13%]">
    <Slider {...settings}>
      {DataExperience?.map((val) => (
        <div key={val.id} className="flex justify-center mt-[-40px]">
          <img src={val.image} className="h-40 w-40" alt="experience icon" />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default CarouselSlider;
