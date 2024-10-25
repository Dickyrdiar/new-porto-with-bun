import { Chip, Typography } from "@material-tailwind/react"
import { DataProject } from "../../shared/dataProject";


const Project = () => {
  const handleClickWeb = (url) => {
    window.location.assign(url)
  }

  return (
    <>
      <div className="mt-[-320px] flex justify-center items-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <Typography className="font-roboto text-[42px] font-bold">
          Selected Project & Work
        </Typography>

        <div className="w-[60%]">
          <Typography className="font-roboto text-[17px] mt-2" color="#bfbfbf">
            Explore my curated showcase of the best projects, showcasing innovation, creativity and impact.
          </Typography>
        </div>
      </div>
      </div>

      <div className="mt-[-290px] flex justify-center items-center">
        <div className="container mx-auto p-4 w-[100%]">
          <div className="grid grid-cols-2 gap-10 place-items-center">
            {DataProject?.map((val, index) => (
              <>
                <div key={index} className="grid justify-center items-start">
                  <div>
                    {val.image}
                  </div>

                  <Typography 
                    className="font-bold text-[18px] mt-5 ml-[20px] text-start cursor-pointer"
                    onClick={() => handleClickWeb(val.url)}
                  >
                    {val?.label}
                  </Typography>

                  <div className="flex justify-normal gap-2 ml-[20px] mt-[5px]">
                    {val.tags?.map((val, index) => (
                      <Chip variant="ghost" key={index} value={val.name} />
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Project