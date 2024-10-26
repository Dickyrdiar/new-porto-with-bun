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
    <div className=" mt-[70px] flex justify-between h-screen">
      <div className="container mx-auto p-4 w-[90rem] flex justify-between">
        <Typography className="font-roboto text-[42px] font-bold">
        Work
        Experience
        </Typography>

        <div className="w-[32rem] mt-[30px]">
        <Timeline>
         {CarrierPath?.map((val, index) => (
           <TimelineItem key={index} className="mt-[10px]"> 
           <TimelineConnector />
           <TimelineHeader className="h-3">
             <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="font-roboto text-[25px] font-bold">
                {val.companyName}
              </Typography>
           </TimelineHeader>
           <TimelineBody className="pb-5">
             <Typography variant="small" color="gary" className="font-normal text-gray-600 text-[17px] mt-[10px]">
                {val.location} | {val.yearPath} |  {val.position}
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