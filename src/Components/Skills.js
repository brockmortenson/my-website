import git from '../images/git.png';
import rt from '../images/react.png';
import nodejs from '../images/nodejs.png';
import js from '../images/js.png';
import html from '../images/html.png';
import css from '../images/css.webp';
import postgres from '../images/postgresql.png';
import sass from '../images/sass.png';
import expo from '../images/expo.jpg';
import discord from '../images/discord.Default';
import stripe from '../images/stripe.jpg';
import angular from '../images/angular.png';
import csharp from '../images/csharp.png';
import ts from '../images/ts.png';
import docker from '../images/docker.png';
import dotnet from '../images/dotnet.png';
import '../styles/skills.css';

function Skills() {
    return (
        <div className='Skills'>
            <div className='skills-container'>
                <h1>Skills</h1>
                <section className='skill-img'>
                    <div>
                        <img src={git} alt='git' />
                        <p>Git</p>
                    </div>
                    <div>
                        <img src={rt} alt='react' />
                        <p>React.js / React Native</p>
                    </div>
                    <div>
                        <img src={angular} alt='angular' />
                        <p>Angular</p>
                    </div>
                    <div>
                        <img src={csharp} alt='csharp' />
                        <p>C#</p>
                    </div>
                    <div>
                        <img src={dotnet} alt='dotnet core' />
                        <p>.Net Core</p>
                    </div>
                    <div>
                        <img src={nodejs} alt='node' />
                        <p>Node.js</p>
                    </div>
                    <div>
                        <img src={js} alt='js' />
                        <p>JavaScript ES6</p>
                    </div>
                    <div>
                        <img src={ts} alt='tss' />
                        <p>TypeScript</p>
                    </div>
                    <div>
                        <img src={html} alt='html' />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <img src={css} alt='css' />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <img src={postgres} alt='postgresql' />
                        <p>PostgreSQL</p>
                    </div>
                    <div>
                        <img src={sass} alt='sass' />
                        <p>SASS</p>
                    </div>
                    <div>
                        <img src={docker} alt='docker' />
                        <p>Docker</p>
                    </div>
                    <div>
                        <img src={expo} alt='expo' />
                        <p>Expo</p>
                    </div>
                    <div>
                        <img src={stripe} alt='stripe' />
                        <p>Stripe</p>
                    </div>
                    <div>
                        <img src={discord} alt='discord.js' />
                        <p>Discord.js</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills;