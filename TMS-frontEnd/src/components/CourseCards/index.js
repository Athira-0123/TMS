import React from 'react';
import {CourseContainer,CourseWrapper, CourseCard,CourseH1, CardH2, CardImg, CardP} from './CourseElements';
import FSDImage from '../../images/FSDImage.png';
import DataImage from '../../images/dataImage.png';
import CyberImage from '../../images/cyberSec.png';
import SoftwareImage from '../../images/softwareTesting.png';
import DigiImage from '../../images/digiMarket.png';
import AIImage from '../../images/machineLearn.png';
const CourseCards = () => {
    return (
    
    
    <CourseContainer>
        <CourseH1>Trainers Required</CourseH1>
            <CourseWrapper>
                    <CourseCard>
                            <CardImg src={FSDImage}/>
                            <CardH2>Full Stack Developer</CardH2>
                                <CardP>
                                The MEAN stack is an excellent choice for web developers who wish to develop
                                high-quality web applications using JavaScript. The core technologies define 
                                the MEAN stack MongoDB, Express.js, Angular, and Node.js all are based on one
                                language,Javascript. 
                                </CardP>
                    </CourseCard>
                    <CourseCard>
                            <CardImg src={DataImage} />
                            <CardH2>Data Analyst </CardH2>
                                <CardP>
                                Data Scientists is a breed of data experts who have the technical skills to solve
                                complex problems whereas analytics interpret data and turn it into information which
                                can offer ways to improve a business. ICT Academy of Kerala offers a specialized 
                                certificate course on “Data Science and Analytics”.
                                </CardP>
                    </CourseCard>
                    <CourseCard>
                            <CardImg src={CyberImage}/>
                            <CardH2>Cyber Security Analyst</CardH2>
                                <CardP>
                                It is a specialized field in Information Technology(IT), Cyber Security as a profession is evolving  
                                over the years, the reason being the increasing rate of cyber crimes.This Course has been
                                designed to give you a foundational look at today's cyber security landscape and also understand about various cyber attacks.
                                </CardP>
                    </CourseCard>
                    <CourseCard>
                            <CardImg src={SoftwareImage}/>
                            <CardH2>Software Testing</CardH2>
                                <CardP>
                                Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. 
                                The benefits of testing include preventing bugs, reducing development costs and improving performance.
                                </CardP>
                    </CourseCard>
                    <CourseCard>
                            <CardImg src={DigiImage}/>
                            <CardH2>Digital Marketing</CardH2>
                                <CardP>
                                Digital marketing encompasses all  marketing efforts that use an electronic device or the 
                                internet .Businesses leverage digital channels such as search engines, and their websites 
                                to connect with prospective customers.
                                </CardP>
                    </CourseCard>
                    <CourseCard>
                            <CardImg src={AIImage}/>
                            <CardH2>Machine Learning and AI</CardH2>
                                <CardP>
                                Machine Learning jobs are high in demand and continue to be the winners in today's world. 
                                This course is complemented with the Data science course offering students a wider platform 
                                of recognition of Diploma in both the fields.
                                </CardP>
                    </CourseCard>
            </CourseWrapper>
    </CourseContainer>
        )
}

export default CourseCards;