import React, {useState, useRef } from 'react'
import CartWidget from '../../Cart/CartWidget'
import { CartState } from '../../../Context';
//react-router
import { Link } from 'react-router-dom'

//FortAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRecordVinyl, faCompactDisc, faBook } from '@fortawesome/free-solid-svg-icons'

//Icons
import Vinyls from '../../Images/vinil.png'
import Cassettes from '../../Images/cassette2.png'
import DVD from '../../Images/DVD2.png'
import CDs from '../../Images/CD.png'
import Books from '../../Images/books1.png'
import JohnnyCash from '../../Images/johnny-cash.png'

//styled components
import styled from 'styled-components'
import  { device, size } from '../../Breakpoints'

const Header = (props) => {

    const {  setLoading } = CartState()
    const [barsEnabled, setBarsEnabled] = useState(false);

    const cdRef = useRef(null);
    const vinylRef = useRef(null);
    const dvdRef = useRef(null);
    const booksRef = useRef(null);
    const cassettesRef = useRef(null);

    const clickIcon = (e, ref) => {
        props.setShop(e)
        props.setShopEnabled(true);
        if (props.shop === e){
            props.setShop([])
            props.setShopEnabled(false);
        }
        let refColor = ref.current.style.backgroundColor;
        let gold = 'goldenrod';
        ref.current.style.backgroundColor = refColor === gold ? '#f5f5f5' : gold;
        const loaded = () => { setTimeout(() => { setLoading(true) }, 1000) }

        if (ref === cdRef){
            vinylRef.current.style.backgroundColor = '#f5f5f5';
            dvdRef.current.style.backgroundColor = '#f5f5f5';
            cassettesRef.current.style.backgroundColor = '#f5f5f5';
            booksRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }
        if (ref === vinylRef){
            cdRef.current.style.backgroundColor = '#f5f5f5';
            dvdRef.current.style.backgroundColor = '#f5f5f5';
            cassettesRef.current.style.backgroundColor = '#f5f5f5';
            booksRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }
        if (ref === dvdRef){
            cdRef.current.style.backgroundColor = '#f5f5f5';
            vinylRef.current.style.backgroundColor = '#f5f5f5';
            cassettesRef.current.style.backgroundColor = '#f5f5f5';
            booksRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }
        if (ref === cassettesRef){
            cdRef.current.style.backgroundColor = '#f5f5f5';
            vinylRef.current.style.backgroundColor = '#f5f5f5';
            dvdRef.current.style.backgroundColor = '#f5f5f5';
            booksRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }
        if (ref === booksRef){
            cdRef.current.style.backgroundColor = '#f5f5f5';
            vinylRef.current.style.backgroundColor = '#f5f5f5';
            dvdRef.current.style.backgroundColor = '#f5f5f5';
            cassettesRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }

    }

    return (
        <HeaderStyle className='Header'>
            <ContainerTop className='Container-Top'>
                <Bars className='Bars' barsEnabled={barsEnabled} onClick={() => setBarsEnabled(!barsEnabled)}  >
                    <FontAwesomeIcon icon={faBars}/>
                </Bars>
                <LinkSection className='Link-Section'>
                    {barsEnabled &&
                        <SectionEnabled>
                            <Contact className='Contact'>
                                <StyledLink to='/Contact'>CONTACTO</StyledLink>
                            </Contact>
                            <Support className='Support'>
                                <StyledLink to='/AcercaDeNosotros'>ACERCA DE</StyledLink>
                            </Support>
                        </SectionEnabled>
                    }
                </LinkSection>
                <JohhnnyCash className='Johhnny-Cash' src={JohnnyCash} />
                <section>
                    <CartWidget />
                </section>
            </ContainerTop>
            <ContainerBottom className='Container-Bottom'>
            <IconSection ref={vinylRef} className='Vinyl-icon-section' onClick={() => clickIcon('Vinilos', vinylRef)}>
                <Icon className='Icon'>     
                    <Vinyl src={Vinyls} className='Vinyl' icon={faCompactDisc}  />
                </Icon>
                <IconText className='Icon-Text'>
                    <p>VINILOS</p>
                </IconText>
            </IconSection>
                <IconSection ref={cassettesRef} className='Cassettes-icon-section'  onClick={() => {
                        clickIcon('Cassettes', cassettesRef);
                        }}>
                    <Icon className='Icon'  >
                        <Cassette src={Cassettes} className='Cassette'  />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>CASSETTES</p>
                    </IconText>
                </IconSection>
                <IconSection ref={cdRef} className='CD-icon-section' onClick={() => {
                            clickIcon('CD', cdRef);
                            }}>
                    <Icon className='Icon'>
                        <CD src={CDs} className='CD'  icon={faRecordVinyl} />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>CDs</p>   
                    </IconText>
                </IconSection>
                <IconSection ref={dvdRef} className='DVD-icon-section' onClick={() => {
                            clickIcon('DVD', dvdRef);
                            }}>
                    <Icon className='Icon'>
                        <DVDImg className='DVD' src={DVD} />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>DVDs</p>
                    </IconText>
                </IconSection>
                <IconSection ref={booksRef} className='Book-icon-section' onClick={() => {
                            clickIcon('Libros', booksRef);
                            }}>
                    <Icon className='Icon'>
                        <Book src={Books} className='Books' icon={faBook} />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>LIBROS</p>   
                    </IconText>
                </IconSection>
            </ContainerBottom>
        </HeaderStyle>
    )
}
export default Header

//Styled Components
const HeaderStyle = styled.div`
    box-sizing: content-box;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    height: 20vh;
    align-items: center; 
    color:#ffd2b4;
    background-color: #0a0a0a;
    @media ${device.laptopL} { 
        height: 26vh;
    }
    @media ${device.desktopR} and (max-width: ${size.laptopL}) { 
        width: 100%;
        height: 20vh; 
    }
`
const ContainerTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 12vh;
    padding-left: 10px;
    animation: fadeMe 2s;

    @media ${device.desktopR} {
        padding-left: 10px;  
    }
    @media ${device.laptopL} {
        padding-left: 10px;
    }
`
const Bars = styled.section`
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    transform: scale(2) rotate(0deg);
    color:#e2e2e2;
    transition: 0.2s;
    cursor: pointer;
    ${({ barsEnabled }) => barsEnabled && `
        transform: scale(2) rotate(90deg);
        &:hover {
            transform: scale(2.2) rotate(90deg);
            color: #fff;
        }
    `}
    &:hover {
        color: #fff;
    }

    @media ${device.desktopR} {
        margin-left: -20px;
    }

`
const JohhnnyCash = styled.img`
    display: flex;
    justify-content: center;
    @media ${device.laptopL} {
        width: 10vw;
        height: 5vw;
    }
    @media ${device.desktopR} and (max-width: ${size.laptopL}) {
        width: 8vw;
        height: 4vw;
        margin-top: 10px;
    }
`
const LinkSection = styled.section`
    width: 500px;
    height: 60px;
    display: flex;
    align-items: flex-start;
    transition: all 0.3s ease-in-out;
    text-shadow: 2px 2px 2px #e9e9e9;
    position: absolute;
    left: 150px;
    @media ${device.laptopL} { 
        margin-top: 3px;
    }
    @media ${device.desktopR} { 
        width: 470px;
        height: 50px;
        display: flex;
        align-items: flex-start;
        transition: all 0.3s ease-in-out;
        margin-right: 15px;
    }
`
const SectionEnabled = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 50px;
    padding-top: 100px;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    animation: slideout 0.5s;
    background:linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
    border: 2px solid #000;
    @keyframes slideout {
        from {
            transform: translateX(-100px);
        }
        to {
            transform: translateX(0px);
        }
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0a0a0a;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
    @media ${device.laptopL} { 
        margin-left: 20px;
       }
`
const Contact = styled.section`
    width : 120px;
    margin-right: 100px;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`
const Support = styled.section`
    width : 120px;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

const ContainerBottom = styled.div`
    margin-right: 150px;
    display: flex;
    align-items: center;
    width: 70vw;
    height: 12vh;
    padding-top: 20px; 
    box-sizing: content-box;
    @media ${device.desktopR} {
        margin-right: 150px;
        display: flex;
        align-items: center;
        width: 85vw;
        height: 5vh;
        padding-top: 20px; 
        box-sizing: content-box;      
    }
`
const IconSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    flex-direction: column;
    font-size: 15px;
    font-weight: bold; 
    margin-right: 20px;
    z-index: 5;
    cursor: pointer;
    @media ${device.laptopL} { 
        margin-top: 40px;
    }
    @media ${device.desktopR} { 
        height: 85px;
        margin-top: 15px;
         
    }
    &:hover {
        img{
            transform: scale(1.0);
        }
    }
   
`
const Icon = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 100px;
    height:100px;
    @media ${device.laptopL} { 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height:100px;
    }
    @media ${device.desktopR} { 
        height: 80px;
        margin-top: 5px;
    }
`   
const IconText = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    color: #2e2a2b;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
`
const Cassette = styled.img`
    color: #0a0a0a ;
    width: 75px !important;
    height: 55px !important;;  
    transition: all 0.3s ease-in-out;

    @media ${device.desktopR} { 
        transform: scale(0.8);
        &:hover {
            transform: scale(1.0);
        height: 55px !important;
        }
    
        
    }
`
const Vinyl = styled.img`
    color: #0a0a0a;
    width: 70px !important;
    height: 70px ;
    transition: all 0.3s ease-in-out;

    @media ${device.desktopR} { 
        transform: scale(0.6);
        &:hover {
        transform: scale(.7);
        }
        margin-top: -8px;
        margin-bottom: -9px;
        
    }
`
const CD = styled.img`
    color: #0a0a0a;
    width: 90px !important;
    height: 60px !important;
    transition: all 0.3s ease-in-out;

    @media ${device.desktopR} { 
        transform: scale(0.7);
        }
        &:hover {
            color: #ffffff;
            transform: scale(.8);
            cursor: pointer;
            
        }
`
const DVDImg = styled.img`
    width: 80px;
    color: #fff !important;
    filter: saturate(0.5);
    height: 60px;
    transition: all 0.3s ease-in-out;


    @media ${device.desktopR} {

        transform: scale(0.8);
        &:hover {
            color: #ffffff;
            transform: scale(1.0);
            cursor: pointer;
        
   
        }
    }
    
`
const Book = styled.img`
    width: 80px;
    height: 60px;
    transition: all 0.3s ease-in-out;

    @media ${device.desktopR} { 
        transform: scale(0.6);
        &:hover {
            color: #ffffff;
            transform: scale(.8);
            cursor: pointer;
        }
    }

`





