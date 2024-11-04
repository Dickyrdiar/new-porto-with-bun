import { Button, Typography } from "@material-tailwind/react"

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-auto px-4 sm:px-10 md:mt-[-130px]">
      <div className="w-full max-w-[40rem]">
        <Typography className="font-roboto text-[32px] sm:text-[42px] font-bold text-center sm:text-left">
          Got an idea about web development? Share with me
        </Typography> 
      </div>
    
      <div className="mt-4 sm:mt-0">
        <Button className="flex items-center gap-4" onClick={() => {window.location.href = 'mailto:dickyardiar1@gmail.com'}}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-black p-1 rounded"
          >
            <rect width="44" height="44" rx="4" fill="black" />
            <path
              d="M20 4H4C2.89 4 2 4.9 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6V7.97L12 12.99L4 7.97V6H20ZM4 18V9.5L11.5 14.5C11.78 14.69 12.22 14.69 12.5 14.5L20 9.5V18H4Z"
              fill="white"
            />
          </svg>
          Send your Idea Here
        </Button>
      </div>
    </div>
  )
}

export default Contact