
import './App.css'
import VideoPlayer from './component/atoms/VideoPlayer'
import HeadingText from './component/molecules/HeadingText'
import MainNavbar from './component/molecules/MainNavbar'
import OurPartners from './component/molecules/OurPartners'
import TopNavbar from './component/molecules/TopNavbar'
import HeroBanner from './component/template/HeroBanner'

function App() {


  return (
    <>
      <div>
        <TopNavbar />
        <MainNavbar />
        <HeroBanner />
        <OurPartners />
        <VideoPlayer/>
        <HeadingText/>


      </div>

    </>
  )
}

export default App
