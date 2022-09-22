import Link from "next/link";
import SocialMediaButton from "../../elements/buttons/SocialMediaButton";
import PrimaryHeading from "../../elements/headings/PrimaryHeading";
import PrimaryParagraph from "../../elements/paragraphs/PrimaryParagraph";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section-container">
      <div className="hero-section-content">
        <PrimaryHeading text="Hey there, I am Mansoor Roeen, I enjoy creating awesome web applications" />
        <PrimaryParagraph text="I have 1 year of experience designing and developing intractive web-applications and websites; I love learning and using new technologies" />
      </div>

      <div className="hero-section-socials mt-8 flex gap-x-2">
        <SocialMediaButton label="Github" source="/assets/social-icon-github.svg" pushTo="https://github.com/lifeless-muffin/" />
        <SocialMediaButton label="Instagram" source="/assets/social-icon-instagram.svg" pushTo="https://www.instagram.com/drunkenpirate47xx/" />
        <SocialMediaButton label="Twitter" source="/assets/social-icon-twitter.svg" pushTo="https://twitter.com/roeen_mansoor" />
        <SocialMediaButton label="Dribbble" source="/assets/social-icon-dribbble.svg" pushTo="/" />

        <div className="hero-section-cta">
          <Link href="mailto:mansoorroeen71@gmail.com">
            <a target="_blank">
              <button className="email-me-btn">
                Email Me  
              </button>
            </a>
          </Link>
        </div>
        
      </div>
    </div>
  </section>  
);

export default HeroSection;