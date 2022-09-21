import resume from '../images/resume.png';
import myResume from '../images/Resume_2022.pdf';
import '../styles/resume.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    // const myResume = '../images/Resume_2022.pdf';
    return (
        <div className='Resume'>
            <div className='resume-container'>
                {/* <img src={resume} alt='brock_resume' /> */}
                <Document
                file={myResume}
                onLoadError={console.error}
                style={{width: '100vw', height: 'auto'}}>
                    <Page pageNumber={1}/>
                </Document>
            </div>
        </div>
    )
}

export default Resume;