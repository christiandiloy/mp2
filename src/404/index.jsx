import TopNavBar from '../top-nav-bar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function NotFound(props) {
    const [setCurrentLink] = useState('')

    return (
        <>
            <div className="g-0">
                <TopNavBar setCurrentLink={setCurrentLink} test={1}/>
            </div>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <br />
                    <Link to="/" onClick={() => { props.setCurrentLink("/");}}>
                        Homepage
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;