import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Projects I've Built</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/g-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/g-03.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/g-02.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Get Together</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://smhahsanhabib.github.io/get-together/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/smhahsanhabib/get-together" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><AiFillGithub/> Source Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/s-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/s-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">Text Man</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://smhahsanhabib.github.io/textconverter/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/smhahsanhabib/textconverter" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/r-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/r-02.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Routine Assistant</h5>
                            <div className="row d-flex justify-content-center">
                            <a href="https://smhahsanhabib.github.io/routineassistant.github.io/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/smhahsanhabib/routineassistant.github.io" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/ac-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/ac-02.png" className="d-block w-100" alt="..."/>
                                </div>
                
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">AC Remote</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://smhahsanhabib.github.io/AC-Remote.github.io/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/smhahsanhabib/AC-Remote.github.io" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/resume-1.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/resume-2.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/resume-3.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/resume-4.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Will Be Updated Soon</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="./" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><BsLaptop/> Watch Live</a>
                                <a href="./" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/tour-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-03.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-04.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-05.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Will Be Updated Soon</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="./" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><BsLaptop/> Watch Live</a>
                                <a href="./" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="#"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork