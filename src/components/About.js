import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About Me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>An ambitious software developer, a self-led learner and team player with intuitive problem-solving skills. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
                            </p>
                            <p className='slide-in-bottom'>
                            A fresh Computer Science and Engineering graduate. Currently looking for new opportunities in industry and willing to work on challenging and diverse projects with the latest technologies.
                            </p>
                        
                            <p className='slide-in-bottom'>
                            The technology I've worked on : <span className="text-red ls-2">ReactJS, Material UI,<br></br>
                                HTML, CSS, Javascript, Bootstrap, Python, SQL </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About