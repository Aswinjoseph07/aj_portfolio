import "./App.css";
import "./index.css";

function Skills() {
  return (
    <div className="sk bg-dark text-white min-vh-100 w-100 ">
      <h1 className="text-center">Skills</h1>

      <div className="skills-grid">
        <div className="skill">
          <img src="https://images.icon-icons.com/171/PNG/512/html5_23329.png" alt="HTML" />
          <h3>HTML</h3>
        </div>

        <div className="skill">
          <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-css3-3d-icon-png-download-3640300.png" alt="CSS" />
          <h3>CSS</h3>
        </div>

        <div className="skill">
          <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill">
          <img src="https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG.png" alt="React" />
          <h3>React</h3>
        </div>

        <div className="skill">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/048/332/150/small_2x/java-programming-language-java-logo-free-png.png" alt="Java" />
          <h3>Java</h3>
        </div>

        <div className="skill">
          <img src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png" alt="Spring Boot" />
          <h3>Spring Boot</h3>
        </div>

        <div className="skill">
          <img src="https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png" alt="MySQL" />
          <h3>MySQL</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
