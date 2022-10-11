import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../asset/img/logo.svg'
import linkedin from '../asset/img/nav-icon1.svg'
import twitter from '../asset/img/twitter.svg'
import git from '../asset/img/git.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [activelink, setActivelink] = useState('home')
  const [scroll, setScroll] = useState(false)
  const mailto = 'mailto:folorunshoayomide46@gmail.com'

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
        <Navbar.Brand href='#home'>
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
              Skills
            </Nav.Link>
            <Nav.Link
              href='#project'
              className={
                activelink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('project')}
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
              <a href='https://www.linkedin.com/in/folorunsho-ayomide-2369441b5/'>
                <img src={linkedin} alt='' />
              </a>
              <a href='https://github.com/deen257'>
                <img src={git} alt='' />
              </a>
              <a href='https://twitter.com/Ayomid_'>
                <img src={twitter} alt='' />
              </a>
            </div>
            <Link
              to='#'
              onClick={(e) => {
                window.location.href = mailto
                e.preventDefault()
              }}
            >
              <button
                className='vvd'
              >
                <span>Let's Connect</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
