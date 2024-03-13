import React from 'react'
import './style/home.css'
import { Col, Row, Container } from 'react-bootstrap';
import "./style/home.css"
import discordHub from ".././assets/discordInfo.webp"
import wave from '../assets/wave (1).svg'
import wave2 from '../assets/wave (3).svg'
import discordLogo from '../assets/discord.png';


const DiscordComponent = () => {
    return (
        <div className='box ' >


            <Container fluid className=''>
                <Row className='pt-5 headerHeight homeBgColor'>
                    <Col className=' box2  d-flex justify-content-center  '>
                        <div>
                            <h3>Why I want to work here</h3>
                            <ul className='bigTextSize'>
                                <li>Discord offers excellent health benefits and matching 401k, making it an attractive option for employees seeking comprehensive financial and wellness support.</li>
                                <li>The company provides accommodations for remote and hybrid positions, allowing for flexibility in work arrangements to suit individual preferences and needs.</li>
                                <li>Being located in San Francisco, Discord provides access to a vibrant tech scene and opportunities for networking and professional growth in one of the leading tech hubs globally.</li>
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
                                    <li>  Experience building or using apps on Discord</li>
                                    <li>  Experience building for a developer ecosystem.</li>
                                    <li>  I need to be familiar with React Native, TypeScript, Python, or Rust</li>
                                </ul>

                            </p>
                        </div>

                    </Col>
                    <Col className='d-flex align-items-center justify-content-center '>
                        <div>
                            <h3 className='textColorMid'>What goals would I like to achieve in this position?</h3>
                            <p className='bigTextSize textColorMid'>
                                <ul>
                                    <li>Contribute to the development and improvement of the Discord platform.</li>
                                    <li>Optimize server performance to enhance overall platform performance.</li>
                                    <li>Collaborate effectively with cross-functional teams to deliver high-quality software updates.</li>
                                    <li>Stay updated on industry best practices and technological advancements.</li>
                                    <li>Contribute to the overall success and growth of Discord as a leading communication platform.</li>
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

export default DiscordComponent
