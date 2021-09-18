import React from 'react'
import Icon1 from '../../images/1-budget.svg'
import Icon2 from '../../images/2-certificate.svg'
import Icon3 from '../../images/3-asset-management.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>SERVICES OFFERED</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Accounting Advice</ServicesH2>
          <ServicesP>All tax, labor and business services.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Legalization of companies</ServicesH2>
          <ServicesP>Regulation of companies and contractual changes.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Income tax</ServicesH2>
          <ServicesP>Individual and Corporate Income Tax Returns.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
