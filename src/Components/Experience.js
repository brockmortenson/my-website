import '../styles/experience.css';

function Experience() {
    return (
        <div className='Experience'>
            <div className='experience-container'>
                <h1>My Experience</h1>
                <section className='my-experience'>
                    <div>
                        <h2>Gold Computing | Provo, UT | July 2021 – Current | Junior Web Developer | Junior Software Developer</h2>
                        <br />
                        <article>
                            <p>Optimized and built loan applications to process thousands of loans a da.y</p>
                            <p>Participated in a team of developers to enhance and construct powerful and efficient client-facing applications to provide an amazing user experience.</p>
                            <p>Engaged in and undertook group projects relying heavily on tools such as Git, Azure Devops, and Microsoft Teams</p>
                        </article>
                        <br />
                        <h2>Devmountain | Lehi, UT | February 2021 – May 2021 | Web Developer | Software Engineer (student)</h2>
                        <br />
                        <article>
                            - GoTravel -
                            <p style={{ fontStyle: 'italic' }}>React | Redux | NodeJS | Express | PostgreSQL | CSS | NodeMailer</p>
                            <p>Developed travel site using React and Node to provide a simple user experience for browsing and purchasing specific tours. Provided authentication and user credentials using Bcrypt to ensure a secure shopping experience. Integrated NodeMailer to provide a more interactive user experience.</p>
                        </article>
                        <br />
                        <article style={{ border: 'none' }}>
                            - Creative Marketplace -
                            <p style={{ fontStyle: 'italic' }}>React | Redux | NodeJS | Express | PostgreSQL | MongoDB | NodeMailer | Stripe | Socket.io | Firebase | Chart.js</p>
                            <p>Formulated a web application to allow users to share and browse posts as well as engage in an ecommerce application. Worked in a team of four using GitHub Teams and Trello in a remote environment. Integrated a dynamic search bar including selectable filters. Integrated several technologies to enhance user engagement.</p>
                        </article>
                        <br />
                        <br />
                        <h2>Personal Projects</h2>
                        <br />
                        <article>
                            - SGGE -
                            <p style={{ fontStyle: 'italic' }}>React | Redux | NodeJS | Express | Massive | Bcrypt | PostgreSQL | CSS | Stripe</p>
                            <p>Developed an ecommerce application that provides users with the ability to search, view, save, and purchase items. Provided authentication and user credentials using Bcrypt to ensure a secure shopping experience. Integrated Stripe to provide a means of acquiring items.</p>
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