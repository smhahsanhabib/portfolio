import React, { Fragment } from 'react'

import { SiReadthedocs } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Ahsan Habib</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BSc. In CSE</h4>
                                <h6 className="blue-label px-2 py-1">Jan 2018 - Apr 2022</h6>
                                <p className="m-0">East Delta University</p>
                                <p>Chattogram, Bangladesh</p>
                                <p>CGPA: 3.06 (84% marks)</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">July 2014 - June 2016</h6>
                                <p className="m-0">Govt. Hazi Mohammad Mohsin College</p>
                                <p>Chattogram, Bangladesh</p>
                                <p>GPA: 4.50</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2" style={{visibility:"hidden"}}>-</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Secondary School Certificate</h4>
                                <h6 className="blue-label px-2 py-1">2014</h6>
                                <p className="m-0">BGC Academy School & College</p>
                                <p>Chattogram, Bangladesh</p>
                                <p>GPA: Golden A+ (5.00) </p>
                                
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Junior School Certificate</h4>
                                <h6 className="blue-label px-2 py-1">2011</h6>
                                <p className="m-0">BGC Academy School & College</p>
                                <p>Chattogram, Bangladesh</p>
                                <p>GPA: Golden A+ (5.00) </p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Get my CV</h4>
                        <h1>
                            <a href="https://drive.google.com/file/d/1cjm9OYBh6t55UFjv1YOx6M_xQlUHej17/view?usp=share_link" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiReadthedocs className="zoom-on-hover"/>
                            </a> 
                        
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume