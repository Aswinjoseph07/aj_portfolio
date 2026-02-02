import "./App.css"
import "./index.css";
function Project(){
    return(
        <div className="bg-dark text-white vh-100 vw-100 position-relative border border-danger mt-2">
            <h1 className="position-absolute start-50 end-50 w-25 m-3 translate-middle-x">PROJECT</h1>
            <div className="calsi card border border-danger border-2 rounded-3">
                <img className="rounded-top" src="/Screenshot 2026-01-26 200254.png" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">CGPA_GPA_CALCULATOR</h5>
                    <h6 className="card-subtitle ps-4">Engineering-Project</h6>
                    <p className="card-text">Developed a full-stack web application to calculate GPA and
                         CGPA based on semester-wise subjects.</p> 
                </div>
            </div>
             <div className="insta card border border-danger border-2 rounded-3">
                <img className="rounded-top" src="/Screenshot 2026-01-26 204601.png" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">Instagram-Clone</h5>
                    <h6 className="card-subtitle ps-4">React-Project</h6>
                    <p className="card-text">The project is created using react js in my learning period 
                        and temporary backend as json file inspired by Instagram web page design.</p> 
                </div>
            </div>
        </div>
    )
}

export default Project