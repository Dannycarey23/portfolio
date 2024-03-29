import './Projects.css';
import Carousel from './Carousel';

const Projects = () => {

    let vetPics = [
        { url: 'assets/vetPics/1.png', title: 'Homepage' },
        { url: 'assets/vetPics/2.png', title: 'All Vets' },
        { url: 'assets/vetPics/3.png', title: 'A Vet' },
        { url: 'assets/vetPics/4.png', title: 'All Pets' },
        { url: 'assets/vetPics/5.png', title: 'A Pet' }
    ];

    let blackJackPics = [
        { url: 'assets/blackJackPics/blackjackHome.png', title: 'Homepage' },
        { url: 'assets/blackJackPics/blackjackGameplay1.1.png', title: 'How the game looks at the start' },
        { url: 'assets/blackJackPics/blackjackGameplay1.2.png', title: 'How the game looks at the end' },
        { url: 'assets/blackJackPics/blackjackGameplay2.1.png', title: 'Another start game' },
        { url: 'assets/blackJackPics/blackjackGameplay2.2.png', title: 'Another end game' },
        { url: 'assets/blackJackPics/blackjackUserstats.png', title: 'The user stats page' },
    ]

    let subSamPics = [
        { url: 'assets/subSamPics/1.png', title: 'Title Screen' },
        { url: 'assets/subSamPics/2.png', title: 'Level 1' },
        { url: 'assets/subSamPics/3.png', title: 'First Fight' },
        { url: 'assets/subSamPics/4.png', title: 'Stage Complete Screen' },
        { url: 'assets/subSamPics/5.png', title: 'Level 2' },
        { url: 'assets/subSamPics/6.png', title: 'Final Fight' },
        { url: 'assets/subSamPics/7.png', title: 'Game complete Screen' },
    ]
    let dinoChromePics = [
        { url: 'assets/dinoPics/1.png', title: 'Game ready' },
        { url: 'assets/dinoPics/2.png', title: 'Game started' },
        { url: 'assets/dinoPics/3.png', title: 'Game end, highscore recorded' },
        { url: 'assets/dinoPics/4.png', title: 'Game restarted showing previous highscore' },
    ]

    return (
        <div className="projectsDiv">

            <div className="project">

                <div className='projectTop'>
                    <h2><u><strong>Hutchison's Vets</strong></u></h2>
                </div>

                <div className='carousel'>
                    <Carousel pics={vetPics} />
                </div>

                <div className='projectBottom'>
                    <p>This was the first project I created during my Professional Software Development bootcamp at CodeClan. </p>
                    <p>The project was completed in just under 1 week and was built using Python, Flask, HTML, CSS & MySQL</p>
                    <ul>
                        <li>
                            <a href="https://github.com/Dannycarey23/vet_project" className='repoLink'>Vet Repo</a>
                        </li>
                    </ul>
                </div>

            </div>


            <hr></hr>


            <div className="project">

                <div className='projectTop'>
                    <h2><u><strong>BlackJack</strong></u></h2>
                </div>

                <div className='carousel'>
                    <Carousel pics={blackJackPics} />
                </div>

                <div className='projectBottom'>
                    <p>This was the first group project that I took part in during the CodeClan bootcamp.</p>
                    <p>Our 4 man team built the app in just 1 week. The brief is available to read on the Github readme file.</p>
                    <ul>
                        <li>
                            <a href="https://github.com/Dannycarey23/blackjack2" className='repoLink'>BlackJack Repo</a>
                        </li>
                    </ul>
                </div>
            </div>


            <hr></hr>


            <div className="project">

                <div className='projectTop'>
                    <h2><u><strong>Subway Samurai: The Provost Awakens</strong></u></h2>
                </div>

                <div className='carousel'>
                    <Carousel pics={subSamPics} />
                </div>

                <div className='projectBottom'>
                    <p>This is the Capstone project that was built as part of a 5 man group project at the end of the CodeClan bootcamp.</p>
                    <p>The project was built over 2 weeks. We used React, HTML, CSS, Java, SpringBoot, HowlerJS. </p>
                    <ul>
                        <li><a href="https://github.com/Dannycarey23/SubwaySamurai_frontend" className='repoLink'>SubSam Front-End Repo</a></li>
                        <li><a href="https://github.com/Dannycarey23/SubwaySamurai_backend" className='repoLink'>SubSam Back-End Repo</a></li>
                    </ul>
                </div>
            </div>


            <hr></hr>


            <div className="project">
                <div className='projectTop'>
                    <h2><u><strong>Dino Chrome</strong></u></h2>
                </div>

                <div className='carousel'>
                    <Carousel pics={dinoChromePics} />
                </div>

                <div className='projectBottom'>
                    <p>While doing initial research for the capstone project, I discovered <a href="https://phaser.io/">Phaser</a>, a javascript game engine and took some time to complete a tutorial explaining how to build the google chrome dino browser game </p>
                    <p>The link to the original tutorial can be found in the repo's readme. </p>
                    <ul>
                        <li>
                            <a href="https://github.com/Dannycarey23/dinoChrome" className='repoLink'>Dino Chrome Repo</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr></hr>

        </div >
    )
}

export default Projects;