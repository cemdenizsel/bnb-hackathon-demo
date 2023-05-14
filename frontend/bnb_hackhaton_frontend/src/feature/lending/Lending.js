import React from "react";
import "./lending.styles.css";
import { Button, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
const Lending = () => {

    const navigate = useNavigate()

    return (
        <div id="page-top">
            <header className="masthead mt-5">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-uppercase">SOL TEAM DeFi APP</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">A new approach for DeFi ecosystem</h2>
                            <Button className="btn btn-primary" onClick={()=>navigate("/app")}>Get Started </Button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="about-section text-center" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4">Built with Bootstrap 5</h2>
                            <p className="text-white-50">
                                Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                                <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                                The theme is open source, and you can use it for any purpose, personal or commercial.
                            </p>
                        </div>
                    </div>
                    <img className="img-fluid" src="./assets/img/ipad.png" alt="..." />
                </div>
            </section>
            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Mountains</h4>
                                        <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Mountains</h4>
                                        <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Mountains</h4>
                                        <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Mountains</h4>
                                        <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="signup-section" id="signup">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section bg-black pb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50">Munich, Germany</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a href="#!">dogukangundogan5@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a href="#!">cem.denizsel@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lending;