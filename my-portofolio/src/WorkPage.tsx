import Headline from "./components/Headline"



const WorkPage = () => {
  return (
    <section className="page" id='work'>
      <Headline text="My work" size={64}/>
      <div className="work-text">Hello,<br/>My name is Cestmir Pavlasek and i'm from Czech Republic in middle Europe.<br/>Over past 13 months i have been working on improving my skills in web development to stand-up my overall programing knowledge.<br/> Since then i have been interested into all technical things and i want to enhace them with my current wisdom in other scientific fields.<br/>I have always been interested into future and upcoming technologies, quantum physics and everything sci-fi.<br/> To this day ia have mastered body training and sports to maximalize my physical and psychical performance, improve my health and achieve most of the brain function effectivness through everyday life.<br/> I have studied many fields which had helped me to continue with my journey - biology, chemistry, physics, philosopy, mathematics, pschychology, astronomy, teology, finance/managment, meditation and many more.. to became better by any means.<br/> Now i want to pursue my technical skills starting by making these projects come to life - 
      <ul>
        <li>biohacking-app</li>
        <li>flat-garden-box</li>
        <li>food-recipe-bible,</li>
        <li>space-levelup-blog</li>
      </ul>
      </div>
    </section>
  )
}

export default WorkPage