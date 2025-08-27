import './App.css'
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
        <h1>Expand your team</h1>
        <Navbar/>
        <HomePage/>
        <WorkPage/>
        <ContactPage/>
        <VisionPage/>
        <ExperincePage/>
        {/* NAVBAR, (work, contact, vision, experience), focus, hide when scrolling down appears when scrolling up, oval rectangle shape with glass border
        

        HOMEPAGE, eye catching visual or background with my name and titul, when scrolling down or hitting the arrow down, immediatly switches to the first item from navbar section

        WORK

        CONTACT github,linkedn,email,X[dont forget to post your progress here and commit daily to github] + About yourself ? maybe diffrent section.

        VISION, i will become a software developer possibly software enginer, interests - physics,astronomy,sound,lifestyle,biohacking,hacking etc.

        EXPERIENCE, technologies used, technologies working with, technologies mastered or really prollific, mention courses and books !!

        BONUS, make clickable elements interactive and add sounds and visual effects like blur or glitter, edit basic cursor, add buttons for sound on/off and performance 


        */}

      </main>
    </>
  )
}

export default App
