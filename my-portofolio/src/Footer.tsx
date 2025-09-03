
import { footerList } from "."
// loop stutters when the animation ends needs a fix 

const Footer = () => {


  return (
    <>
    <footer className="slider">
      <div className="footer-list">
        {footerList.map((item) => (
          <div key={`original-${item.id}`} className="slider-item">
            {item.name}
          </div>
        ))}
        {footerList.map((item) => (
          <div key={`duplicate-${item.id}`} className="slider-item">
            {item.name}
          </div>
        ))}
      </div>
    </footer>
    </>
  )
}

export default Footer