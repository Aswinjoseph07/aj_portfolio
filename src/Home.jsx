import "./App.css";
import "./index.css";
function Home() {
  return (
    <div className="bg-dark text-white min-vh-100 w-100 position-relative">
      
      <div className="pr">
        <img src="aswin.jpeg" className="rounded-circle w-75 h-75" alt="profile" />
      </div>

      <div className="name1" style={{position:"absolute",top:"30%" ,left:"15%"}}>
        <h3>I'm</h3>
        <h2 className="ms-3">Aswin Joseph A</h2>
        <h3 className="ms-2">Full Stack Developer</h3>

        <div className="mt-3">
          <a
            href="https://www.linkedin.com/in/aswinjoseph07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ph rounded ms-3"
              src="https://cdn-icons-png.flaticon.com/512/2496/2496097.png"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://github.com/Aswinjoseph07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="pg rounded-circle ms-3"
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="GitHub"
            />
          </a>
           <a
            href="https://leetcode.com/u/AJcode7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="pg ms-3"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"
              alt="leetcode"
            />
          </a>
        </div>
      </div>
        <div>
        <a href="/ASWIN JOSEPH A (resume).pdf" download >
       <button className="btn btn-outline-success" 
        style={{position:"absolute",top:"65%" ,left:"18%"}}><i className="bi bi-download"></i>RESUME</button></a>
      </div>
    </div>
  );
}

export default Home;
