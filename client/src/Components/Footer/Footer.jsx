import React, {Suspense} from 'react'
import News from './News'
//3DModel
import  ThemeScene  from './Model3D/ThemeScene.jsx';
import { OrbitControls, Stage, BakeShadows } from '@react-three/drei'
import Vinyl from './Model3D/Vinyl.js'
import Vinyl2 from './Model3D/Vinyl2.js'
import Jukebox from './Model3D/Jukebox.js'
import Cassette from './Model3D/Cassette.js'
import RockVinyl1 from './Model3D/501vinyl.js'
import RockVinyl2 from './Model3D/Rolling_stones_vinyl.js'

//FortAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Styled Components
import styled from 'styled-components'

//device
import  { device } from '../Breakpoints'

//URLs
const FacebookUrl = 'https://www.facebook.com/JohnnyCash.Vinilos'
const InstagramUrl = 'https://www.instagram.com/johnnycash.vinilos/'
const WhatsappUrl = 'https://wa.me/5493416441022'

const Footer = (props) => {
    const [counter, setCounter] = React.useState(0)
    React.useEffect(function appRunTimer() {
        const timer = setInterval(() => {
            setCounter(counter + 1)
            if (counter === 5) {
                setCounter(0)
            }
        }, 5000)
        return function stopTimer() {
          clearInterval(timer)
        }
    }, [counter])
    const ModelCarousel = () => {
        switch (counter) {
            case 0:
                return <Vinyl2 />
            case 1:
                return <Cassette  scale={-1} rotation={[0, 0, Math.PI]}/>
            case 2:
                return <Vinyl  />
            case 3:
                return <Jukebox />
            case 4:
                return <RockVinyl1  scale={-1} rotation={[0, Math.PI, Math.PI]}/>
            case 5:
                return <RockVinyl2  scale={1} rotation={[Math.PI, 0, Math.PI]}/>

            default:
                return <Vinyl />
        }
    }
    return (
        <FooterStyle className='Footer'>
            <ContainerLeft className='Container-Left'>
                <News className='News'/>
                <Slogan className='Slogan'>
                    <Text>
                    <Title>RELIQUIAS DEL ROCK AND ROLL</Title>
                    <Subtitle>La mejor tienda online con envios a todo el país</Subtitle>
                    </Text>
                </Slogan>
            </ContainerLeft>
            <ContainerRight className='Container-Right'>
                <Logo className='Logo'>
                    <ThemeScene >
                        <Suspense fallback={null}>
                        <Stage >
                        <ModelCarousel />
                            </Stage>
                            <BakeShadows />
                        </Suspense>
                        <ambientLight intensity={0.3}/>
                        <OrbitControls makeDefault autoRotate enableZoom={false} />
                    </ThemeScene> 
                </Logo>
                <Social className='Social'>
                    <a href={FacebookUrl} >
                        <Facebook icon={faFacebookF} className='Facebook'/>
                    </a>
                    <a href={InstagramUrl} >    
                        <Instagram icon={faInstagram} className='Instagram' />
                    </a>
                    <a href={WhatsappUrl} > 
                        <Whatsapp icon={faWhatsapp} className='Whatsapp'/>
                    </a>   
                </Social>
            </ContainerRight>
        </FooterStyle>
    )
}   

export default Footer

// Styled Components
const FooterStyle = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: row;
    height: 66vh;
    z-index: 1;
    justify-content: space-evenly;
    background:linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
    @media ${device.laptopL}  { 
        height: 65.7vh;

    }
    @media ${device.desktopR} and (max-width: 1430px) {
        height: 65.7vh;
    }
`
//Container Left
const ContainerLeft = styled.div`
    width: 45vw;
    height: 60vh;
    justify-content: center;
    display: flex;
    flex-direction: column;

`
const Slogan = styled.div`
    display: flex;
    align-items: left;
    color: #0a0a0a;
    flex-direction: column;
    text-align: left;
    padding-top: 5%;
`
const Text = styled.div`

`
const Title = styled.h1`
    text-align: center;
    font-size: 2.5vw;
    font-weight: bold;
    @media ${device.laptopL} {

    }
`
const Subtitle = styled.h2`
    text-align: center;
    font-size: 1.5vw;
`
//Container Right
const ContainerRight = styled.div`
    flex-direction: column;
    height: 60vh;
    width: 45vw;
    z-index: 20;

`
const Logo = styled.div`
    height: 55vh !important;
    width: 45vw;
    z-index: 2;
    @media ${device.laptopL} {

    }
`
const Social = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: right;
`
// //FA Icon
const Facebook = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    padding: 5px;
    font-size: 2.3rem;
    margin-right: 2rem;
    border: 3px solid #0a0a0a;
    border-radius: 50%;
    background-color:transparent;
    transition: all 0.2s ease-in-out;
    -webkit-transform: scaleX(1) !important;
    transform: scaleX(1)  !important;
    &:hover {
        color: #fff;
        transform: scale(1.1) !important;
        padding: 7px;
        cursor: pointer;
        border: none;
        background: #1e5799; 
        background: -moz-linear-gradient(top,  #1e5799 0%, #2989d8 50%, #207cca 73%, #7db9e8 100%); 
        background: -webkit-linear-gradient(top,  #1e5799 0%,#2989d8 50%,#207cca 73%,#7db9e8 100%); 
        background: linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 73%,#7db9e8 100%); 
    }
`
const Instagram = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    background-color:transparent ;
    border: 3px solid #0a0a0a;
    padding: 3px;
    font-size: 2.5rem;
    margin-right: 2rem;
    transition: all .2s ease-in-out;
    -webkit-transform: scaleX(1) !important;
     transform: scaleX(1) !important;
    &:hover {
         color: #fff; 
         transform: scale(1.1) !important;
        cursor: pointer;
        background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        border: none;
        padding: 5px;
    }
`
const Whatsapp = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    background-color:transparent ;
    border: 3px solid #0a0a0a;
    padding: 3px;
    font-size: 2.5rem;
    margin-right: 2rem;
    transition: all 0.2s ease-in-out;
    -webkit-transform: scaleX(1) !important;
     transform: scaleX(1) !important;
    &:hover {
        color: #fff;
        transform: scale(1.1) !important;
        cursor: pointer;
        background: #25D366;
        border:none;
        padding: 5px;
    }
`


