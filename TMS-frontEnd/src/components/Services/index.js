import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';


const Services = () => {
        return (
    <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Institutional Training</ServicesH2>
                <ServicesP>We associate with educational institutions across the state of Kerala
                    to improve employability skills of both Faculty and the Students.
                    </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Corporate Training</ServicesH2>
                <ServicesP> We provide world class training to the corporates which enables them to upskill their 
                    employees ,reduce the cost and gain competitive edge in the Industry . 
                    </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Graduate Training</ServicesH2>
                <ServicesP>We provide Industry focused ICT skills development program for Students. 
                            Project assignment related to capability building are also provided.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
        )
}

export default Services;