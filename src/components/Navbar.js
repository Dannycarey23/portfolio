import './Navbar.css';

const Navbar = () => {

    return (
        <nav>
            <span className='nameText'>Danny Carey</span>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/projects">Projects</a>
                </li>

                <li>
                    <a href={require("./assets/cv.pdf")} target="_blank" rel='noreferrer' > CV</a>
                </li>

            </ul>
        </nav >
    )
}

export default Navbar;