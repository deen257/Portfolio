import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../asset/img/logo.svg'
import navIcon1 from '../asset/img/nav-icon1.svg'
import navIcon2 from '../asset/img/nav-icon2.svg'
import navIcon3 from '../asset/img/nav-icon3.svg'

const NavBar = () => {
  const [activelink, setActivelink] = useState('home')
  const [scroll, setScroll] = useState(false)

  const onUpdateActiveLink = (value) => {
    setActivelink(value)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar expand='md' className={scroll ? 'scroll' : ''}>
      <Container>
        <Navbar.Brand href='/'>
            <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link 
              href='#home'
              className={
                activelink === 'home' ? 'active navbar-link' : 'navbar'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activelink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Link
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activelink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href='#resume'
              className='navbar-link'
              onClick={() => onUpdateActiveLink('resume')}
            >
              Resmue
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.twitter.com'>
                <img src={navIcon1} alt='' />
              </a>
              <a href='https://www.twitter.com'>
                <img src={navIcon2} alt='' />
              </a>
              <a href='https://www.twitter.com'>
                <img src={navIcon3} alt='' />
              </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
