import React, {useState} from 'react'
import Johnny from '../Images/johnnycash.png'

//Componentes
import Footer from '../Footer/Footer';
import Header from './Header/Header';
import Shop from '../Shop/Shop';

// styled components
import styled from 'styled-components';
import { deviceW, deviceH, vh } from '../Breakpoints';

//Mids
import MidTop from "./SVGcurves/MidTop";
import MidBot from "./SVGcurves/MidBot";
import { CartState } from '../../Context';
import ItemSelected from '../Shop/ItemSelected';
import axios from 'axios';


export const Home = () => {
    const [shop, setShop] = useState([]);
    const [shopEnabled, setShopEnabled] = useState(false);
    const [search, setSearch] = React.useState(null);
    const [searchItems, setSearchItems] = useState([]);
    const [searchEnabled, setSearchEnabled] = useState(false);

    const {modal} = CartState();

    React.useEffect(() => {
        axios.post('/feedback').then(res => {
            console.log(res.data);
        }
        ).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <HomeStyle className='Home'>
            {modal && <ItemSelected />}
            <HeaderStyle className='Header'>
                <Header 
                    setShop={setShop} 
                    shop={shop} 
                    setShopEnabled={setShopEnabled} 
                    shopEnabled={shopEnabled}
                    setSearchItems={setSearchItems}
                    searchItems={searchItems}
                    setSearchEnabled={setSearchEnabled}
                    searchEnabled={searchEnabled}
                    setSearch={setSearch}
                    search={search}
                />
                <JohnnyCash src={Johnny} alt='JohnnyCash' />
            </HeaderStyle>
            <MidTop/>
            <ShopStyle className='Shop'>
                { shopEnabled && <Shop shop={shop} search={search} setSearch={setSearch}/> }
            </ShopStyle>
            <MidBot />
            <FooterStyle className='Footer'>
                <Footer />
            </FooterStyle>
    </HomeStyle>
    );
}

export default Home;

const HomeStyle = styled.div`
   flex-direction: column;
   height: ${vh}px;
   width: 100vw;

`
const HeaderStyle = styled.div`

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 360px;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        height: 23vh;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        height: 23vh;
    }
   
`
const JohnnyCash = styled.img`
    width: 9vw;
    height: 9vw;
    position: absolute;
    top: 10%;
    left: 70%;
    z-index: 10;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: none;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        display: block;
        height: 9vw;
        top: 4%;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        display: block;
        top: 8.2%;
        left: 73%;
    } 
    @media ${deviceW.laptopL} and ${deviceH.laptopL} {
        display: block;
        top: 8%;
        left: 73%;
    } 
    @media ${deviceW.desktopS} and ${deviceH.desktopS} {
        display: block;
        top: 9.3%;
        left: 73%;
    } 
    @media ${deviceW.desktopL} and ${deviceH.desktopL} {
        display: block;
        top: 8.1%;
        left: 73%;
    } 
`
const FooterStyle = styled.div`
    display:flex;
    justify-content: center;
    align-items: end;
    flex-direction: row ;
    transition: all 1s ease-in-out;
`
const ShopStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


