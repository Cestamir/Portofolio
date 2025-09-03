import { projects } from "../index"
import Card from "../components/Card"
import Headline from "../components/Headline"


const VisionPage = () => {
  return (
    <section className="page" id="vision">
        <Headline text="My vision" size={64}/>
        <div id="vision-grid" className="grid-page-layout">
            {projects.map((item) => (
                <Card key={item.name} headline={item.name} text={item.text} status={item.status} photoURL={item.pic}/>
            ))}
        </div>
    </section>
  )
}

export default VisionPage