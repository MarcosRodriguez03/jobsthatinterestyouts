import React from 'react'
import './style/home.css'
import { Col, Row, Container } from 'react-bootstrap';
import "./style/home.css"
import discordHub from ".././assets/microsoftInfo.jpeg"
import wave from '../assets/wave (1).svg'
import wave2 from '../assets/wave (3).svg'
import discordLogo from '../assets/microsoftLogo.png';


const MicrosoftComponent = () => {
    return (
        <div className='box ' >


            <Container fluid className=''>
                <Row className='pt-5 headerHeight homeBgColor'>
                    <Col className=' box2  d-flex justify-content-center  '>
                        <div>
                            <h3>Why I want to work here</h3>
                            <ul className='bigTextSize'>

                                <li>Culture: Microsoft fosters a culture of innovation, collaboration, and empowerment, where employees are encouraged to think creatively and make a meaningful impact.</li>
                                <li>Benefits: Microsoft offers competitive pay, bonuses, and stock awards based on individual performance, along with benefits designed to support a healthy lifestyle and future investment for employees and their families.</li>
                                <li>Hybrid Work: Microsoft provides hybrid work options, allowing employees to balance their professional and personal lives effectively.</li>
                                <li>Location: Microsoft's locations offer vibrant tech hubs and opportunities for professional growth.</li>
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
                                    <li>Passion for building highly performant scalable services</li>
                                    <li>Outstanding technical problem-solving and debugging skills</li>
                                    <li>Proficiency in one or more programming languages: C, C++, Java, or Python</li>
                                    <li>Familiarity with data structures and algorithms</li>
                                </ul>

                            </p>
                        </div>

                    </Col>
                    <Col className='d-flex align-items-center justify-content-center '>
                        <div>
                            <h3 className='textColorMid'>What goals would I like to achieve in this position?</h3>
                            <p className='bigTextSize textColorMid'>
                                At Microsoft, my goals include learning programming languages like C, C++, Java, or Python, actively engaging in learning opportunities to stay updated with industry trends, and making valuable contributions to innovative projects to advance my career within the company.
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

                                    While I may not meet all of the requirements for the job, I do possess key qualifications that make me a strong candidate. Specifically, I have a solid understanding of JavaScript and C#, which are essential for the role.</p>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>





        </div>
    )
}

export default MicrosoftComponent
