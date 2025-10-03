import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import './style.css'



function Header() {
    return (
        <>
            <header>
                <div className="inner-header flex-navigation container">
                    <div className="brand-logo">
                        <a href="#">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <nav className="navbar main-menu">
                        <ul className="menu-list">
                            <li>About Us</li>
                            <li>why choose us</li>
                            <li>Service</li>
                            <li>Products</li>
                             <li>Support</li>
                        </ul>
                    </nav>
                    <div className="right-button">
                        <a href="#">Get Quote</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header