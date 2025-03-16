import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../../../images/mubaader-logo.png'
import { TbMenuDeep } from "react-icons/tb";

const Header = ({ language, setLanguage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const handleLanguage = () => {
        setLanguage(!language)
    }
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className='header'>
            <Link to="/" className="logo" onClick={closeMenu}>
                <img src={logo} alt="mubaader-logo" />
            </Link>

            <div className="mobile-menu-btn" onClick={toggleMenu}>
                <TbMenuDeep />
            </div>

            {language ? (
                <nav className={`nav-menu-en ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        {isHomePage && (
                            <>
                                <li><a href="#who-we-are" onClick={closeMenu}>Who We Are</a></li>
                                <li><a href="#what-we-do" onClick={closeMenu}>What We Do</a></li>
                            </>
                        )}
                        <li><Link to="/portfolio" onClick={closeMenu} className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
                        <li><Link to="/our-events" onClick={closeMenu} className={location.pathname === '/our-events' ? 'active' : ''}>Our Events</Link></li>
                        <li><Link to="/careers" onClick={closeMenu} className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
                        <li><Link to="/get-start" onClick={closeMenu} className={location.pathname === '/get-start' ? 'active' : ''}>Get Started</Link></li>
                    </ul>
                </nav>
            ) : (
                <nav className={`nav-menu-ar ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>الرئيسية</Link></li>
                        {isHomePage && (
                            <>
                                <li><a href="#who-we-are" onClick={closeMenu}>من نحن</a></li>
                                <li><a href="#what-we-do" onClick={closeMenu}>ما نقدم</a></li>
                            </>
                        )}
                        <li><Link to="/portfolio" onClick={closeMenu} className={location.pathname === '/portfolio' ? 'active' : ''}>معرض اعمالنا</Link></li>
                        <li><Link to="/our-events" onClick={closeMenu} className={location.pathname === '/our-events' ? 'active' : ''}>فعالياتنا</Link></li>
                        <li><Link to="/careers" onClick={closeMenu} className={location.pathname === '/careers' ? 'active' : ''}>الوظائف</Link></li>
                        <li><Link to="/get-start" onClick={closeMenu} className={location.pathname === '/get-start' ? 'active' : ''}>ابدا</Link></li>
                    </ul>
                </nav>
            )}

            <div className="language-switcher">
                <div className={`language-btn-en ${!language ? 'active' : ''}`} onClick={handleLanguage}>
                    <span>English</span>
                </div>
                <div className={`language-btn-ar ${!language ? '' : 'active'}`} onClick={handleLanguage}>
                    <span>العربية</span>
                </div>
            </div>
        </div>
    )
}

export default Header