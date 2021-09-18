import emailjs from 'emailjs-com';
import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, FormInputText } from './SigninElements'

const SignIn = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wyz50yt', 'template_pxi9lbh', e.target, 'user_12T6PVF5oIb4Wm6EGuEhu')
    .then((result) => {
      alert('E-mail Sent with success.', result.status, result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><img src="./images/MM_Logo_Horizontal_Original_2.svg" alt="logo" title='back' width={350} /></Icon>
          <FormContent>
            <Form onSubmit={sendEmail}>
              <FormH1>Contact us</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='name' name='user_name' placeholder="Your name" required />

              <FormLabel htmlFor='for'>E-mail</FormLabel>
                <FormInput htmlFor='email' type='email' name='user_email' placeholder="contact@email.com" required />

              <FormLabel htmlFor='for'>Message</FormLabel>
                <FormInputText htmlFor='message' name="user_message" placeholder="Write your message here" required />
                
              <FormButton type='submit' value='send'>SEND</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn