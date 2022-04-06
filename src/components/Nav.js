import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav-container">
            <h1>Aesthesia: <Link to="/discover">Nav</Link></h1>
        </div>
    );
}

export default Nav;