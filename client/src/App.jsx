
import './App.css'
import VideoPlayer from './component/atoms/VideoPlayer'
import BenifitsCards from './component/molecules/BenifitsCards'
import HeadingText from './component/molecules/HeadingText'
import MainNavbar from './component/molecules/MainNavbar'
import OurPartners from './component/molecules/OurPartners'
import TopNavbar from './component/molecules/TopNavbar'
import Benifits from './component/template/Benifits'
import Courses from './component/template/Courses'
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
        <Benifits />
        <Courses/>


      </div>

    </>
  )
}

export default App
