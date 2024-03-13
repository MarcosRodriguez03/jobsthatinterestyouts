import React from 'react'
import './style/home.css'
import { Col, Row, Container } from 'react-bootstrap';
import "./style/home.css"
import discordHub from ".././assets/mojangInfo.webp"
import wave from '../assets/wave (1).svg'
import wave2 from '../assets/wave (3).svg'
import discordLogo from '../assets/mojang.png';


const MojangComponent = () => {
    return (
        <div className='box ' >


            <Container fluid className=''>
                <Row className='pt-5 headerHeight homeBgColor'>
                    <Col className=' box2  d-flex justify-content-center  '>
                        <div>
                            <h3>Why I want to work here</h3>
                            <ul className='bigTextSize'>
                                <li>Ive always loved Mojang games like Minecraft. Working with them would be amazing. </li>
                                <li>Benefits- Mojang offers competitive benefits packages, including health insurance, retirement plans, and various perks aimed at promoting employee well-being and work-life balance. These benefits demonstrate Mojang's commitment to supporting its employees both personally and professionally.</li>

                                <li>Hybrid Work Options- Mojang provides flexible work arrangements, including hybrid and remote work options, allowing employees to balance their professional responsibilities with their personal lives. This flexibility enables employees to work in a way that best suits their needs and preferences.</li>
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
                                    <li>Programming experience in one or more of C#, C, C++, or Java</li>
                                    <li>Experience with RESTful APIs, services, and cloud storage technologies</li>
                                    <li>Experience with Azure or AWS Cloud Services</li>
                                </ul>

                            </p>
                        </div>

                    </Col>
                    <Col className='d-flex align-items-center justify-content-center '>
                        <div>
                            <h3 className='textColorMid'>What goals would I like to achieve in this position?</h3>
                            <p className='bigTextSize textColorMid'>

                                <ul>
                                    <li>Contribute to the development of innovative and engaging gaming experiences.</li>
                                    <li>Play a key role in shaping the future of popular gaming franchises.</li>
                                    <li>Foster a positive and inclusive community through game development.</li>
                                    <li>Continuously learn and grow within the dynamic gaming industry.</li>
                                    <li>Contribute to maintaining and improving the overall quality and success of Mojang's games.</li>
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

                                    While I'm proficient in React and TypeScript, learning React Native, Python, or Rust would be crucial for working at Discord. Each of these technologies aligns with Discord's tech stack and the requirements of their development projects. Expanding my skill set to include these languages would not only make me a more competitive candidate but also enable me to contribute effectively to Discord's development efforts.
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>





        </div>
    )
}

export default MojangComponent
