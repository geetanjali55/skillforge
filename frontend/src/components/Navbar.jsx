import React, { useState, useRef } from 'react'
import { navbarStyles } from '../assets/dummyStyles'
import logo from '../assets/logo.png'
import { Home, BookOpen, BookMarked, Users, Contact, Menu ,X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useClerk, UserButton, useAuth } from '@clerk/react'

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "About", icon: BookMarked, href: "/about" },
  { name: "Faculty", icon: Users, href: "/faculty" },
  { name: "Contact", icon: Contact, href: "/contact" },
]

const Navbar = () => {
  // Clerk
  const { openSignUp, isSignedIn } = useClerk()
  const { getToken } = useAuth()

  // Mobile menu
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Scroll
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  // Classes
  const desktopLinkClasses = ({ isActive }) =>
    `${navbarStyles.desktopItem} ${isActive ? navbarStyles.desktopNavItemActive : ''}`

  const mobileLinkClasses = ({ isActive }) =>
    `${navbarStyles.mobileMenuItem} ${isActive ? navbarStyles.mobileNavItemActive : navbarStyles.mobileMenuItemHover}`

  return (
    <nav
      className={`${navbarStyles.navbar} ${
        showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden
      } ${isScrolled ? navbarStyles.navbarScrolled : navbarStyles.navbarDefault}`}
    >
      <div className={navbarStyles.container}>
        <div className={navbarStyles.innerContainer}>
          {/* Logo */}
          <div className="flex items-center gap-3 select-none">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-cyan-600 font-serif">
              SkillForge
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={navbarStyles.desktopNav}>
            <div className={navbarStyles.desktopNavContainer}>
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end={item.href === "/"}
                    className={desktopLinkClasses}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon size={16} className={navbarStyles.desktopNavIcon} />
                      <span className={navbarStyles.desktopNavText}>{item.name}</span>
                    </div>
                  </NavLink>
                )
              })}
            </div>
          </div>

          {/* Auth buttons */}
          <div className={navbarStyles.authContainer}>
            {!isSignedIn ? (
              <button
                type="button"
                onClick={() => openSignUp({})}
                className={navbarStyles.createAccountButton ?? navbarStyles.loginButton}
              >
                <span>Create Account</span>
              </button>
            ) : (
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}

            {/* toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className={navbarStyles.mobileMenuButton}>
                {isOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div ref={menuRef} className={`${navbarStyles.mobileMenu} ${
            isOpen ? navbarStyles.mobileMenuOpen : navbarStyles.mobileMenuClosed}`}>
                <div className={navbarStyles.mobileMenuContainer}>
                    <div className={navbarStyles.mobileMenuItems}>
                        {navItems.map((item) => {
                            const Icon = item.icon
                            return (
                              <NavLink Key={item.name} to={item.href} end={item.href === "/"} className={isActive => mobileLinkClasses(isActive)}
                              onClick={() => setIsOpen(false)}>
                                <div className={navbarStyles.mobileMenuIconContainer}>
                                    <Icon size={18} className={navbarStyles.mobileMenuIcon} />
                                    </div>
                                    <span className={navbarStyles.mobileMenuText}>{item.name}</span>
                              </NavLink>
                            ) ;
                        })}
                    </div>
                </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar