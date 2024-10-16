/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroPage from './components/HeroPage'
import NavbarSticky from './components/Navbar'
import CarouselSlider from "./components/Carousel";
import Project from "./components/Project";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
    'https://via.placeholder.com/600x400?text=Slide+4',
  ];

  return (
    <>
      <NavbarSticky />
      <HeroPage />
      <CarouselSlider />
      <Project />
      {/* <Carousel images={images} /> */}
      {/* <div className='flex justify-center text-center items-center h-screen'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div> */}
    </>
  )
}

export default App
