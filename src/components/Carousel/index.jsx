import Slider from "react-slick";
// import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import PhicosImage from '../../assets/logo-phicos-green.svg'
import IstImage from '../../assets/infosys.svg'
import MuslimPergi from '../../assets/MuslimPergi-new.svg'
import Qatros from '../../assets/Qatros.svg'
import Bx from '../../assets/BX.svg'


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
    <div className="w-full max-w-6xl mx-[15%] mt-[-7%] px-2">
      <Slider {...settings}>
        <div className="flex justify-center mt-[-40px]">
          <img src={PhicosImage} className="h-40 w-40"/>
        </div>
        <div className="flex justify-center  mt-[-40px]">
          <img src={IstImage} className="h-40 w-40" />
        </div>
        <div className="flex justify-center  mt-[-40px]">
          <img src={MuslimPergi} className="h-40 w-40" />
        </div>
        <div className="flex justify-center  mt-[-40px]">
          <img src={Qatros} className="h-40 w-40" />
        </div>
        <div className="flex justify-center  mt-[-40px]">
          <img src={Bx} className="h-40 w-40" />
        </div>
        {/* <div className="flex justify-center">
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
        </div> */}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
