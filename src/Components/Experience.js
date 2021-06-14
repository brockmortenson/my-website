import '../styles/experience.css';

function Experience() {
    return (
        <div className='Experience'>
            <div className='experience-container'>
                <h1>My Experience</h1>
                <section className='my-experience'>
                    <div>
                        <h2>Devmountain | Lehi, UT | February 2021 – May 2021 | Web Developer | Software Engineer (student)</h2>
                        <br />
                        <article>
                            - GoTravel -
                            <p style={{ fontStyle: 'italic' }}>React | Redux | NodeJS | Express | PostgreSQL | CSS | NodeMailer</p>
                            <p>Developed travel site using React and Node to provide a simple user experience for browsing and purchasing specific tours. Provided authentication and user credentials using Bcrypt to ensure a secure shopping experience. Integrated NodeMailer to provide a more interactive user experience.</p>
                        </article>
                        <br />
                        <article>
                            - Creative Marketplace -
                            <p style={{ fontStyle: 'italic' }}>React | Redux | NodeJS | Express | PostgreSQL | MongoDB | NodeMailer | Stripe | Socket.io | Firebase | Chart.js</p>
                            <p>Formulated a web application to allow users to share and browse posts as well as engage in an ecommerce application. Worked in a team of four using GitHub Teams and Trello in a remote environment. Integrated a dynamic search bar including selectable filters. Integrated several technologies to enhance user engagement.</p>
                        </article>
                        <br />
                        <article style={{ border: 'none' }}>
                            - Discord Bot -
                            <p style={{ fontStyle: 'italic' }}>Discord.js | JavaScript | Commando | Node.js</p>
                            <p>Developed a Discord bot with discord.js and Node.js to create an interactive bot for a Discord server. Incorporated the Commando framework to allow for an easier and simpler interactive user experience.</p>
                        </article>
                    </div>
                    <br />
                    <br />
                    <article className='church'>
                        <h2>Church of Jesus Christ of Latter-Day Saints | Arequipa, Peru | June 2018 - June 2020 | Service Missionary</h2>
                        <br />
                        <p style={{ fontStyle: 'italic'}}>Full time service missionary in the rural regions of Peru</p>
                        <p>Activities included addiction recovery, language teaching, proselyting, and manual labor.</p>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Experience;