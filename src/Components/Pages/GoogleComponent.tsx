import React from 'react'
import './style/home.css'
import { Col, Row, Container } from 'react-bootstrap';
import "./style/home.css"
import discordHub from ".././assets/GoogleInfo.jpeg"
import wave from '../assets/wave (1).svg'
import wave2 from '../assets/wave (3).svg'
import discordLogo from '../assets/googleLogo.png';


const GoogleComponent = () => {
    return (
        <div className='box ' >


            <Container fluid className=''>
                <Row className='pt-5 headerHeight homeBgColor'>
                    <Col className=' box2  d-flex justify-content-center  '>
                        <div>
                            <h3>Why I want to work here</h3>
                            <ul className='bigTextSize'>


                                <li> Google fosters an inclusive and innovative environment where collaboration, creativity, and diversity are celebrated.</li>
                                <li> Google offers comprehensive benefits including health insurance, retirement plans, wellness programs, and on-site fitness centers.</li>
                                <li>Employees have the flexibility to work remotely or in a hybrid model, allowing for a better work-life balance.</li>
                                <li> With offices worldwide, including Silicon Valley, Google provides opportunities to work in dynamic and diverse locations such as San Francisco, New York City, or Zurich.</li>

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
                                    <li>Technical Skills:  Proficiency in programming languages (Python, Java, C++, etc.), data analysis, machine learning, and cloud computing.</li>
                                    <li>Problem-Solving:  Ability to tackle complex problems with innovative solutions.</li>
                                    <li>Communication:  Effective communication and collaboration with cross-functional teams.</li>
                                    <li>Adaptability:  Openness to continuous learning and staying relevant in a fast-paced industry.</li>

                                </ul>

                            </p>
                        </div>

                    </Col>
                    <Col className='d-flex align-items-center justify-content-center '>
                        <div>
                            <h3 className='textColorMid'>What goals would I like to achieve in this position?</h3>
                            <p className='bigTextSize textColorMid'>
                                <ul>
                                    <li>Professional Development: Enhancing your skills and knowledge within your field or industry to advance your career at Google.</li>
                                    <li>Leadership Opportunities: Pursuing opportunities to take on leadership roles or responsibilities within your team or across different projects at Google.</li>
                                    <li>Personal Growth: Setting personal development goals to improve skills such as communication, problem-solving, and time management while working at Google.</li>
                                    <li>Work-Life Balance: Striving to maintain a healthy balance between your professional responsibilities and personal well-being while working at Google.</li>
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

                                    I do not, proficiency in Java, Python, GO, and/or C++, along with a solid understanding of data structures and algorithms, is crucial for success at Google. These skills are fundamental for solving complex problems and contributing to various projects, including web development and machine learning. Mastering these technical skills is key to thriving in Google's dynamic environment.
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>





        </div>
    )
}

export default GoogleComponent
