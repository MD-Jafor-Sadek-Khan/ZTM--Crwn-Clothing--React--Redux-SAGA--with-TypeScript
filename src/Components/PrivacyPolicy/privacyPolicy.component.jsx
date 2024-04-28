import React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`

const SectionTitle = styled.h2`
  color: #555;
  font-size: 28px;
  margin-top: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 15px;
  }
`

const Paragraph = styled.p`
  color: #777;
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`

const List = styled.ul`
  color: #777;
  font-size: 20px;
  line-height: 1.6;
  margin-left: 25px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const ListItem = styled.li`
  margin-bottom: 8px;
`

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`

const Separator = styled.hr`
  border: 0;
  border-top: 2px solid #ccc;
  margin: 30px 0;
`

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>

      <Paragraph>
        At CRWN Clothing, we take your privacy seriously. This Privacy Policy
        outlines how we collect, use, and protect your personal information.
      </Paragraph>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>
        We collect information from you when you register on our site, place an
        order, subscribe to our newsletter, or fill out a form. When ordering or
        registering on our site, as appropriate, you may be asked to enter your
        name, email address, mailing address, phone number, credit card
        information, or other details. You may, however, visit our site
        anonymously.
      </Paragraph>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>
        Any of the information we collect from you may be used in one of the
        following ways:
      </Paragraph>
      <List>
        <ListItem>
          To personalize your experience (your information helps us to better
          respond to your individual needs);
        </ListItem>
        <ListItem>
          To improve our website (we continually strive to improve our website
          offerings based on the information and feedback we receive from you);
        </ListItem>
        <ListItem>To process transactions;</ListItem>
        <ListItem>To send periodic emails;</ListItem>
        <ListItem>
          To administer a contest, promotion, survey, or other site feature;
        </ListItem>
        <ListItem>To comply with legal requirements.</ListItem>
      </List>

      <SectionTitle>3. How We Protect Your Information</SectionTitle>
      <Paragraph>
        We implement a variety of security measures to maintain the safety of
        your personal information when you place an order or enter, submit, or
        access your personal information.
      </Paragraph>

      <SectionTitle>4. Your Consent</SectionTitle>
      <Paragraph>
        By using our site, you consent to our website's privacy policy.
      </Paragraph>

      <SectionTitle>5. Changes to Our Privacy Policy</SectionTitle>
      <Paragraph>
        If we decide to change our privacy policy, we will post those changes on
        this page.
      </Paragraph>

      <SectionTitle>6. Contacting Us</SectionTitle>
      <Paragraph>
        If you have any questions regarding this privacy policy, you may contact
        us using the information below:
        <br />
        <Link href="mailto:rksadeck@gmail.com">rksadeck@gmail.com</Link>
      </Paragraph>
    </Container>
  )
}

export default PrivacyPolicy
