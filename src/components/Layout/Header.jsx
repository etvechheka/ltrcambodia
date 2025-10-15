import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import '../../style.css'
import { BrandLogo, MainBrand, MainNavigation, NavigationBar } from './styles'

function Header() {
    return (
        <>
            <header>
                <MainNavigation>
                    <MainBrand>
                        <BrandLogo src={Logo} alt='Logo' />
                    </MainBrand>
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
                </MainNavigation>

            </header>
        </>
    )
}

export default Header