import { useStateContext } from "../contexts/ContextProvider"

export default function IconHamburger() {

    const {showMenu, setShowMenu} = useStateContext()

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="hamburger-icon">
            <button className={showMenu ? 'animate-hamburger' : ''} onClick={handleClick}>
                <div className="line line-top"></div>
                <div className="line line-middle"></div>
                <div className="line line-bottom"></div>
            </button>
        </div>
    )
}