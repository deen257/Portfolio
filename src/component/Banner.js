import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../asset/img/header-img1.svg'
import { Link } from 'react-router-dom'

const Banner = () => {
  const mailto = 'mailto:folorunshoayomide46@gmail.com'
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'> Welcome to my Portfolio</span>
            <h1>
              Hi, I'm Ayomide Folorunsho.
              <h2>Full-stack web developer</h2>
            </h1>
            <p>
              I am a web developer who loves building applications and solving
              problems. I am happy to collaborate with anyone interested in
              building together👍🏾.
              <br />
              Stepping into Web3.
            </p>
            <Link
              to='#'
              onClick={(e) => {
                window.location.href = mailto
                e.preventDefault()
              }}
            >
              <button onClick={() => console.log('connect')}>
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </Link>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='header img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Banner
