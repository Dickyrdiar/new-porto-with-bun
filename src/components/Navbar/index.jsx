import { Button, IconButton, MobileNav, Navbar, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const NavbarSticky = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-roboto w-full overflow-x-hidden shadow-lg">
      <Navbar className="top-0 z-10 h-[104px] rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-lg fixed w-full">
        <div className="flex items-center justify-between text-blue-gray-900 p-4 lg:p-9 mt-[-20px]">
          <Typography 
            className="font-roboto text-[25px] font-bold"
            as="a"
            href="#"
            color="black"
          >
            DickyArdiar
          </Typography>
          <div className="flex items-center gap-3">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="text"
                size="sm"
                className="font-sans"
                onClick={() => window.location.assign('https://www.linkedin.com/in/dicky-ardiar-4460421b6/')}
              >
                <FaLinkedin className="w-7 h-7" />
              </Button>
              <Button
                variant="text"
                size="sm"
                onClick={() => window.location.assign('https://github.com/Dickyrdiar')}
              >
                <FaGithubSquare className="w-7 h-7" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        <MobileNav open={openNav}>
          <div className="flex flex-col items-center gap-4">
            <Button
              variant="text"
              size="sm"
              onClick={() => window.location.assign('https://www.linkedin.com/in/dicky-ardiar-4460421b6/')}
            >
              <FaLinkedin className="w-7 h-7" />
            </Button>
            <Button
              variant="text"
              size="sm"
              onClick={() => window.location.assign('https://github.com/Dickyrdiar')}
            >
              <FaGithubSquare className="w-7 h-7" />
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  )
}

export default NavbarSticky;
