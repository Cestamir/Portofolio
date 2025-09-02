
import { footerList } from "."
// make a infinite slow loop of credits and footer information (luna dev css)

const Footer = () => {


  return (
    <>
        <footer className="slider">
            <div className="footer-list">
              {footerList.map((item) => (
                <div className="slider-item" style={{animationDelay: `calc(10s / 10 *${item.id} -1)`}}>{item.name}</div>
              ))}
            </div>
        </footer>
    </>
  )
}

export default Footer