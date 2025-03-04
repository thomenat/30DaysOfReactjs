import { useState, useEffect, useRef} from 'react'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);



    return (
    <div className='container'>
        <button className='dropdown-btn'>Select an option</button>
        <div className='dropdown-content'>
          <a href='#' onClick={handleOptionClick}>Option 1</a>
          <a href='#' onClick={handleOptionClick}>Option 2</a>
          <a href='#' onClick={handleOptionClick}>Option 3</a>
        </div>
    
    <div>Dropdown</div>
    </div>
  )
}

export default Dropdown