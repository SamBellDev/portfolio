import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">My projects</Link>
            <Link to="/contact">Contact me</Link>
        </nav>
    )
}

export default Navbar