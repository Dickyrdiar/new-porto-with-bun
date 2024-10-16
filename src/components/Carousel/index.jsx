import Slider from "react-slick";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


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
    <div className="w-full max-w-4xl mx-[23.5%] mt-[-7%] text-center px-4">
      <Slider {...settings}>
        <div className="flex justify-center">
          <FaFacebook className="text-6xl text-blue-600" />
        </div>
        <div className="flex justify-center">
          <FaTwitter className="text-6xl text-blue-400" />
        </div>
        <div className="flex justify-center">
          <FaInstagram className="text-6xl text-pink-500" />
        </div>
        <div className="flex justify-center">
          <FaLinkedin className="text-6xl text-blue-700" />
        </div>  
        <div className="flex justify-center">
          <FaGithub className="text-6xl text-gray-800" />
        </div>
        <div className="flex justify-center">
          <FaInstagram className="text-6xl text-pink-500" />
        </div>
        <div className="flex justify-center">
          <FaInstagram className="text-6xl text-pink-500" />
        </div>
        <div className="flex justify-center">
          <FaInstagram className="text-6xl text-pink-500" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
