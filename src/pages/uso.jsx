import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { MdArrowBack } from 'react-icons/md'

const Container = styled.div`
  /* min-height: 692px;
  position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background:#fff;
`
const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  color: #0F265C;
  margin: 10px 30px;

  ol {
    margin-left: 20px;
    
  }
  a {
    color:#71C6FF;
    font-family: utopia-std, serif;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    margin-bottom: 12px;
  }
  p {
    line-height: 1.6rem;
    font-family: utopia-std, serif;
  }
  li {
    line-height: 1.6rem;
    font-family: utopia-std, serif;
  }

  @media screen and (max-width: 760px) {
    height: 80%;
  }
  ol {
    margin-left: 16px;
  }
`
const Icon = styled(Link)`
  margin-left: 164px;

  @media screen and (max-width: 820px) {
    justify-content: center;
    display: flex;
    margin-top: 35px;
    margin-left: 0px;
  }
`
const Back = styled(Link)`
  color:#71C6FF;
  text-decoration: none;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: 'Raleway', sans-serif !important;
  margin-bottom: 16px;
  display: flex;
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 90px 175px;

  @media screen and (max-width: 968px) {
    padding: 10px;
    margin: 40px 70px;
  }
  @media screen and (max-width: 680px) {
    padding: 10px;
    margin: 40px 10px;
  }
`
const ArrowBack= styled(MdArrowBack)`
  margin-right: 5px;
`

function uso() {
  return (
    <>
    <ScrollToTop />
      <Container>
      <FormWrap>
        <Icon to='/'><img src="./images/MM_Logo_Horizontal_Original_2.svg" alt="logo" title='back' width={350}/></Icon>
        <FormContent>
        <Back to='/'>{<ArrowBack />}Back</Back>
        <h1>Terms of Use</h1>
        <br/>
        <h2>1. Terms</h2>
          <p>By accessing the site <a href='https://www.macedoemuzzio.com.br/'>Macedo &amp; Muzzio Management Accounting</a>
          , you agree to comply with these terms of service, all applicable laws and regulations ​​and agree that you are responsible
          by complying with all applicable local laws. If you do not agree with any of these terms, you are prohibited from
          use or access this site. The materials on this site are protected by applicable copyright and trademark laws.
          </p>
            <br />
            <h2>2. License Usage</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) from the Macedo &amp; Muzzio Management Accounting , for personal and non-commercial transitory viewing. This is a grant of a license, not a transfer of title, and under this license you may not:</p>
            <ol>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on the Macedo &amp; Muzzio Management Accounting;</li>
              <li>remove any copyright or other proprietary notations from the materials; or </li>
              <li>transfer the materials to another person or 'mirror' the materials on any other server.</li>
            </ol>
            <p>This license will automatically terminate if you violate any of these restrictions and may be terminated by Macedo &amp; Muzzio Management Accounting at any time. Upon termination of viewing these materials or upon termination of this license, you must delete all downloaded materials in your possession, whether in electronic or printed form.</p>
          <br/>
        <h2>3. Disclaimer</h2>
          <ol>
            <li>The materials on the Macedo &amp; Muzzio Management Accounting are provided 'as is'. Macedo &amp; Muzzio Management accounting makes no warranties, express or implied, and hereby disclaims and disclaims all other warranties, including, without limitation, implied warranties or conditions of sale, fitness for a specific purpose or non-violation of intellectual property or otherwise. violation of rights. </li>
            <li>In addition, Macedo &amp; Muzzio Management accounting does not guarantee or make any representation regarding the accuracy, probable results or reliability of the use of the materials on its website or otherwise related to these materials or on websites linked to this website.</li>
          </ol>
          <br/>    
        <h2>4. Limitations</h2>
          <p>In no case does Macedo &amp; Muzzio Management accounting or its suppliers shall be liable ​​for any damages (including, without limitation, damages for loss of data or profit or due to business interruption) arising out of the use or inability to use the materials in Macedo &amp; Muzzio Management Accounting, same as Macedo &amp; Muzzio Management Accounting or an authorized representative of Macedo &amp; Muzzio Management accounting has been notified orally or in writing of the possibility of such damages. Because some jurisdictions do not allow limitations on implied warranties, or limitations on liability for consequential or incidental damages, these limitations may not apply to you.</p>
          <br/>
        <h2>5. Material accuracy</h2>
          <p>The materials displayed on the Macedo &amp; Muzzio Management Accounting may include technical, typographical or photographic errors. Macedo &amp; Muzzio Management accounting does not guarantee that any material on its website is accurate, complete or current. Macedo &amp; Muzzio Management accounting may make changes to the materials contained on its website at any time, without pSpainr notice. However, Macedo &amp; Muzzio Management Accounting does not undertake to update the materials.</p>
          <br/>
        <h2>6. Links</h2>
          <p>Macedo &amp; Muzzio Management accounting has not analyzed all the sites linked to its site and is not responsible for the content of any linked site. The inclusion of any link does not imply endorsement by Macedo &amp; Muzzio Site Management Accounting. Use of any linked site is at the user's own risk.</p>
            <br />
           <h2>Modifications</h2>
          <p>Macedo &amp; Muzzio Management accounting may revise these website terms of service at any time, without pSpainr notice. By using this site, you agree to be bound by the current version of these terms of service.</p>
          <br/>
        <h2>Applicable law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Macedo &amp; Muzzio Management accounting and you irrevocably submit to the exclusive jurisdiction of the courts in that state or locality.</p>          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default uso
