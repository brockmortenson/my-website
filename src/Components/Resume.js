import resume from '../images/resume5.png';
import '../styles/resume.css';

function Resume() {
    return (
        <div className='Resume'>
            <div className='resume-container'>
                <p>( Links are not clickable as this is a screenshot )</p>
                <img src={resume} alt='brock_resume' />
            </div>
        </div>
    )
}

export default Resume;