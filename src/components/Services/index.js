import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/retail.png'
import Icon5 from '../../images/restaurant.jpg'
import Icon6 from '../../images/wellness.jpg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesH4,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1> SalesCaptain is designed for your business </ServicesH1>
        <ServicesH4 > Select your industry to see how it works </ServicesH4>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Automotive </ServicesH2>
              <ServicesP> Switch your gears from manual to automatic.  </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2> Home Services </ServicesH2>
              <ServicesP> Be the highest-rated business in your location </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2> Health Care </ServicesH2>
              <ServicesP> Always stay connected with your patients </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon4}/>
              <ServicesH2> Retail</ServicesH2>
              <ServicesP> Be the best retailer in your area </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon5}/>
              <ServicesH2> Restaurant</ServicesH2>
              <ServicesP> Be the best restaurant in your area </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon6}/>
              <ServicesH2> wellness</ServicesH2>
              <ServicesP> Take your wellness business to the next level </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services