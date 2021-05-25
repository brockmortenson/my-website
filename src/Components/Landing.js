import '../styles/landing.css';

function Landing() {
    return (
        <div className='Main'>
            <div className='main-container'>
                <div className='about'>
                    <section>
                        <img id='profile-pic' src='https://avatars.githubusercontent.com/u/78825072?v=4' alt='brock_photo' />
                        <div className='git-linked'>
                            <a href='https://github.com/brockmortenson' target='_blank'>
                                <img id='github' src='https://image.flaticon.com/icons/png/512/25/25231.png' />
                            </a>
                            <a href='https://www.linkedin.com/in/brock-mortenson-webdev/' target='_blank'>
                                <img id='linkedin' src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG32.png' />
                            </a>
                        </div>
                    </section>
                    <div className='biography'>
                        <h1>About Me</h1>
                        <p>I am a full-stack developer in Logan, Utah with a passion for computer science. In 2021, I attended an immersive coding bootcamp named Dev Mountain, where I trained in a full React.js stack for web development which included React, Node, Express, Redux, and PostgreSQL.</p>
                    </div>
                </div>
                <div className='skills'>
                    <article>
                        <h2>Skills</h2>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Landing;