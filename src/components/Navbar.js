import './Navbar.css';
import cv from './../DannyCareyCV.docx'

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
                    <a href={cv} target="_blank" rel='noreferrer' > CV</a>
                </li>

            </ul>
        </nav >
    )
}

export default Navbar;