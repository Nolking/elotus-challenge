import { Link } from "react-router-dom";

const Footer = function() {
    return (
        <footer>
            <h3>Footer</h3>
            <h3> <Link to={"/"} onClick={() => window.scrollTo(0,0)} style={{color: "white", textDecoration: "none"}}>Return home</Link></h3>
        </footer>
    )
}

export default Footer;