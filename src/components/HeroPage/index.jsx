import { Button, Typography } from "@material-tailwind/react"
import PROFILE from '../../assets/Image/Trivia-83.jpg'

const HeroPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <img
         className="h-40 w-40 rounded-full object-cover object-center"
          src={PROFILE}
          alt="nature image"
        />

         <Typography className="font-roboto text-[20px] mt-[12px]">
          Available For New Project
        </Typography>

        <Typography className="font-roboto text-[35px] font-bold">
          Front End Developer
        </Typography>

        <div className="w-[60%]">
          <Typography className="font-roboto text-[15px] mt-2" color="#bfbfbf">
          As an experienced web developer and passionate about Front End development, I have a strong understanding of modern web development technologies and practices and am also very interested in being a goalkeeper in football.
          </Typography>
        </div>

        <div className="flex w-max gap-4 mt-[35px]">
          <Button 
            className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black-500" 
            variant="outlined"
            onClick={() => {window.location.href = 'mailto:dickyardiar1@gmail.com'}}
            size="large"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroPage