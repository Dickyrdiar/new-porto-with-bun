import { 
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography 
} from "@material-tailwind/react"
import { CarrierPath } from "../../shared/careerPatch"

const Experience = () => {
  return (
    <div className="mt-[70px] flex justify-center h-auto lg:h-screen">
      <div className="container mx-auto p-4 lg:w-[90rem] flex flex-col lg:flex-row justify-between items-center lg:items-start">
    
        <Typography className="font-roboto text-[28px] sm:text-[32px] lg:text-[42px] font-bold text-center lg:text-left mb-4 lg:mb-0">
          Work Experience
        </Typography>
    
        <div className="w-full lg:w-[32rem] mt-6 lg:mt-[30px] grid grid-cols-1 gap-4">
          <Timeline>
            {CarrierPath?.map((val, index) => (
              <TimelineItem key={index} className="mt-2"> 
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography variant="h6" color="blue-gray" className="font-roboto text-[18px] sm:text-[20px] lg:text-[25px] font-bold">
                    {val.companyName}
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-5">
                  <Typography variant="small" color="gray" className="font-normal text-gray-600 text-[14px] sm:text-[15px] lg:text-[17px] mt-2">
                    {val.location} | {val.yearPath} | {val.position}
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
    
      </div>
    </div>
  
  )
}

export default Experience