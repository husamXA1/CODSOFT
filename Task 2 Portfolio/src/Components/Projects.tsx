import todoImg from "/assets/todoapp.png";
import mealGeneratorImg from "/assets/mealgenerator.png";
import blogrImg from "/assets/blogr.png";

export default function Projects() {
  return (
    <div className="projects py-5" id="projects">
      <div className="container">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          <ProjectCard
            image={todoImg}
            title="Simple TODO App"
            description="Embarking on my React journey, I transformed theoretical knowledge into practical mastery with a compelling TODO app. This project, born after completing the enlightening Scrimba introduction course, encapsulates a spectrum of features. Users can seamlessly add, remove, and mark tasks as completed, enhancing the app's functionality. The inclusion of a stylish dark mode, coupled with a responsive design, ensures a visually pleasing experience across devices. Elevating the user experience further, the integration of local storage enables task persistence even after the browser is closed. This project not only showcases a functional TODO app but emphasizes my commitment to crafting projects that are both aesthetically pleasing and technically robust."
            link="https://simple-todo-xa1.netlify.app/"
          />

          <ProjectCard
            image={mealGeneratorImg}
            title="Random Meal Generator"
            description="Demonstrating my prowess in front-end development, I crafted a delightful Random Meal Generator using vanilla HTML, CSS, and JavaScript. This project taps into the excitement of culinary exploration by fetching random meal ideas from a dynamic API. Users can hit the generator button to discover a diverse range of meals, each presented with a touch of styling for a visually engaging experience. The seamless integration of the random meal API adds an element of unpredictability, making each visit to the generator a culinary adventure. This project not only showcases my skills in web development but also reflects my passion for creating interactive and enjoyable user experiences."
            link="https://husamxa1.github.io/RandomMealGenerator/"
          />

          <ProjectCard
            image={blogrImg}
            title="Blogr Landing Page"
            description="Embarking on a challenge from frontendmentor.io, I ventured into the world of web design, giving life to the vision of Blogr through a captivating landing page. Merging the classic trio of vanilla HTML, CSS, and the modern touch of Bootstrap 5, this project effortlessly marries elegance with functionality. The responsive design ensures a polished appearance on every device, beckoning users to explore the dynamic offerings of Blogr. By leveraging Bootstrap's versatility, the landing page strikes a harmonious balance between aesthetic appeal and user-friendly navigation. The clean and intuitive layout not only reflects my design skills but also demonstrates my ability to tackle real-world design challenges. This project stands as a testament to my commitment to continuous learning and my passion for creating digital spaces that seamlessly blend style and substance."
            link="https://husamxa1.github.io/blogr-landing-page/"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="d-md-flex my-5 py-5 align-items-center project-card">
      <div className="w-100">
        <img className="img-fluid" src={image} alt="project-image" />
      </div>
      <div className="w-100">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>VIEW PROJECT</a>
      </div>
    </div>
  );
}
