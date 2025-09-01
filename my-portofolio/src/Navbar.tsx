import { navItemsList } from './index'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
                {navItemsList.map((item) => (
                    <div className='nav-list-item' key={item.name}><a href={`#${item.name.toLowerCase()}`} className='nav-text'><span style={{color:item.color}}>{item.name.toUpperCase().charAt(0)}</span><span>{item.name.toUpperCase().slice(1)}</span></a></div>
                ))}
                {/* the navbar elements are moving all around maybe consider a fix */}
        </nav>
    </>
  )
}

export default Navbar