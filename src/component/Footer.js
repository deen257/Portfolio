import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import logo from '../asset/img/logo.svg'
import linkedin from '../asset/img/nav-icon1.svg'
import twitter from '../asset/img/twitter.svg'
import git from '../asset/img/git.svg'



const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/folorunsho-ayomide-2369441b5/'>
                <img src={linkedin} alt='Icon' />
              </a>
              <a href='https://twitter.com/Ayomid_'>
                <img src={twitter} alt='Icon' />
              </a>
              <a href='https://github.com/deen257'>
                <img src={git} alt='Icon' />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer