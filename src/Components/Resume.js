import resume_webdev_scr from '../images/resume_webdev_scr.png'
import '../styles/resume.css';

function Resume() {
    return (
        <div className='Resume'>
            <div className='resume-container'>
                <div className='links-container'>
                    <article>
                        {/* <img id='github' src='https://image.flaticon.com/icons/png/512/25/25231.png' /> */}
                        <div>
                            <a href='https://github.com/brockmortenson/travel-tours-app' target='_blank' >- GoTravel GitHub Repo</a>
                            <a href='https://gotravelproject.com/' target='_blank' >- GoTravel Demo</a>
                        </div>
                    </article>
                    <article>
                        <div>
                            <a href='https://github.com/etsy-pinterest-clone/etsy-pinterest-clone' target='_blank' >- Creative Marketplace GitHub Repo</a>
                            <a href='https://creativemarketplace.net/' target='_blank' >- Creative Marketplace Demo</a>
                        </div>
                    </article>
                </div>
                <img src={resume_webdev_scr} alt='brock_resume' />
            </div>
        </div>
    )
}

export default Resume;