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
  // font-family: "Helvetica Neue", Arial, sans-serif;
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

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: transparent;
  color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`

const Highlight = styled.span`
  color: #ff6600;
  font-weight: bold;
`

const Warning = styled.div`
  background-color: #ffeeee;
  border: 1px solid #ff3333;
  border-radius: 5px;
  padding: 15px;
  color: #ff3333;
  font-size: 18px;
  margin-top: 20px;
`

const Success = styled.div`
  background-color: #eeffee;
  border: 1px solid #33cc33;
  border-radius: 5px;
  padding: 15px;
  color: #33cc33;
  font-size: 18px;
  margin-top: 20px;
`

const Code = styled.code`
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  background-color: #f8f9fa;
  padding: 3px 6px;
  border-radius: 3px;
`

const Quote = styled.blockquote`
  border-left: 5px solid #007bff;
  background-color: #f8f9fa;
  padding: 10px 20px;
  margin: 20px 0;
  color: #777;
  font-style: italic;
`

const TermsOfService = () => {
  return (
    <Container>
      <Title>Terms of Service</Title>

      <Paragraph>
        Welcome to CRWN Clothing! These terms and conditions outline the rules
        and regulations for the use of our website. By accessing this website,
        we assume you accept these terms and conditions. Do not continue to use
        CRWN Clothing if you do not agree to all of the terms and conditions
        stated on this page.
      </Paragraph>

      <SectionTitle>1. Introduction</SectionTitle>
      <Paragraph>
        These Terms of Service govern your use of the CRWN Clothing website and
        constitute a legally binding agreement between you and CRWN Clothing. By
        using our website, you agree to comply with these terms. If you do not
        agree with any part of these terms, you may not use our website.
      </Paragraph>

      <SectionTitle>2. Intellectual Property Rights</SectionTitle>
      <Paragraph>
        The content, design, and functionality of CRWN Clothing, including but
        not limited to text, graphics, logos, images, and software, are the
        intellectual property of CRWN Clothing and are protected by copyright
        and other intellectual property laws. You may not reproduce, distribute,
        modify, or create derivative works of any content from CRWN Clothing
        without our prior written consent.
      </Paragraph>

      <SectionTitle>3. User Content</SectionTitle>
      <Paragraph>
        By submitting or posting content on CRWN Clothing, you grant us a
        non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and
        sublicensable right to use, reproduce, modify, adapt, publish,
        translate, create derivative works from, distribute, and display such
        content in any media. You represent and warrant that you own or have the
        necessary rights, licenses, consents, and permissions to grant the
        foregoing rights.
      </Paragraph>

      <SectionTitle>4. Prohibited Activities</SectionTitle>
      <Paragraph>
        You may not use CRWN Clothing for any unlawful purpose or engage in any
        activity that violates the rights of others. Prohibited activities
        include, but are not limited to:
      </Paragraph>
      <List>
        <ListItem>Violating any applicable laws or regulations;</ListItem>
        <ListItem>
          Interfering with or disrupting the operation of CRWN Clothing;
        </ListItem>
        <ListItem>
          Impersonating any person or entity, or falsely stating or
          misrepresenting your affiliation with a person or entity;
        </ListItem>
        <ListItem>
          Uploading or transmitting viruses or other malicious code;
        </ListItem>
        <ListItem>
          Collecting or harvesting any personally identifiable information,
          including account names and email addresses;
        </ListItem>
        <ListItem>
          Engaging in any other conduct that restricts or inhibits any other
          person from using or enjoying CRWN Clothing, or which, in our sole
          discretion, exposes us or any of our users to any liability or
          detriment of any type.
        </ListItem>
      </List>

      <SectionTitle>5. Disclaimer of Warranties</SectionTitle>
      <Paragraph>
        CRWN Clothing is provided "as is" and "as available" without warranties
        of any kind, whether express or implied. To the fullest extent permitted
        by law, we disclaim all warranties, express or implied, including, but
        not limited to, implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the
        functions contained in CRWN Clothing will be uninterrupted or
        error-free, that defects will be corrected, or that CRWN Clothing or the
        servers that make it available are free of viruses or other harmful
        components.
      </Paragraph>

      <SectionTitle>6. Limitation of Liability</SectionTitle>
      <Paragraph>
        In no event shall CRWN Clothing, its officers, directors, employees, or
        agents, be liable to you or any third party for any direct, indirect,
        incidental, special, punitive, or consequential damages whatsoever,
        including without limitation, damages for loss of profits, data, or
        other intangibles, arising out of or resulting from the use or inability
        to use CRWN Clothing, whether based on warranty, contract, tort, or any
        other legal theory, and whether or not we have been advised of the
        possibility of such damages.
      </Paragraph>

      <SectionTitle>7. Indemnification</SectionTitle>
      <Paragraph>
        You agree to indemnify and hold harmless CRWN Clothing, its affiliates,
        officers, directors, employees, agents, and licensors, from and against
        any claims, liabilities, damages, losses, and expenses, including,
        without limitation, reasonable legal and accounting fees, arising out of
        or in any way connected with your access to or use of CRWN Clothing,
        your violation of these terms, or your violation of any third-party
        rights.
      </Paragraph>

      <SectionTitle>8. Changes to Terms</SectionTitle>
      <Paragraph>
        We reserve the right, at our sole discretion, to modify or replace these
        terms at any time. If a revision is material, we will provide at least
        30 days' notice prior to any new terms taking effect. What constitutes a
        material change will be determined at our sole discretion.
      </Paragraph>

      <SectionTitle>9. Governing Law and Jurisdiction</SectionTitle>
      <Paragraph>
        These terms shall be governed by and construed in accordance with the
        laws of Bangladesh. Any dispute arising out of or in connection with
        these terms, including any question regarding their existence, validity,
        or termination, shall be subject to the exclusive jurisdiction of the
        courts of Bangladesh.
      </Paragraph>

      <SectionTitle>10. Contact Us</SectionTitle>
      <Paragraph>
        If you have any questions about these terms, please contact us at{" "}
        <Link href="mailto:rksadeck@gmail.com">rksadeck@gmail.com</Link>.
      </Paragraph>
    </Container>
  )
}

export default TermsOfService
