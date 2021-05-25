import resume_webdev_scr from '../images/resume_webdev_scr.png'
import '../styles/resume.css';

function Resume() {
    return (
        <div className='Resume'>
            <div className='resume-container'>
                <img src={resume_webdev_scr} alt='brock_resume' />
            </div>
        </div>
    )
}

export default Resume;