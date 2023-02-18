import TopNavBar from '../top-nav-bar';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegisterAPI } from "../Utils/fetch";
import './index.css'

function Home(props) {
    const [currentLink, setCurrentLink] = useState('')

    const renderOutlet = () => {
        if (currentLink === '/') {
            window.location.replace('http://localhost:3000/');
            return null;
        } else {
            return <Outlet />;
        }
    };

    const register = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        RegisterAPI(username, password, fullName, email)
            .then((result) => {
                return result.json();
            })
            .then((result) => {
            console.log("result: ", result);
            console.log("localStorage: ", localStorage);
            if (result.success) {
              //go to dashboard / home
              // localStorage.setItem('user', JSON.stringify(result.userData)) // put back if you want to automatically login
              window.location.href = "http://localhost:3000/" // change to http://localhost:3000/ if you want to automatically login
            } else {
              // alert user that credentials is invalid
            }
            })
            .catch((error) => {
                console.log("error: ", error);
            });
        };
    return (
        <>
            <div className="w-100"
            style={{overflow:"hidden"}}>
                <div className="g-0">
                    <TopNavBar setCurrentLink={setCurrentLink} test={1}/>
                </div>
                <div className="w-100">
                    {renderOutlet()}
                    {window.location.pathname === "/" ? (
                            <>
                        <section id="hero-home">
                            <div className="home-hero-container overlay">
                                <div className="text-center responsive-word">
                                    <h1 className="banner-text border-bottom">DOTA 2 GCASH STORE</h1>
                                    <br/>
                                    <br />
                                    <br />
                                    <h4 id="custom-h4">Enjoy Dota 2 items with -20% off from Steam Market!</h4>
                                    <br />
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <Link to="/register" onClick={() => {
                                                props.setCurrentLink("/register");
                                                }}>
                                            <button  className="btn btn-danger"
                                            style={{
                                                padding:"15px 40px", fontWeight:"bold"
                                            }}>Register</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="responsive-word text-center" style={{
                            paddingLeft:"1rem",
                            paddingRight:"1rem"
                        }}>
                                    <h2 className="custom-text-heading">Lots of different items to choose from!</h2>
                        </div>
                        <div className="text-center d-flex justify-content-center w-100 center-img py-5"
                        style={{}}>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                    <img
                                    src="/great-sages-reckoning.png"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Great Sages Reckoning Arcana"
                                    />
                                    <img
                                    src="/reapers-wreath.png"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Repear's Wreath Immortal"
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                    src="/demon-eater.jpg"
                                    className="img-fluid shadow-1-strong rounded mb-4"
                                    alt="Demon Eater Arcana"
                                    />
                                    <img
                                    src="righteous-thunderbolt.png"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Righteous Thunderbolt Immortal"
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                    src="frost-avalanche.png"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Frost Avalanche Arcana"
                                    />
                                    <img
                                    src="/sylvan-vedette.jpg"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Sylvan Vedette Immortal"
                                    />
                                </div>
                            </div>
                        </div>
                        <section id="hero-home-2">
                            <div  className="container-fluid" style={{margin:"1rem", padding:"1rem"}}>
                        <div className="home-hero-container-2 overlay">
                            <div className="responsive-word text-center">
                                    <h1 className="banner-text">HOW IT WORKS</h1>
                                    <div className="border-bottom"></div>
                                <div className="container" id="featured-3">
                                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 d-flex justify-content-between">
                                        <div className="feature col text-center">
                                            <h1>1</h1>
                                            <h3>Find and pick items you want from our store.</h3>
                                        </div>
                                        <div className="feature col text-center">
                                            <h1>2</h1>
                                            <h3>Pay via GCash and list the items you want.</h3>
                                        </div>
                                        <div className="feature col text-center">
                                            <h1>3</h1>
                                            <h3>Receive trade offer from our automated bot for your item/s</h3>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                            <Link to="/register" onClick={() => {
                                                    props.setCurrentLink("/register");
                                                    }}>
                                                <button  className="btn btn-danger">Register</button>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                        </section>
                        <section className="h-100 form-bottom" style={{paddingBottom:"2rem"}}>
                            <div className="container py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-xl-10">
                                        <div className="card rounded-3 text-black bg-dark">
                                            <div className="row">
                                                <div className="col-lg-6 d-flex">
                                                    <img src="/dota-heroes.jpg" alt="Dota Heroes" className="img-fluid dota-heroes-img"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-body p-md-5 mx-md-4">
                                                        <div className="text-center">
                                                            <h2 className="text-uppercase text-center mb-5" style={{color:"#9eca19"}}>
                                                            Register now
                                                            </h2>
                                                        </div>
                                                        <form>
                                                            <div className="form-outline mb-4">
                                                                <input
                                                                type="text"
                                                                id="fullName"
                                                                className="form-control"
                                                                placeholder="Full Name"
                                                                />
                                                            </div>

                                                            <div className="form-outline mb-4">
                                                                <input
                                                                type="text"
                                                                id="username"
                                                                className="form-control"
                                                                placeholder="Username"
                                                                />
                                                            </div>

                                                            <div className="form-outline mb-4">
                                                                <input
                                                                type="email"
                                                                id="email"
                                                                className="form-control"
                                                                placeholder="Email"
                                                                />
                                                            </div>

                                                            <div className="form-outline mb-4">
                                                                <input
                                                                type="password"
                                                                id="password"
                                                                className="form-control"
                                                                placeholder="Password"
                                                                />
                                                            </div>

                                                            <div className="d-flex justify-content-center">
                                                                <button className="btn btn-danger" onClick={register}>
                                                                Register
                                                                </button>
                                                            </div>

                                                            <p className="text-center  mt-5 mb-0 text-light">Already have an account?{' '}
                                                                <Link href="#" to='/404' onClick={()=>{props.setCurrentLink('/404')}}>Login here
                                                                </Link>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </>

                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Home;