import resume from '../images/resume_screenshot.png'
import '../styles/resume.css';

function Resume() {
    return (
        <div className='Resume'>
            <div className='resume-container'>
                <img src={resume} alt='brock_resume' />
                <p>( Links are not clickable as this is a screenshot )</p>
            </div>
        </div>
    )
}

export default Resume;