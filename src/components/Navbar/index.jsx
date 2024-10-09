 
 
 
import { Button, IconButton, MobileNav, Navbar, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavbarSticky = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 & setOpenNav(false)
    )
  }, [])

  return (
    // <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
    <div className="font-roboto -m-6 max-h-full w-[calc(100%+48px)] overflow-scroll shadow-lg">
      <Navbar className="top-0 z-10 h-[104px] rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-lg fixed w-[105%]">
        <div className="flex items-center justify-between text-blue-gray-900 p-9 mt-[-20px]">
          {/* <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-bold text-[45px]"
          >
            DickyArdiar
          </Typography> */}
          <Typography 
            className="font-roboto text-[25px] font-bold"
            as="a"
            href="#"
            color="black"
          >
            DickyArdiar
          </Typography>
          <div className="flex items-center gap-3">
            {/* <div className="mr-4 hidden lg:block">{navMenu}</div> */}
            <div className="flex items-center">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block font-sans"
                onClick={() => window.location.assign('https://www.linkedin.com/in/dicky-ardiar-4460421b6/')}
              >
                <FaLinkedin className="w-9 h-9" />
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => window.location.assign('https://github.com/Dickyrdiar')}
              >
                <FaGithubSquare className="w-9 h-9" />
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {/* {navMenu} */}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <FaLinkedin />
            </Button>
            <Button fullWidth variant="text" size="sm" className="">
              <FaGithubSquare />
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>

  )
}

export default NavbarSticky