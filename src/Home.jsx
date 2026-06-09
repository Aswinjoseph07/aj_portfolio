import "./App.css";
import "./index.css";

function Home() {
  return (
    <div className="bg-dark text-white d-flex align-items-center">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row align-items-center justify-content-evenly gy-5">

          {/* Text Content */}
          <div className="col-12 col-md-5 col-lg-4 text-center text-md-start">
            <h3>I'm</h3>
            <h1 className="fw-bolder display-5">Aswin Joseph A</h1>
            <h4 className="mb-4">Full Stack Developer</h4>

            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start mb-4">
              <a
                href="https://www.linkedin.com/in/aswinjoseph07/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2496/2496097.png"
                  alt="LinkedIn"
                  width="40"
                />
              </a>

              <a
                href="https://github.com/Aswinjoseph07"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <img
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt="GitHub"
                  width="40"
                />
              </a>

              <a
                href="https://leetcode.com/u/AJcode7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"
                  alt="LeetCode"
                  width="40"
                />
              </a>
            </div>

            {/* Resume Button */}
            <a href="/ASWIN JOSEPH A (resume).pdf" download>
              <button className="btn btn-outline-success btn-lg">
                RESUME
              </button>
            </a>
          </div>

          {/* Profile Image */}
          <div className="col-12 col-md-5 col-lg-4 text-center">
            <img
              src="aswin.jpeg"
              className="rounded-circle img-fluid border border-danger border-4"
              style={{ maxWidth: "350px" }}
              alt="profile"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;