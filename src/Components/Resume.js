import resume_screenshot from '../images/resume_screenshot.png'
import '../styles/resume.css';

function Resume() {
    return (
        <div className='Resume'>
            <div className='resume-container'>
                <img src={resume_screenshot} alt='brock_resume' />
            </div>
        </div>
    )
}

export default Resume;