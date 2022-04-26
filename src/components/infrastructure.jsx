import CirclesPattern from "../images/bg-pattern-circles.svg"
import Phones from "../images/illustration-phones.svg"

function Infrastructure () {
    return (
        <div id="infrastructure">
        <div className="infrastructure-container">
        <img className="circles-image" src={CirclesPattern} alt="circles pattern"/>
        <div className="infrastructure-content">
        <h3> State of the Art Infrastructure </h3>
        <p> With reliability and speed in mind, worldwide data centers 
        provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where 
        your readers are, keeping your site competitive.
        </p>

        </div>
        </div>
        <div className="phone-image-box">
        <img className="phone-image" src={Phones} />
        </div>
        </div>
    )
}

export default Infrastructure;
