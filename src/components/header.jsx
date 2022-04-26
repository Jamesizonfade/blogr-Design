import introPattern from "../images/bg-pattern-intro-desktop.svg"
import Navitem from "./navitem"
import navItems from "./navitems"

const createNavItems = (navList) => {
    return (

    <Navitem
        key= {navList.id}
        title= {navList.title}
        item1= {navList.item1}
        item2= {navList.item2}
        item3= {navList.item3}
        item4= {navList.item4}
        item5= {navList.item5}
    />)
}

function Header () {
    return (
        <div className="headerContainer">

        <div className="navSection">
        <img className="introPattern" src={introPattern} alt=""/>
        <div className="navContainer">
         <a className="brand" href="#">Blogr</a>
         <div className="navitems-container">
         {navItems.map(createNavItems)}
         </div>
        </div>
        <div className="nav-buttons">
         <button className="button-transparent">Login</button>
         <button className="button-white">Sign Up</button>
         </div> 
        </div>
        <div className="intro-content">
             <h1 className="intro-heading">A modern publishing platform</h1>
             <p className="intro-paragraph"> Grow your audience and build your online brand</p>
             <div>
             <button className="button-white">Start for Free</button>
             <button className="button-bordered">Learn More</button>
             </div>
         </div>


        </div>
    )
        
    
}

export default Header