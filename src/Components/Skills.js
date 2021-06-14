import '../styles/skills.css';

function Skills() {
    return (
        <div className='Skills'>
            <div className='skills-container'>
                <h1>Skills</h1>
                <section className='skill-img'>
                    <div>
                        <img src='https://git-scm.com/images/logos/downloads/Git-Icon-Black.png' alt='git' />
                        <p>Git</p>
                    </div>
                    <div>
                        <img src='https://sujanbyanjankar.com.np/wp-content/uploads/2019/01/React.js_logo-512.png' alt='react' />
                        <p>React.js</p>
                    </div>
                    <div>
                        <img src='https://img.icons8.com/color/452/nodejs.png' alt='node' />
                        <p>Node.js</p>
                    </div>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'alt='js' />
                        <p>JavaScript ES6</p>
                    </div>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png' alt='html' />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <img src='https://extasius.com/wp-content/uploads/2020/11/css3-logo.png' alt='css' />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <img src='https://workwiththebest.intraway.com/wp-content/uploads/sites/4/2016/11/asd-2.png' alt='postgresql' />
                        <p>PostgreSQL</p>
                    </div>
                    <div>
                        <img src='https://jasonhaxstuff.gallerycdn.vsassets.io/extensions/jasonhaxstuff/discord-js-tools/0.0.3/1530824658924/Microsoft.VisualStudio.Services.Icons.Default' alt='discord.js' />
                        <p>Discord.js</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills;