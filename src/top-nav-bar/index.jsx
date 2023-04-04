
function TopNavBar(props) {

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
        </div>
    </nav>
    </>
  );
}

export default TopNavBar;
