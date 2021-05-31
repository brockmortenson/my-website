import '../styles/landing.css';

function Landing() {
    return (
        <div className='Main'>
            <div className='main-container'>
                <div className='about'>
                    <section>
                        <img id='profile-pic' src='https://avatars.githubusercontent.com/u/78825072?v=4' alt='brock_photo' />
                        <div className='git-linked'>
                            <a href='https://github.com/brockmortenson' target='_blank' rel='noreferrer'>
                                <img id='github' src='https://image.flaticon.com/icons/png/512/25/25231.png'alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/brock-mortenson-webdev/' target='_blank' rel='noreferrer' >
                                <img id='linkedin' src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG32.png' alt='linkedin' />
                            </a>
                        </div>
                    </section>
                    <div className='biography'>
                        <h1>About Me</h1>
                        <p>I am a full-stack developer in Logan, Utah with a passion for both the hardware and software aspects of computers. I am a graduate of Devmountain's Web Development Program, where I trained in React-based applications, learning full-stack web development. The full-stack that I am proficient in includes React, Node, Express, and PostgreSQL.</p>
                        <br />
                        <p>In my free time I occasionally run marathons, play video games, and build computers. I also enjoy casually coding, learning new technologies along with their respective syntax, and developing web applications such as this website. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;