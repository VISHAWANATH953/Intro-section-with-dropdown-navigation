import React,{useState} from 'react'
import {Navbar} from './components/Navbar'
import Home from './components/Home'
import {useMediaQuery} from 'react-responsive'

const App:React.FC =()=> {
const isMobile = useMediaQuery({maxWidth:762})
const [isOpen,setIsOpen] = useState<Boolean>(false)
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile}/>
      <Home isOpen={isOpen} isMobile={isMobile}/>
    </>
  );
}


export default App;
