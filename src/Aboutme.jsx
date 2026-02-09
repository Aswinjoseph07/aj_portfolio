import "./App.css";
import "./index.css";

function Aboutme() {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center">

          {/* Heading */}
          <div className="col-12 text-center mb-4">
            <h1>ABOUT ME</h1>
          </div>

          {/* Text */}
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <p className="fs-3">
              I am a motivated and detail-oriented fresher seeking an opportunity
              to begin my career as a Full Stack Developer. I have a strong
              interest in building user-focused applications. I am committed to
              continuous learning, adapting to new technologies, and delivering
              quality work. I am eager to contribute to a collaborative team
              environment while gaining hands-on industry experience and growing
              professionally.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Aboutme;
