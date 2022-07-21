import Link from "next/link";
import SocialMediaButton from "../../elements/buttons/SocialMediaButton";
import PrimaryHeading from "../../elements/headings/PrimaryHeading";
import SectionHeading from "../../elements/headings/SectionHeading";
import PrimaryParagraph from "../../elements/paragraphs/primaryParagraph";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section-container">
      <div className="hero-section-content">
        <PrimaryHeading text="Hey there, I am Mansoor Roeen, I enjoy creating awesome web applications" />
        <PrimaryParagraph text="I have 1 year of experience designing and developing intractive web-applications and websites; I love learning and using new technologies" />
      </div>

      <div className="hero-section-socials mt-8 flex gap-x-2">
        <SocialMediaButton label="Github" source="/assets/social-icon-github.svg" pushTo="/" />
        <SocialMediaButton label="Instagram" source="/assets/social-icon-instagram.svg" pushTo="/" />
        <SocialMediaButton label="Twitter" source="/assets/social-icon-twitter.svg" pushTo="/github" />
        <SocialMediaButton label="Dribbble" source="/assets/social-icon-dribbble.svg" pushTo="/github" />

        <div className="hero-section-cta">
          <Link href="/">
            <button className="email-me-btn">
              Email Me
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  </section>  
);

export default HeroSection;