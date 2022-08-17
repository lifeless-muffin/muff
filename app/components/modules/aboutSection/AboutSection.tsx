import SectionHeading from "../../elements/headings/SectionHeading";

type Props = {
}

export default function AboutSection (props: Props) {
  return (
    <section className="about-section">
      <div className="about-header-section">
        <SectionHeading text="More about me"/>
      </div>

      <div className="about-main-container">
        <div className="about-image-container">
          <img className="about-image" src="/assets/placeholder-image.jpg" />
        </div>

        <div className="about-content-container">
          <p className="about-content-paragraph">
            I enjoy designing and creating web applications, using modern web technologies.
            My interest for web development, and coding in general started in 2018, and over the few years
            I've learned a lot, and hope to continue learning, and creating.
          </p>
        </div>

      </div>
    </section>
  )
}