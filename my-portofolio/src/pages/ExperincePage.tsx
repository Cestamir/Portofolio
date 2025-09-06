
import { useState } from 'react'
import Headline from '../components/Headline'
import { expItemsList } from '../index'
import { SiTypescript } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaHatWizard } from "react-icons/fa";


// need to be responsive, in small view the rectangles are diffrent size

interface GridItem {
  id: number,
  name: string,
  info: string,
  skills: string,
  status: string
}

const ExperincePage = () => {

  const setIconForExperience =(iconType : string) => {
    switch(iconType){
        case "brain":
            return <FaHatWizard size={30}/>;
        case "code":
            return <SiTypescript size={30}/>;
        case "book":
            return <FaBook size={30}/>;
        case "language":
            return <IoLanguage size={30}/>;
        case "course":
            return <FaCode size={30}/>;
        case "freeCodeCamp":
            return <FaFreeCodeCamp size={30}/>;
        default: break;
    }
}

  const [selectedItem,setSelectedItem] = useState<GridItem | null>(null);

  const handleItemClick = (item : GridItem) => {
    setSelectedItem(item);
  }

  const closeItemDisplay = () => {
    setSelectedItem(null);
  }

  return (
    <section className='page' id='experience'>
        <Headline text='My experience' />
        <div style={{display: selectedItem ? "none" : "grid"}} className='exp-grid'>
          {expItemsList.map((item) => (
            <div onClick={() => handleItemClick(item)} key={item.id} className='grid-exp-item'>
              {setIconForExperience(item.type)}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className='exp-display'>
            <div className='exp-item-display'>
              <button onClick={closeItemDisplay} className='close-btn'>
                x
              </button>
              <h1>{selectedItem.name}</h1>
              <p className='exp-info-text'>{selectedItem.info}</p>
              <h3>{selectedItem.skills}</h3>
              <h4 style={selectedItem.status === "Completed" ? {color: "lightgreen"} : {color: "orange"}}>{selectedItem.status}</h4>
            </div>
          </div>
        )}
    </section>
  )
}

export default ExperincePage