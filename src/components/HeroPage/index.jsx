import { Button, Typography } from "@material-tailwind/react";
import PROFILE from '../../assets/Image/Trivia-83.jpg';

const HeroPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 md:px-6 lg:px-10">
      <div className="text-center flex flex-col justify-center items-center max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
        
        <img
          className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full object-cover object-center"
          src={PROFILE}
          alt="Profile"
        />

        <Typography
          className="font-roboto text-center mt-4 md:mt-6 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]"
        >
          Available For New Project
        </Typography>

        <Typography
          className="font-roboto text-center font-bold mt-2 md:mt-4 text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px]"
        >
          Front End Developer
        </Typography>

        <div className="w-full px-2 md:px-0">
          <Typography
            className="font-roboto text-gray-500 mt-2 text-center text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]"
          >
            As an experienced web developer with a passion for Front End development,
            I have a strong understanding of modern web technologies and practices.
            Additionally, I am deeply interested in being a football goalkeeper.
          </Typography>
        </div>


        <div className="flex gap-4 mt-6">
          <Button 
            class="border border-gray-300 text-white py-2 px-4 rounded-lg bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black-500"
            variant="outlined"
            onClick={() => {window.location.href = 'mailto:dickyardiar1@gmail.com'}}
            size="lg"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
