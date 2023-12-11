

import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>            
            <div className="Categories">
                <NavLink to={`/category/camisas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camisas</NavLink>
                <NavLink to={`/category/pantalones`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/category/joggers`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Joggers</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar