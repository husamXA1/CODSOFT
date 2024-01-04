import frontend from "/assets/frontend.svg";
import responsive from "/assets/responsive.svg";
import softwareengineering from "/assets/softwareengineering.svg";

export default function Skills() {
  return (
    <div className="skills py-5" id="skills">
      <div className="container">
        <h2>SKILLS</h2>
        <div className="skills-grid d-md-flex">
          <SkillCard
            img={frontend}
            title="Front-End Development"
            description="React, HTML, CSS, and JavaScript expert with Bootstrap proficiency, crafting visually appealing and user-centric websites."
          />
          <SkillCard
            img={responsive}
            title="Responsive Design"
            description="Conqueror of frontendmentor challenges, excelling in responsive layouts and creating adaptive interfaces."
          />
          <SkillCard
            img={softwareengineering}
            title="Software Engineering"
            description="Proficient in SDLC with a focus on requirements engineering and detailed Software Requirements Specifications (SRS)."
          />
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="d-flex flex-column text-center my-3 w-100">
      <div className="skill-img">
        <img className="img-fluid" src={img} alt="skill-img" />
      </div>
      <div className="text">
        <h3 className="px-3">{title}</h3>
        <p className="px-3">{description}</p>
      </div>
    </div>
  );
}
