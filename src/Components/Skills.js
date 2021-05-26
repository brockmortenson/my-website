import '../styles/skills.css';

function Skills() {
    return (
        <div className='Skills'>
            <div className='skills-container'>
                <h1>Skills</h1>
                <section className='skill-img'>
                    <div>
                        <img src='https://git-scm.com/images/logos/downloads/Git-Icon-Black.png' />
                        <p>Git</p>
                    </div>
                    <div>
                        <img src='https://sujanbyanjankar.com.np/wp-content/uploads/2019/01/React.js_logo-512.png' />
                        <p>React.js</p>
                    </div>
                    <div>
                        <img src='https://img.icons8.com/color/452/nodejs.png' />
                        <p>Node.js</p>
                    </div>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png' />
                        <p>JavaScript ES6</p>
                    </div>
                    <div>
                        <img src='http://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png' />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <img src='https://extasius.com/wp-content/uploads/2020/11/css3-logo.png' />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <img src='https://workwiththebest.intraway.com/wp-content/uploads/sites/4/2016/11/asd-2.png' />
                        <p>PostgreSQL</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills;