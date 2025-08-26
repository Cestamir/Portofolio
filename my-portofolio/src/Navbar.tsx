import { navItemsList } from './index'

const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                {navItemsList.map((item) => (
                    <li id={item.name.toLowerCase() + "-nav"} key={item.name} style={{color: `${item.color}`}}>{item.name.toUpperCase()}</li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default Navbar