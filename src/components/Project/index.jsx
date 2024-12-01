import { Chip, Typography } from "@material-tailwind/react"
import { DataProject } from "../../shared/dataProject";


const Project = () => {
  const handleClickWeb = (url) => {
    window.location.assign(url)
  }

  console.log()

  return (
    <>
      <div className="mt-[-160px] sm:mt-[-150px] md:mt-[-250px] lg:mt-[-320px] flex justify-center items-center h-screen px-4">
        <div className="text-center flex flex-col justify-center items-center">
          <Typography className="font-roboto text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold">
            Selected Project & Work
          </Typography>

          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
            <Typography className="font-roboto text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] mt-2 text-gray-500">
              Explore my curated showcase of the best projects, showcasing innovation, creativity, and impact.
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[-150px] sm:mt-[-200px] md:mt-[-250px] lg:mt-[-290px] px-4">
        <div className="container mx-auto p-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 place-items-center">
            {DataProject?.map((val, index) => (
              <div key={index} className="flex flex-col justify-center items-start w-full md:w-[90%] lg:w-[80%]">
                <div>
                  {val.image}
                </div>

                <Typography 
                  className="font-bold text-[16px] sm:text-[18px] mt-4 ml-4 text-start cursor-pointer"
                  onClick={() => handleClickWeb(val.url)}
                >
                  {val?.label}
                </Typography>

                <div className="flex flex-wrap gap-2 ml-4 mt-2">
                  {val.tags?.map((tag, idx) => (
                    <Chip variant="ghost" key={idx} value={tag.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project