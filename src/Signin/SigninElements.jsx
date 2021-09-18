import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background:#fff;
  @media screen and (max-width: 480px) {
  height: 100%;
  }
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`
export const Icon = styled(Link)`
  margin-left: 190px;
  margin-top: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;
  @media screen and (max-width: 820px) {
    justify-content: center;
    display: flex;
    margin-top: 35px;
    margin-left: 0px;
  }
  @media screen and (max-width: 480px) {
   height: 60px;
   margin-top: 0px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background-color: #0F265C;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-weight: 800;
  letter-spacing: 1.8px;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1.8px;
`
export const FormInput = styled.input`
  padding: 14px 16px;
  margin-bottom: 28px;
  border-radius: 4px;
`
export const FormInputText = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  max-height: 150px;
  resize: vertical;
`
export const FormButton = styled.button`
  background: #71C6FF;
  padding: 10px 22px;
  border: none;
  color: #fff;
  font-size: 20px;
  letter-spacing: 1.8px;
  border-radius: 50px;
  white-space: nowrap;
  color: #0F265C;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0F265C;
  }
`
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`