import './App.css'
import Footer from './Footer'
import ContactPage from './pages/ContactPage'
import ExperincePage from './pages/ExperincePage'
import HomePage from './pages/HomePage'
import Navbar from './Navbar'
import VisionPage from './pages/VisionPage'
import WorkPage from './pages/WorkPage'
import EmailPage from './pages/EmailPage'



function App() {

  return (
    <>
      <main>
        <Navbar/>
        <HomePage/>
        <WorkPage/>
        <ContactPage/>
        <VisionPage/>
        <ExperincePage/>
        <EmailPage />
        <Footer/>
        {/* NAVBAR focus, hide when scrolling down appears when scrolling up
        

        HOMEPAGE, eye catching visual or background with my name and titul, when scrolling down or hitting the arrow down, immediatly switches to the first item from navbar section

        WORK no work yet but try to show of all the skills you LEARNT CESTMIR on this page

        CONTACT make a LINKEDLN +  text About yourself

        VISION, i will become a software developer possibly software enginer, interests - physics,astronomy,sound,lifestyle,biohacking,hacking etc. add more visions

        EXPERIENCE, technologies used, technologies working with, technologies mastered or really prollific, mention courses and books !!, add logos to the exp items

        BONUS, make clickable elements interactive and add sounds and visual effects like blur or glitter, edit basic cursor, add buttons for sound on/off and performance 
        
        BONUS PAGE should be a small minigame

        */}

      </main>
    </>
  )
}

export default App
