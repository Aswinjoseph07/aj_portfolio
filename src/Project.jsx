import "./App.css"
import "./index.css";
function Project() {
  return (
    <div className="container-fluid bg-dark text-white">
      
      <div className="row">
        <h1 className="col-12 text-center">PROJECT</h1>
      </div>

      <div className="row justify-content-center g-4 ms-2">

        <div className="col-12 col-md-4 col-xxl-4">
          <div className="card rounded-3 bg-info ">
            <img className="rounded-top"
              src="/Screenshot 2026-01-26 200254.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">CGPA_GPA_CALCULATOR</h5>
              <h6 className="card-subtitle">Engineering-Project</h6>
              <p className="card-text">
                Developed a full-stack web application to calculate GPA and CGPA based on semester-wise subjects.
              </p>
        <a href="https://github.com/Aswinjoseph07/frontend" target="_blank" >
       <button className="card btn btn-outline-primary">github link</button></a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-xxl-4">
          <div className="card rounded-3 bg-info ">
            <img className="rounded-top"
              src="/Screenshot 2026-01-26 204601.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">Instagram-Clone</h5>
              <h6 className="card-subtitle">React-Project</h6>
              <p className="card-text">
                The project is created using react js in my learning period and
                 temporary backend as json file inspired by Instagram web page design
              </p>

        <a href="https://github.com/Aswinjoseph07/react-project" target="_blank" >
       <button className="card btn btn-outline-primary">github link</button></a>

            </div>
          </div>
        </div>
    
    
        <div className="col-12 col-md-4 col-xxl-4">
          <div className="card rounded-3 bg-info ">
            <img className="rounded-top"
              src="/Screenshot 2026-01-26 204601.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">Todo_list</h5>
              <h6 className="card-subtitle">website</h6>
              <p className="card-text">
               A Full Stack Todo Management Web Application built using React (Vite) for the frontend
                and Spring Boot + MySQL for the backend.
              </p>

        <a href="https://github.com/Aswinjoseph07/react-project" target="_blank" >
       <button className="card btn btn-outline-primary">github link</button></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Project