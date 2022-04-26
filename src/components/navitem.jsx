import { useState, useEffect, useRef  } from "react";
import IconArrowLight from "../images/icon-arrow-light.svg"


function Navitem (props) {
    const ref = useRef();

    const [dropDown, setDropDown] = useState(false)
    useOnClickOutside(ref, () => setDropDown(false));

    const showDropDown = () =>{
       setDropDown(true)
    
    }

    const hideDropDown = () => {
        setDropDown(false)
    }

    return (
        <div className="nav-item">
        <a className="navitem-title" href="#" onClick={showDropDown}> {props.title} </a>
        {dropDown? <img onClick={hideDropDown} className="reverse-arrow-icon" src={IconArrowLight}/> : <img onClick={showDropDown} className="arrow-icon" src={IconArrowLight}/>}
        {dropDown? (<div ref={ref} className="nav-item-dropdown">
            <ul>
                <li className="dropDownList"> <a className="dropdownLinks" href="#"> {props.item1} </a></li>
                <li className="dropDownList"> <a className="dropdownLinks" href="#"> {props.item2} </a></li>
                <li className="dropDownList"> <a className="dropdownLinks" href="#"> {props.item3} </a></li>
                <li className="dropDownList"> <a className="dropdownLinks" href="#"> {props.item4} </a></li>
                <li className="dropDownList"> <a className="dropdownLinks" href="#"> {props.item5} </a></li>
            </ul>
        </div>): null}
       

        </div>
    )
}

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

export default Navitem;
