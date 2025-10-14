import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import '../../style.css'

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
                            <li><a href="about">About Us</a></li>
                            <li><a href="other">why choose us</a></li>
                            <li><a href="service">Service</a></li>
                            <li><a href="product">Products</a></li>
                             <li><a href="support">Support</a></li>
                        </ul>
                    </nav>
                    <div className="right-button">
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header