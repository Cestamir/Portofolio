import { navItemsList } from './index'

const Navbar = () => {
  return (
    <>
        <nav>
                {navItemsList.map((item) => (
                    <div className='nav-list-item' key={item.name} style={{color: `${item.color}`}}>{item.name.toUpperCase()}</div>
                ))}
        </nav>
    </>
  )
}

export default Navbar