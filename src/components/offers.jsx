import LaptopIllustration from "../images/illustration-laptop-desktop.svg"

function Offers() {

    return (
        <div id="offers">
        <div className="offers-image-box">
        <img className="laptop-image" src={LaptopIllustration} alt="laptop illustration" />

        </div>
        <div className="offers-content-box">
        <div className="offers-content">
        <h4>Free, open, simple</h4>
        <p>
        Blogr is a free and open source application backed by a large 
        community of helpful developers. It supports 
        features such as code syntax highlighting, RSS feeds, 
        social media integration, third-party commenting tools, 
        and works seamlessly with Google Analytics. The architecture 
        is clean and is relatively easy to learn.
        </p>

        </div>
        <div className="offers-content">
        <h4> Powerful tooling</h4>
        <p>
        Batteries included. We built a simple and straightforward 
        CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites.
   
        </p>

        </div>
            
        </div>

        </div>
    )
    
}

export default Offers;

