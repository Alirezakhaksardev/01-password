import { useState } from 'react';
import './App.css'
import {Icon} from "react-icons-kit";
import {eye} from "react-icons-kit/feather/eye";
import {eyeOff} from "react-icons-kit/feather/eyeOff";

function App() {

  const [toggle , setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className='wrapper'>
        <div className="input-fields">
          <span onClick={handleClick}>
            {
              !toggle ? 
              <Icon icon={eye} size={25} /> :
              <Icon icon={eyeOff} size={25} />
            }
    
          </span>
          <input type={!toggle ? "password" : "text"} />
        </div>
      </div>
    </>
  )
}

export default App
