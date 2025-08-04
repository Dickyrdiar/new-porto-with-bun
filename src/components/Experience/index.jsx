import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { CarrierPath } from "../../shared/careerPatch";

const Experience = () => {
  return (
    <div className="mt-[70px] flex justify-center min-h-[50vh] lg:min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-12 w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
        {/* Title Section */}
        <div className="w-full lg:w-1/3">
          <Typography className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
            Work Experience
          </Typography>
        </div>

        {/* Timeline Section */}
        <div className="w-full lg:w-2/3">
          <Timeline>
            {CarrierPath?.map((val, index) => (
              <TimelineItem key={index}>
                <TimelineConnector />
                <TimelineHeader className="h-auto min-h-[40px] flex flex-col sm:flex-row items-start sm:items-start">
                  <TimelineIcon className="mt-1" />
                  <div className="ml-2 sm:ml-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-roboto text-lg sm:text-xl lg:text-2xl font-bold leading-snug"
                    >
                      {val.companyName}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-gray-600 text-sm sm:text-base lg:text-lg mt-1 block sm:hidden"
                    >
                      {val.location} | {val.yearPath} | {val.position}
                    </Typography>
                  </div>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600 text-sm sm:text-base lg:text-lg mt-1 hidden sm:block"
                  >
                    {val.location} | {val.yearPath} | {val.position}
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;