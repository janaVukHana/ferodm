import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import IconHamburger from "./IconHamburger";
import { useStateContext } from "../contexts/ContextProvider";

export default function Navbar() {

    
    // const [showMenu, setShowMenu] = useState(false)
    const {showMenu, setShowMenu} = useStateContext()
    
    useEffect(() => {
        window.addEventListener('resize', (e) => {
            if(window.innerWidth > 600) {
                setShowMenu(false)
            }
        })
    }, [])

    return (
        <nav className="inner-container">
            <div className="logo-n-hamburger">
                <div className='logo'>
                    <NavLink to="/">
                        <div className="logo-content">
                            <div className="logo-img-container">
                                <img src="../images/logo/ferodm_logo.png" alt="logo" />
                            </div>
                            <div>
                                Fero D&M<br /><span>Gvožđara</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <IconHamburger />
            </div>
            <div className={showMenu ? 'nav-links show-menu' : 'nav-links'}>
                <ul>
                    <li><NavLink onClick={() => setShowMenu(false)} className={({isActive}) => isActive ? 'active':''} to="/">Home</NavLink></li>
                    <li><NavLink onClick={() => setShowMenu(false)} className={({isActive}) => isActive ? 'active':''} to="/asortiman">Asortiman</NavLink></li>
                    <li><NavLink onClick={() => setShowMenu(false)} className={({isActive}) => isActive ? 'active':''} to="/about-us">About Us</NavLink></li>
                    <li><NavLink onClick={() => setShowMenu(false)} className={({isActive}) => isActive ? 'active':''} to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}