import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import codePhoto from "../assets/codePhoto.jpg";
import codingPhoto from "../assets/codingPhoto.avif";
import micosoftLogo from "../assets/microsoftLogo.png"
import discordLogo from "../assets/discord.png"
import mojandLogo from "../assets/mojang.png"
import googleLogo from "../assets/googleLogo.png"
import nvidiaLogo from "../assets/nvidiaLogo.png"
import './style/home.css'

import { useNavigate } from 'react-router-dom';

import dInfo from '../assets/discordInfo.webp'
import microInfo from "../assets/microsoftInfo.jpeg"
import gInfo from "../assets/GoogleInfo.jpeg"
import mInfo from "../assets/mojangInfo.webp"
import nInfo from "../assets/nvidiaInfo.jpeg"
import CardComponent from '../CardComponent';
import wave from '../assets/wave (1).svg'


const HomePageComponent = () => {

    const navigate = useNavigate();
    const hanldeClickDiscord = () => {
        navigate('/discord')
    }
    const hanldeClickGoogle = () => {
        navigate('/google')
    }
    const hanldeClickMicrosoft = () => {
        navigate('/mircosoft')
    }
    const hanldeClickMojang = () => {
        navigate('/mojang')
    }
    const hanldeClickNvidia = () => {
        navigate('/nvidia')
    }



    return (
        <>
            <Container fluid className='box homeBgColor'>
                <Row size={12} className=''>

                    <Col size={6} className=' headerHeight d-flex align-items-center justify-content-center text-center'>
                        <h1 className='textColor'>My Top 5 Dream Tech Companies</h1>
                    </Col>

                    <Col size={6} className='d-flex align-items-center justify-content-evenly '>
                        <img className='logoSize' src={discordLogo} alt='discord' />
                        <img className='logoSize' src={googleLogo} alt='google' />
                        <img className='logoSize' src={micosoftLogo} alt='microsoft' />
                        <img className='logoSize' src={mojandLogo} alt='mojang' />
                        <img className='logoSize' src={nvidiaLogo} alt='nvidia' />
                    </Col>
                </Row>

            </Container>
            <img src={wave} />


            <div className='d-flex justify-content-evenly p-5 gap-5'>
                <CardComponent pic={dInfo} name={"Discod"} desc={""} click={hanldeClickDiscord} />
                <CardComponent pic={gInfo} name={"Google"} desc={""} click={hanldeClickGoogle} />
                <CardComponent pic={microInfo} name={"Microsoft"} desc={""} click={hanldeClickMicrosoft} />
                <CardComponent pic={mInfo} name={"Mojang"} desc={""} click={hanldeClickMojang} />
                <CardComponent pic={nInfo} name={"Nvidia"} desc={""} click={hanldeClickNvidia} />
            </div>

        </>







    )
}

export default HomePageComponent
