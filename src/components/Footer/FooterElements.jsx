import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const FooterContainer = styled.footer`
  background-color: #0F265C;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 9rem;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
     margin: 0 auto;
  }
`
export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 210px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    display: grid;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #71C6FF;
    transition: 0.3s ease-in-out;
  }
`
export const FooterLinkP = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #71C6FF;
    transition: 0.3s ease-in-out;
  }
`
export const FooterLinkMap = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  line-height: 1.5rem;
  cursor: pointer;
  margin-top: -5px;

  &:hover {
    color: #71C6FF;
    transition: 0.3s ease-in-out;
  }
`
export const FooterLinkMapx = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #71C6FF;
    transition: 0.3s ease-in-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1100px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`