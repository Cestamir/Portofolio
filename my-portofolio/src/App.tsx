import './App.css'
import Bonus from './Footer'
import ContactPage from './ContactPage'
import ExperincePage from './ExperincePage'
import HomePage from './HomePage'
import Navbar from './Navbar'
import VisionPage from './VisionPage'
import WorkPage from './WorkPage'



function App() {

  return (
    <>
      <main>
        <Navbar/>
        <HomePage/>
        <div className='stripes'></div>
        <WorkPage/>
        <div className='stripes'></div>
        <ContactPage/>
        <div className='stripes'></div>
        <VisionPage/>
        <div className='stripes'></div>
        <ExperincePage/>
        <div className='stripes'></div>
        <Bonus/>
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
