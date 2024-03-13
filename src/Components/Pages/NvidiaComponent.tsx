import React from 'react'
import './style/home.css'
import { Col, Row, Container } from 'react-bootstrap';
import "./style/home.css"
import discordHub from ".././assets/nvidiaInfo.jpeg"
import wave from '../assets/wave (1).svg'
import wave2 from '../assets/wave (3).svg'
import discordLogo from '../assets/nvidiaLogo.png';


const NvidiaComponent = () => {
    return (
        <div className='box ' >


            <Container fluid className=''>
                <Row className='pt-5 headerHeight homeBgColor'>
                    <Col className=' box2  d-flex justify-content-center  '>
                        <div>
                            <h3>Why I want to work here</h3>
                            <ul className='bigTextSize'>

                                <li>Culture: NVIDIA fosters innovation and collaboration, valuing diversity and providing a supportive environment.</li>
                                <li>Benefits: Competitive packages include retirement savings plans with company matching contributions up to $11,500, along with home and family care support.</li>
                                <li>Hybrid Work: Flexible arrangements enable a healthy work-life balance, with options for remote and in-office work.</li>
                                <li>Location: NVIDIA's headquarters in Santa Clara, California, offers a vibrant tech hub and a prime location for professional growth.</li>
                            </ul>
                        </div>

                    </Col>
                    <Col className='d-flex align-items-center justify-content-center '>
                        <img src={discordHub} className='bigImgSize2' />
                    </Col>
                </Row>
            </Container>
            <img src={wave} />
            <Container fluid>
                <Row className='headerHeight'>
                    <Col className=' box2  d-flex justify-content-center  '>
                        <div>
                            <h3 className='textColorMid'>Skills i'll have to learn</h3>
                            <p className='bigTextSize textColorMid'>

                                <ul>
                                    <li>Ability to translate requirements into end-to-end solutions</li>
                                    <li>Solid understanding of Linux, networking, and service deployment</li>
                                    <li>6+ years of experience in engineering in a related field</li>
                                    <li>Proficiency in one or more programming languages such as Java, Python, Go, or C++</li>
                                </ul>

                            </p>
                        </div>

                    </Col>
                    <Col className='d-flex align-items-center justify-content-center '>
                        <div>
                            <h3 className='textColorMid'>What goals would I like to achieve in this position?</h3>
                            <p className='bigTextSize textColorMid'>

                                <ul>
                                    <li>Drive impactful projects leveraging Nvidia's advanced technologies.</li>
                                    <li>Commit to continuous learning and growth in GPU computing, deep learning, and parallel computing.</li>
                                    <li>Make a positive impact on societal challenges and improve lives globally.</li>
                                    <li>Advance career and leadership skills through challenging roles and responsibilities.</li>
                                </ul>
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container>
            <div className='navColor'>
                <img src={wave2} />
                <Container className='navColor' fluid>

                    <Row className=' headerHeight pb-5'>

                        <Col className=' box2  d-flex justify-content-center  '>
                            <img src={discordLogo} className='logoSize2' alt="logo" />

                        </Col>
                        <Col className='d-flex align-items-center justify-content-center '>
                            <div>
                                <h3>Do I currently have the skillsets for the job?</h3>
                                <p className='bigTextSize'>


                                    <p>While I may not currently possess the full skillset required for the job, I do meet certain key requirements. I have a solid understanding of SQL and experience working with spatial databases. Additionally, I possess strong web development skills, with a particular proficiency in JavaScript and TypeScript.</p>


                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>





        </div>
    )
}

export default NvidiaComponent
