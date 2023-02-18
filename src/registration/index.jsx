import { RegisterAPI } from "../Utils/fetch";
import { Link } from "react-router-dom";
function Register(props) {
   
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
          window.location.href = "https://dota2gcashstore.netlify.app/" // change to http://localhost:3000/ if you want to automatically login
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
            <section className="vh-80" style={{paddingTop: "5rem"}}>
                <div className="mask d-flex align-items-center h-100 bg-transparent">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card reg-body" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5 text-light">
                                    Create an account
                                    </h2>

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
                                        <Link href="#" to='/login' onClick={()=>{props.setCurrentLink('/login')}}>Login here
                                        </Link>
                                    </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default Register;
