import React from "react"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`

const FAQHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #333333;
  text-align: center;
`

const FAQItem = styled.div`
  margin-bottom: 40px;
  animation: ${fadeIn} 0.5s ease-in-out;
`

const FAQQuestion = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #555555;
`

const FAQAnswer = styled.p`
  font-size: 18px;
  color: #777777;
  line-height: 1.6;
`

const FAQ = () => {
  return (
    <FAQContainer>
      <FAQHeading>Frequently Asked Questions</FAQHeading>
      <FAQItem>
        <FAQQuestion>1. What is CRWN Clothing?</FAQQuestion>
        <FAQAnswer>
          CRWN Clothing is a high-end fashion brand that specializes in curated
          collections of premium clothing and accessories.
        </FAQAnswer>
      </FAQItem>
      <FAQItem>
        <FAQQuestion>2. Do you offer international shipping?</FAQQuestion>
        <FAQAnswer>
          Yes, we provide worldwide shipping to over 100 countries. Shipping
          costs and delivery times may vary depending on the destination.
        </FAQAnswer>
      </FAQItem>
      <FAQItem>
        <FAQQuestion>3. How can I track my order?</FAQQuestion>
        <FAQAnswer>
          Once your order has been shipped, you will receive a tracking number
          via email. You can easily track your order's status on our website or
          through our mobile app.
        </FAQAnswer>
      </FAQItem>
      <FAQItem>
        <FAQQuestion>4. What is your return policy?</FAQQuestion>
        <FAQAnswer>
          We accept returns within 30 days of purchase. Items must be unworn,
          unwashed, and in their original packaging with all tags attached.
          Please refer to our Returns & Exchanges page for detailed
          instructions.
        </FAQAnswer>
      </FAQItem>
      <FAQItem>
        <FAQQuestion>5. How can I contact customer support?</FAQQuestion>
        <FAQAnswer>
          You can reach our dedicated customer support team via email at{" "}
          <a style={{ color: "#00b4d8", fontWeight:'bold' }} href="mailto:rksadeck@gmail.com">
            rksadeck@gmail.com
          </a>{" "}
          or by phone at 1-800-CRWN-HELP. Our support representatives are
          available 24/7 to assist you with any inquiries or concerns.
        </FAQAnswer>
      </FAQItem>
    </FAQContainer>
  )
}

export default FAQ
