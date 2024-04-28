import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg"
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg"
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg"
import {
  BigSection,
  Copyright,
  FollowSection,
  FooterContainer,
  LinkItem,
  LinkList,
  Paragraph,
  Section,
  SocialIconLink,
  SocialIcons,
} from "./footer.style"
import { Link } from "react-router-dom"
import { EmphasizedText } from "../About/about.component"

const Footer = () => {
  return (
    <FooterContainer>
      <FollowSection>
        <h3>Follow us:</h3>
        <SocialIcons>
          <SocialIconLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </SocialIconLink>
        </SocialIcons>
      </FollowSection>

      {/* Second Section */}
      <BigSection>
        <Section>
          <h3>About us:</h3>
          <p>
            <Paragraph>
              Welcome to <EmphasizedText>CRWN Clothing</EmphasizedText>, where{" "}
              <EmphasizedText>fashion</EmphasizedText> meets{" "}
              <EmphasizedText>passion</EmphasizedText> and{" "}
              <EmphasizedText>style</EmphasizedText> is{" "}
              <EmphasizedText>limitless</EmphasizedText>. Step into a world
              where&nbsp;{" "}
              <Link className="about_button" to="/about">
                Read More...
              </Link>
            </Paragraph>
          </p>
        </Section>
        <Section>
          <h3>Contact us:</h3>
          <p>
            Email:&nbsp;&nbsp;
            <a
              style={{ color: "#00b4d8", fontWeight: "bold" }}
              href="mailto:rksadeck@gmail.com"
            >
              rksadeck@gmail.com
            </a>
          </p>

          <p>
            Phone:&nbsp;&nbsp;
            <a
              style={{ color: "#00b4d8", fontWeight: "bold" }}
              href="tel:+8801829641823"
            >
              +8801829641823
            </a>
          </p>
        </Section>
        <Section>
          <h3>Quick Links:</h3>
          <p>
            <LinkList>
              <LinkItem>
                <a href="/faq">FAQ</a>
              </LinkItem>
              <LinkItem>
                <a href="/terms">Terms of Service</a>
              </LinkItem>
              <LinkItem>
                <a href="/privacy">Privacy Policy</a>
              </LinkItem>
            </LinkList>
          </p>
        </Section>
      </BigSection>

      <Copyright>© 2024 Crwn Clothing. All rights reserved.</Copyright>
    </FooterContainer>
  )
}

export default Footer
