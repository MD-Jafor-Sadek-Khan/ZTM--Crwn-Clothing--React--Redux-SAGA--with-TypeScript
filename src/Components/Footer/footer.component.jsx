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
  Section,
  SocialIconLink,
  SocialIcons,
} from "./footer.style"
import { Link } from "react-router-dom"

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
          <p>Founded in 1200BC When the Mamoth walked the earth</p>
          <Link to="/about">
            <p>
              <button className="about_button">Read More...</button>
            </p>
          </Link>
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
        </Section>
      </BigSection>

      <Copyright>© 2024 Crwn Clothing. All rights reserved.</Copyright>
    </FooterContainer>
  )
}

export default Footer
