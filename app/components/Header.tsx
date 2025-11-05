'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header 
        className="header"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: 'transparent',
          padding: '1.5rem 4rem',
          paddingTop: '4rem',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 'auto'
        }}
      >
        <div style={{ flex: 1 }}></div>
        
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/LogoMain.png" 
            alt="Tafel van Twee Logo" 
            className="logo"
          />
        </a>
        
        <div className="header-right-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <nav className="header-nav desktop-nav">
            <a href="#catering">Catering</a>
            <a href="#over-ons">Over ons</a>
            <a href="#gallerij">Gallerij</a>
            <a href="#contact">Contact</a>
          </nav>

          <button 
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '0.5rem',
              zIndex: 1001,
              marginLeft: '1rem'
            }}
          >
          <span 
            className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            style={{
              width: '25px',
              height: '2px',
              backgroundColor: '#F1EFE7',
              transition: 'all 0.3s ease',
              display: 'block'
            }}
          ></span>
          <span 
            className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            style={{
              width: '25px',
              height: '2px',
              backgroundColor: '#F1EFE7',
              transition: 'all 0.3s ease',
              display: 'block'
            }}
          ></span>
          <span 
            className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            style={{
              width: '25px',
              height: '2px',
              backgroundColor: '#F1EFE7',
              transition: 'all 0.3s ease',
              display: 'block'
            }}
          ></span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={toggleMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}
      
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#catering" onClick={toggleMenu}>Catering</a>
        <a href="#over-ons" onClick={toggleMenu}>Over ons</a>
        <a href="#gallerij" onClick={toggleMenu}>Gallerij</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
    </>
  )
}

