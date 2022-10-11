import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({title, description, imgUrl, live, source}) => {

    return (
      <Col sm={6} md={4}>
        <div className='proj-imgbx'>
          <img src={imgUrl} alt='' />
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
            <div>
              <a  href={live} className='btn'>Live </a>
              <a href={source} className='btn'>Source code</a>
            </div>
          </div>
        </div>
      </Col>
    )
}