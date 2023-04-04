import { Link, useHistory } from "react-router-dom";
function TopNavBar(props) {
  console.log("props: ", props);

  const history = useHistory();

  function handleSignUpClick() {
    history.push("/register");
    props.setCurrentLink("/register");
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg custom-navBG custom-padding-navbar"
        aria-label="Offcanvas navbar large ">
        <div class="container-fluid">
            <div class="navbar-brand">
            <img class="branded-text" src="/dota2-logo.png" style={{paddingLeft:"5px"}} alt="logo" width="55" height="50"
            onClick={() => {
              props.setCurrentLink("/");
            }}
            />
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end custom-navBG" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header custom-navBG ">
                    <h2 class="offcanvas-title" id="offcanvasNavbar2Label" style={{color: "#9eca19"}}>DOTA 2 GCASH STORE</h2>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body custom-navBG ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                        <Link
                    to="/"
                    className="nav-link active"
                    onClick={() => {
                      props.setCurrentLink("/");
                    }} style={{color:"white"}}>
                    <h4>Home</h4>
                  </Link>
                        </li>
                        <li class="nav-item ">
                        <Link
                    to="/register"
                    className="nav-link"
                    onClick={handleSignUpClick}
                    style={{color:"white"}}>
                    <h4>Sign Up</h4>
                  </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  );
}

export default TopNavBar;
