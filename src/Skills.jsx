import "./App.css"
import "./index.css";
function Skills(){
     return(
        <div className="bg-dark text-white vh-100 vw-100 position-relative border border-danger mt-2">
              <h1 className="position-absolute start-50 end-50 translate-middle-x mt-5 w-25">Skills</h1>
              <div className="">
                <img className="html" src="https://images.icon-icons.com/171/PNG/512/html5_23329.png" alt="">
                </img>
                <h3 style={{position:"absolute",top:"48%",left:"19%"}}>HTML</h3>
                <img className="css" src="https://cdn3d.iconscout.com/3d/free/thumb/free-css3-3d-icon-png-download-3640300.png" alt="css"></img>
                 <h3 style={{position:"absolute",top:"48%",left:"38%"}}>CSS</h3>
                 <img className="js" src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="js"></img>
                <h3 style={{position:"absolute",top:"48%",left:"54%"}}>javascript</h3>
                <img className="react" src="https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG.png" alt=""></img>
                <h3 style={{position:"absolute",top:"48%",left:"72%"}}>REACT JS</h3>

                <img className="java" src="https://static.vecteezy.com/system/resources/thumbnails/048/332/150/small_2x/java-programming-language-java-logo-free-png.png" alt="java"></img>
               <h3 style={{position:"absolute",top:"76%",left:"27%"}}>JAVA</h3>
               <img className="spring" src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png" alt="springboot"></img>
               <h3 style={{position:"absolute",top:"76%",left:"42%"}}> SPRING BOOT</h3>
               <img className="mysql" src="https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png" alt="mysql"></img>
               <h3 style={{position:"absolute",top:"76%",left:"64%"}}>mySQL</h3>
              </div>
        </div>
     )
}

export default Skills