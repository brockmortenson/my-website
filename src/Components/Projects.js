import goTravel from '../images/goTravelScrn.png';
import creativeMkrt from '../images/creativeMkrt.png';
import sgge from '../images/sgge-store.png';
import '../styles/projects.css';

function Projects() {
    return (
        <div className='Projects'>
            <div className='projects-container'>
                <h2>Checkout My Projects!</h2>
                <div className='links-container'>
                    <article>
                        <div className='project-name'>
                            <span>
                                <h3>SGGE Store</h3>
                            </span>
                            <div>
                                <a href='https://github.com/brockmortenson/ebay-clone' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} >- GitHub Repo</a>
                                <a href='https://sgge-store.com/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} >- Demo</a>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className='project-name'>
                            <span>
                                <h3>GoTravel</h3>
                            </span>
                            <div>
                                <a href='https://github.com/brockmortenson/travel-tours-app' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} >- GitHub Repo</a>
                                <a href='https://gotravelproject.com/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} >- Demo</a>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className='project-name'>
                            <span>
                                <h3>Creative Marketplace</h3>
                            </span>
                            <div>
                                <a href='https://github.com/etsy-pinterest-clone/etsy-pinterest-clone' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} >- GitHub Repo</a>
                                <a href='https://creativemarketplace.net/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} >- Demo</a>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className='project-name'>
                            <span>
                                <h3>Discord Bot</h3>
                            </span>
                            <div>
                                <a href='https://github.com/brockmortenson/discordjs-bot' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>- GitHub Repo</a>
                                <p>- No Demo</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='examples'>
                    <img src={sgge} alt='sgge-store' />
                    <img src={creativeMkrt} alt='creative-marketplace' />
                    <img src={goTravel} alt='goTravel-screenshot' />
                </div>
            </div>
        </div>
    )
}

export default Projects;