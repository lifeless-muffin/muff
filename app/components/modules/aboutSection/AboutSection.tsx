import SectionHeading from "../../elements/headings/SectionHeading";

type Props = {
}

export default function AboutSection (props: Props) {
  return (
    <section className="about-section">
      <div className="about-header-section">
        <SectionHeading text="About me"/>
      </div>

      <div className="about-main-container">
        <div className="about-image-container">
          <img className="about-image" src="/assets/placeholder-image.jpg" />
        </div>

        <div className="about-content-container">
          <p className="about-content-paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>

      </div>
    </section>
  )
}