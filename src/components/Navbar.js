import './Navbar.css';
import Pdf from './../CV.pdf'

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
                    <a href={Pdf} target="_blank" rel='noreferrer' > CV</a>
                </li>

            </ul>
        </nav >
    )
}

export default Navbar;