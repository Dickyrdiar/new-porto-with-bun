import Slider from "react-slick";
import { DataExperience } from "../../shared/dataWorkingExperience";


const CarouselSlider = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,  // Show 5 icons at a time on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: false,  // Hide arrows for a cleaner look
    responsive: [
      {
        breakpoint: 1024,  // for large tablets and small desktops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,  // for tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,  // for mobile phones
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-[13%] mt-[-7%] px-2">
      <Slider {...settings}>
        {DataExperience?.map((val) => (
          <div key={val.id} className="flex justify-center mt-[-40px]">
            <img src={val.image} className="h-40 w-40" />
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default CarouselSlider;
