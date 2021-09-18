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
    
  ul {
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
  ul {
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

function privacy() {
  return (
    <>
    <ScrollToTop />
      <Container>
      <FormWrap>
        <Icon to='/'><img src="./images/MM_Logo_Horizontal_Original_2.svg" alt="logo" title='back' width={350} /></Icon>
          <FormContent>
         <Back to='/'>{<ArrowBack />}Back</Back>
            <h1>Privacy Policy</h1>
            <br/>
            <h2>Privacy Policy</h2>
              <p>Your privacy is important to us. It is Macedo &amp; Muzzio Management accounting respect your privacy in relation to any information from you that we may collect on the website <a href='https://www.macedoemuzzio.com.br/'> Macedo &amp; Muzzio Management accounting</a>, and other websites that we own and operate.</p>
              <p>We only ask for personal information when we really need it to provide you with a service. We do this by fair and legal means, with your knowledge and consent. We also let you know why we are collecting it and how it will be used.</p>
              <p>We only retain the information collected for as long as necessary to provide the requested service. When we store data, we protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
              <p>We do not share personally identifiable information publicly or with third parties, except as required by law.</p>
              <p>Our website may have links to external websites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility for their respective <a href='https://politicaprivacidade.com' target='_BLANK' rel="noreferrer" >privacy policies</a>.</p>
              <p>You are free to decline our request for personal information, understanding that we may not be able to provide some of the services you desire.</p>
              <p>Your continued use of our site will be deemed acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, please contact us.</p>
            <br/>
            <br/>
            <h1>Cookie Policy Macedo &amp; Muzzio Management Accounting</h1>
            <br/>
            <h2>What are cookies?</h2>
              <p>As is common practice on almost all professional websites, this website uses cookies, which are small files downloaded to your computer, to improve your experience. This page describes what information they collect, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however this may downgrade or 'break' certain elements of the site's functionality.</p>
              <br/>
            <h2>How do we use cookies?</h2>
              <p>We use cookies for a variety of reasons, detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave all cookies if you are unsure whether or not you need them, if they are used ​​to provide a service you use.</p>
              <br/>
            <h2>Disable Cookies</h2>
              <p>You can prevent the setting of cookies by adjusting your browser settings (see your browser's Help to learn how to do this). Please be aware that disabling cookies will affect the functionality of this and many other websites you visit. Disabling cookies will generally result in the disabling of certain functionality and features of this website. Therefore, it is recommended that you do not disable cookies.</p>
              <br/>
            <h2>Cookies We Set</h2>
             <ul>
                <li>Account Related Cookies<br/> If you create an account with us, we will use cookies to manage the registration process and general administration. These cookies will generally be deleted when you log out, however in some cases they may remain later to remember your site preferences when you log out.<br/></li>
                <li> Login-related cookies<br/> We use cookies when you are logged in so that we can remember this action. This saves you from having to log in every time you visit a new page. These cookies are normally removed or cleared when you log out to ensure that you can only access restricted features and areas when you log in.<br/></li>
                <li> Cookies related to email newsletters<br/> This site offers newsletter or email subscription services and cookies may be used ​​to remind you if you are already registered and if you should show certain valid notifications only for registered / unsubscribed users.<br/></li>
              <li> Orders processing related cookies<br /> This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.<br /></li>
              <li> Survey-related cookies<br /> From time to time, we offer surveys and questionnaires to provide interesting information, useful tools or to understand our user base more accurately. These surveys may use cookies to remember who has already participated in a survey or to provide accurate results after changing pages.<br /></li>
                <li> Form-Related Cookies<br/> When you submit data via a form such as those found on the contact pages or comment forms, cookies may be set to remember the user's details for future correspondence.<br /></li>
                <li> Site Preferences Cookies<br/> To provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. To remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.<br/></li>
              </ul>
              <br/>
            <h2>Third Party Cookies</h2>
              <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you may encounter through this website.</p>                <ul>                        
                  <li>This website uses Google Analytics, which is one of the most pervasive and reliable analytics solutions on the web, to help us understand how you use the website and how we can improve your experience. These cookies may track items such as how much time you spend on the site and which pages you visit, so that we can continue to produce compelling content.</li>
                </ul>
              <p>For more information about Google Analytics cookies, see the official Google Analytics page.</p>
                <ul>
                  <li>Third-party analytics are used to track and measure usage of this site so that we can continue to produce compelling content. These cookies may track items such as how much time you spend on the site or which pages you visit, which helps us understand how we can improve the site for you.</li>
                  <li>We peSpaindically test new features and make subtle changes to the way the site looks. When we're still testing new features, these cookies can be used ​​to ensure you receive a consistent experience while on the site, while we understand which optimizations our users appreciate most.</li>
                  <li>As we sell products, it's important that we understand statistics about how many visitors to our site actually buy, and therefore this is the type of data these cookies will track. This is important to you as it means we can accurately make business predictions that allow us to analyze our advertising and product costs to ensure the best possible price.</li>
                </ul>
            <br />
           <h2>User Engagement</h2>
              <p>The user undertakes to make proper use of the contents and information that Macedo &amp; Muzzio Management accounting offers on the website and with an enunciative, but not limiting, character:</p>
                <p> A) Do not engage in activities that are illegal or contrary to good faith or public order;</p>
                <p> B) Do not broadcast advertising or content of a racist, xenophobic, or casino nature, <a href='https://ondeapostar.pt/' style={{color: '#71C6FF',fontWeight: 'normal' ,textDecoration:'none',}}>online betting</a> (ex.: <a href='https://ondeapostar.pt/review/betway/' style={{color: '#71C6FF',fontWeight : 'normal',textDecoration:'none',}}>Betway</a>), games of chance, any kind of illegal pornography, in defense of terrorism or against human rights;</p>
                <p> C) Do not damage the physical (hardware) and logical (software) systems of Macedo &amp; Muzzio Management accounting, from its suppliers or third parties, to introduce or spread computer viruses or any other hardware or software systems that are capable of causing damages mentioned above.</p>
                 <br/>
              <h2>More information</h2>
                <p>Hopefully that's clear, and as mentioned earlier, if there's something you're not sure you need or not, it's generally safer to leave cookies enabled if you're interacting with one of the features you use on our site.</ p>
            <p>This policy is effective from <strong>January</strong>/<strong>2021</strong>.</p>
          
          </FormContent>
          </FormWrap>
      </Container>
    </>
  )
}

export default privacy
