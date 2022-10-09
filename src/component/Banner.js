import React from 'react'

import { Container, Row , Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../asset/img/header-img.svg'



const Banner = () =>{

    return (
      <section className='banner' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'> Welcome to my Portfolio</span>
              <h1>
                Hi, I'm Ayomide Folorunsho
                <span className='wrap'> a web developer</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officia debitis consequuntur porro obcaecati dolor voluptatibus
                vitae numquam ipsum enim.
              </p>
              <button onClick={() => console.log('connect')}>
                Let's connect <ArrowRightCircle size={25}/>
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="header img" />
            </Col>
          </Row>
        </Container>
      </section>
    )
}
export default Banner;