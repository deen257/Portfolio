import node from '../asset/img/node.svg'
import gitone from '../asset/img/git1.svg'
import js from '../asset/img/javascript.svg'
import tailwind from '../asset/img/tailwind.svg'
import react from '../asset/img/react.svg'
import psql from '../asset/img/psql.svg'

const Skills = () => {
  return (
    <section className='skill ' id='skills'>
      <div className='container '>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <section className='container'>
                <h1>Skills</h1>
                <p className='middle'>
                  I've worked with many different technologies to develop and
                  maintain my projects.
                </p>
                <p className='middle'>These are my main technologies.</p>
                <article className='skills-container'>
                  <div className='skills'>
                    <img src={node} alt='' />
                    <h1>
                      NodeJS
                      <p className='text'>
                        Node and Express are my preferred method of building
                        backends.
                      </p>
                    </h1>
                  </div>
                  <div className='skills'>
                    <img src={react} alt='' />
                    <h1>
                      React
                      <p className='text'>
                        I build responsive, fluid UIs using React.
                      </p>
                    </h1>
                  </div>
                  <div className='skills'>
                    <img src={psql} alt='' />
                    <h1>
                      PostgresSQL
                      <p className='text'>
                        I typically use relational databases in my projects.
                      </p>
                    </h1>
                  </div>
                  <div className='skills'>
                    <img src={tailwind} alt='' />
                    <h1>
                      Tailwind
                      <p className='text'>
                        This is my preferred css libary for front-end work
                      </p>
                    </h1>
                  </div>
                  <div className='skills'>
                    <img src={js} alt='' />
                    <h1>
                      Javascript
                      <p className='text'>
                        Javascript provides extensive libaries for various
                        functionalities that i need.
                      </p>
                    </h1>
                  </div>
                  <div className='skills'>
                    <img src={gitone} alt='' />
                    <h1>
                      Git
                      <p className='text'>
                        Git is a tool I rely on everyday to manage my workflow.
                      </p>
                    </h1>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
