import '../styles/projects.css';

function Projects() {
    return (
        <div className='Projects'>
            <div className='projects-container'>
                <div className='links-container'>
                    <h2>Checkout My Projects!</h2>
                    <article>
                        <div className='project-name'>
                            <span>
                                <h3>GoTravel</h3>
                            </span>
                            <div>
                                <a href='https://github.com/brockmortenson/travel-tours-app' target='_blank' style={{ textDecoration: 'none', color: 'black' }} >- GitHub Repo</a>
                                <a href='https://gotravelproject.com/' target='_blank' style={{ textDecoration: 'none', color: 'black' }} >- Demo</a>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className='project-name'>
                            <span>
                                <h3>Creative Marketplace</h3>
                            </span>
                            <div>
                                <a href='https://github.com/etsy-pinterest-clone/etsy-pinterest-clone' target='_blank' style={{ textDecoration: 'none', color: 'black' }} >- GitHub Repo</a>
                                <a href='https://creativemarketplace.net/' target='_blank' style={{ textDecoration: 'none', color: 'black' }} >- Demo</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Projects;