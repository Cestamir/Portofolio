import { navItemsList } from './index'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
                {navItemsList.map((item) => (
                    <div className='nav-list-item' key={item.name} style={{color: `${item.color}`}}><a href={`#${item.name.toLowerCase()}`}>{item.name.toUpperCase()}</a></div>
                ))}
        </nav>
    </>
  )
}

export default Navbar