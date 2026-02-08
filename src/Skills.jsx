import "./App.css";
import "./index.css";

function Skills() {
  return (
    <div className="sk bg-dark text-white w-100 position-relative ">
      <h1 className="text-center">Skills</h1>

      <div className="skills-grid">
        <div className="skill">
          <h3 className="border border-info p-3 rounded">HTML</h3>
        </div>

        <div className="skill"> 
          <h3 className="border border-info p-3 rounded">CSS</h3>
        </div>

        <div className="skill">   
          <h3 className="border border-info p-3 rounded">JavaScript</h3>
        </div>

        <div className="skill">
            <h3 className="border border-info p-3 rounded">React</h3>
        </div>

        <div className="skill">
          <h3 className="border border-info p-3 rounded">Java</h3>
        </div>

        <div className="skill">
          <h3 className="border border-info p-3 rounded">Spring Boot</h3>
        </div>

        <div className="skill">
          <h3 className="border border-info p-3 rounded">MySQL</h3>
        </div>
          <div className="skill">
          <h3 className="border border-info p-3 rounded">Github</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
