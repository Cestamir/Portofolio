
import { useState } from 'react'
import Headline from './components/Headline'
import { expItemsList } from './index'


interface GridItem {
  id: number,
  name: string,
  info: string,
  skills: string,
  status: string
}

const ExperincePage = () => {

  const [selectedItem,setSelectedItem] = useState<GridItem | null>(null);

  const handleItemClick = (item : GridItem) => {
    setSelectedItem(item);
  }

  const closeItemDisplay = () => {
    console.log('Closing, selectedItem was:', selectedItem);
    setSelectedItem(null);
    console.log('selectedItem set to null');
  }

  return (
    <section>
        <Headline text='My experience' size={64} />
        <div style={{display: selectedItem ? "none" : "grid"}} className='exp-grid'>
          {expItemsList.map((item) => (
            <div onClick={() => handleItemClick(item)} key={item.id} className='grid-exp-item'>
              {item.name}
              {/* need to add simple logo pictures to the frame, when it will be hovered or clicked show more info (skills,info,status) */}
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className='exp-item-display'>
            <button onClick={closeItemDisplay} className='close-btn'>
              x
            </button>
            <h1>{selectedItem.name}</h1>
            <p>{selectedItem.info}</p>
            <h3>{selectedItem.skills}</h3>
            <h4>{selectedItem.status}</h4>
          </div>
        )}
    </section>
  )
}

export default ExperincePage