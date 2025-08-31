import Headline from "./components/Headline"



const WorkPage = () => {
  return (
    <section className="page" id='work'>
      <Headline text="My work" size={64}/>
      <p>In construction. </p>
      {/* moved the introduction from vision page here */}
      <p>Over past 12 months i have been working on my skills in web development to improve my overall programing knowledge. Since then i have been interested into all technical things and i want to join them with my current wisdom in other fields. To this day ia have mastered body training and sports to maximalize my performance and health to be more effective in functioning and learning through my everyday life. I have studied biology, chemistry, physics, philosopy, mathematics, pschychology, astronomy, teology, managment and meditation to became better by any means. Now i want to pursue my projects including: biohacking-app, flat-garden-box, food-recipe-bible, space-levelup</p>
    </section>
  )
}

export default WorkPage