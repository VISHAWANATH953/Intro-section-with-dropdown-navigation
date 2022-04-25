import styled from 'styled-components'
import {Fig,Img} from './Navbar'
import HeroImg from '../images/image-hero-mobile.png'
import Meet from '../images/client-meet.svg'
import DataBiz from '../images/client-databiz.svg'
import Maker from '../images/client-maker.svg'
import AudioPhile from '../images/client-audiophile.svg'

interface HomeProps {
  isMobile:Boolean,
  isOpen:Boolean
}

const Home:React.FC<HomeProps> = ({isMobile,isOpen}) => {
const HomeSec = styled.section`
width:100%;
height:${isMobile?"100%":"65vh"};
display:flex;
align-items:center;
justify-content:${isMobile?"center":"space-around"};
flex-flow:${isMobile?"column":"row-reverse"} nowrap;
padding:2rem;
${isMobile && isOpen &&( "background-color:rgba(0,0,0,0.5);")}
`
const HomeSection = styled.section`
margin-top:2.5rem;
text-align:${isMobile?"center":"left"};
`
const H1 = styled.h1`
font-size:${isMobile?"4rem":"8rem"};
font-weight:bold;
`
const P = styled.p`
${!isMobile&&"width:50rem;"}
font-size:1.9rem;
font-weight:300;
padding:1rem 0;
margin:1.25rem 0;
`

const HeroFig = styled(Fig)`
${!isMobile&&"width:50rem;"}
`
 return(
 <HomeSec>
      <HeroFig><Img src={HeroImg}/></HeroFig>
      <HomeSection >
        <H1>Make remote work</H1>
        <P>Get your team is sync. no matter your location. Streamline processes. create team rituals, and wath productivity soar.</P>
        <Btn>Learn more</Btn>
        <ImgSection>
      <FigCap><Img src={DataBiz}/></FigCap>
      <FigCap><Img src={AudioPhile}/></FigCap>
      <FigCap><Img src={Meet}/></FigCap>
      <FigCap><Img src={Maker}/></FigCap>
        </ImgSection>
      </HomeSection>
 </HomeSec>
 )
}

const FigCap = styled(Fig)`
width:8rem;
`

const Btn = styled.button`
background-color:black;
color:white;
font-weight:bold;
padding:1rem;
border-radius:1rem;
margin-bottom:2rem;
`

const ImgSection = styled.section`
width:90%;
display:flex;
align-items:center;
justify-content:space-around;
flex-flow:row nowrap;
margin-top:1.5rem;
`

export default Home;
