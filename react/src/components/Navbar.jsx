import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <a href="#">Fero D&M<br /><span>Gvožđara</span></a>
            </div>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'active':''} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active':''} to="/about-us">About Us</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active':''} to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}