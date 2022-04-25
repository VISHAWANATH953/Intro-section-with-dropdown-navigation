import React, { Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import closeMenu from "../images/icon-close-menu.svg"

interface NavProps {
  isMobile:Boolean,
  setIsOpen:Dispatch<SetStateAction<Boolean>>,
  isOpen:Boolean
}

const Navbar:React.FC<NavProps> = ({isMobile,isOpen,setIsOpen}) => {
const Nav = styled.nav`
display:flex;
align-items:center;
flex-flow:row nowrap;
font-size:1.8rem;
padding:1.25rem;
position:relative;
width:100%;
margin-bottom:2rem;
${isMobile && isOpen &&( "background-color:rgba(0,0,0,0.5);")}
`
  return(
  <Nav>
  <Logo><Img src={logo}></Img></Logo>
 {!isMobile &&(
        <>
<Ul>
        <Li>Features</Li>
        <Li>Comapany</Li>
        <Li>Careers</Li>
        <Li>About</Li>
  </Ul>
  <BtnSection>
        <Btn>Login</Btn>
        <SBtn>Register</SBtn>
  </BtnSection>
  </>
 )
} 
      {
      isMobile &&(
      <>

    <MenuFig><Img src={menu} onClick={()=>setIsOpen(!isOpen)}/></MenuFig>
          </>
      )
    }
      {
      isMobile && isOpen &&(
      <OpenMenu>

    <MenuFig><Img src={closeMenu} onClick={()=>setIsOpen(!isOpen)}/></MenuFig>
<CUl>
        <CLi>Features</CLi>
        <CLi>Comapany</CLi>
        <CLi>Careers</CLi>
        <CLi>About</CLi>
  </CUl>
        </OpenMenu>
      )
    }

  </Nav>
  )
    
}




const OpenMenu = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
width: 60%;
height:100vh;
display:flex;
align-items:flex-start;
justify-content:flex-start;
background-color:white;
padding-top:2rem;
`

const Logo = styled.figcaption`
width:8rem;
height:5rem;
margin-top:.5rem;
`

const Img = styled.img`
width:100%;
height:100%;
`

const Fig = styled.figcaption``

const Ul = styled.ul`
display:flex;
align-items:center;
justify-content:space-around;
flex-flow:row nowrap;
margin-left:1rem;
font-size:2rem;
`

const CUl = styled(Ul)`
flex-flow:column nowrap;
align-items:flex-start;
justify-content:center;
margin:1.5rem 0 0 1rem;
`
const BtnSection = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
flex-flow:row nowrap;
position:absolute;
right:1.5rem;
font-size:1.8rem;
`

const Li = styled.li`
list-style-type:none;
margin:0 1rem;
`

const CLi = styled(Li)`
margin:.25rem 0;
`

const Btn = styled.button`
border:none;
`

const SBtn = styled(Btn)`
border:1px solid black;
border-radius:.5rem;
padding:.5rem;
margin-left:1rem;
`

const MenuFig = styled.figcaption`
justify-self:flex-end;
position:absolute;
right:1.5rem;
`

export {Navbar,Fig,Img};
