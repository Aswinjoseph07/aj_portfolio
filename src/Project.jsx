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
            <div className="ratio ratio-16x9">
            <img className="rounded-top"
              src="/WhatsApp Image 2026-03-14 at 11.58.15 AM.jpeg" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">student-acadmaic portal</h5>
              <h6 className="card-subtitle">ReactNative-Project</h6>
              <p className="card-text">
               A full-stack academic management system that allows staff to manage student academic data 
               and enables students to access their academic information through a mobile application.
              </p>

        <a href="https://github.com/Aswinjoseph07/acadamic_portal_reactNative" target="_blank" >
       <button className="card btn btn-outline-primary">github link</button></a>

            </div>
          </div>
        </div>
    
    
        <div className="col-12 col-md-4 col-xxl-4">
          <div className="card rounded-3 bg-info ">
            <img className="rounded-top"
              src="/Screenshot 2026-02-10 150725.png" alt="" />
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