import resume from '../images/resume.png';
import '../styles/resume.css';

function Resume() {
    return (
        <div className='Resume'>
            <div className='resume-container'>
                <img src={resume} alt='brock_resume' />
            </div>
        </div>
    )
}

export default Resume;