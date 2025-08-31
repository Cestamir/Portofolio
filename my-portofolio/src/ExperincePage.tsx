
import Headline from './components/Headline'
import { expItemsList } from './index'


const ExperincePage = () => {
  return (
    <section>
        <Headline text='My experience' size={64} />
        <div className='exp-grid'>
          {expItemsList.map((item) => (
            <div key={item.name} className='grid-exp-item'>
              {item.name}
              {/* need to add simple logo pictures to the frame, when it will be hovered or clicked show more info (skills,info,status) */}
            </div>
          ))}
        </div>
    </section>
  )
}

export default ExperincePage