import React, {useState} from 'react';
import Video from '../../videos/video (3).mp4';
import {Button} from '../ButtonElement';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';


const HeroSection = () => {
        const [hover, setHover] = useState(false)

        const onHover=()=>{
            setHover(!hover)
        }



        return (

    <HeroContainer >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome to ICT Academy</HeroH1>
            <HeroP>
                Enroll as a Trainer today itself, Lets start our journey together...
            </HeroP>
            <HeroBtnWrapper>
                    <Button to="enroll" onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary = 'true'
                    dark = 'true'>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    
  )
}

export default HeroSection;