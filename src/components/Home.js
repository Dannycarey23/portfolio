import './Home.css';

const Home = () => {

    return (

        <div className="homeDiv">

            <h1><strong><u>Hello!</u></strong>  </h1>

            <p>
                I'm Danny. A Glasgow based junior software developer with a HND in Web Development. I recently completed
                CodeClan's 16 week Professional Software Development bootcamp and am actively seeking my first job in the industry.
            </p>

            <hr></hr>

            <p>The tools and technologies I have recently been learning:
                <ul>
                    <li> <img src='./assets/logos/js.svg' alt='javascript logo' className='tools' /></li>
                    <li> <img src='./assets/logos/react.svg' alt='React logo' className='tools' /></li>
                    <li> <img src='./assets/logos/node.svg' alt='Node logo' className='tools' /></li>
                    <li> <img src='./assets/logos/java.svg' alt='Java logo' className='tools' /></li>
                    <li> <img src='./assets/logos/python.svg' alt='Python logo' className='tools' /></li>
                    <li> <img src='./assets/logos/flask.svg' alt='Flask logo' className='tools' /></li>
                </ul>
                <ul>
                    <li> <img src='./assets/logos/express.svg' alt='Express logo' className='tools' /></li>
                    <li> <img src='/assets/logos/html.svg' alt='HTML logo' className='tools' /></li>
                    <li> <img src='/assets/logos/css.svg' alt='CSS logo' className='tools' /></li>
                    <li> <img src='/assets/logos/bootstrap.svg' alt='Bootstrap logo' className='tools' /></li>
                    <li> <img src='/assets/logos/tailwind.svg' alt='Tailwind logo' className='tools' /></li>
                </ul>
            </p>

            <hr></hr>

            <p>
                I also have a wealth of experience working in the financial services, construction and oil & gas industries. You can access my
                CV from the link at the top of the page or contact me via the links at the bottom.
            </p>

            <hr></hr>

            <p>
                In my spare time I like to play video games, read books and play guitar. I'm huge horror, fantasy & sci-fi fan.
            </p>

            <hr></hr>

        </div>
    )
}

export default Home;