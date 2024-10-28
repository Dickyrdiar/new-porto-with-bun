import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroPage from './components/HeroPage'
import NavbarSticky from './components/Navbar'
import CarouselSlider from "./components/Carousel";
import Project from "./components/Project";
import Experience from "./components/Experience";
import ExplorationProject from "./components/Exploration";

function App() {

  return (
    <>
      <NavbarSticky />
      <HeroPage />
      <CarouselSlider />
      <Project />
      <Experience />
      <ExplorationProject />
    </>
  )
}

export default App
