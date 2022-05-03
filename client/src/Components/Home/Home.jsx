import React, {useState} from 'react'
import Johnny from '../Images/johnnycash.png'

//Componentes
import Footer from '../Footer/Footer';
import Header from './Header/Header';

//Componentes Shop
import Shop from '../Shop/Shop';

// styled components
import styled from 'styled-components';
import { device } from '../Breakpoints';

//Mids
import MidTop from "./SVGcurves/MidTop";
import MidBot from "./SVGcurves/MidBot";
import { CartState } from '../../Context';
import ItemSelected from '../Shop/ItemSelected';

export const Home = () => {
    const [shop, setShop] = useState([]);
    const [shopEnabled, setShopEnabled] = useState(false);
    
    const [searchItems, setSearchItems] = useState([]);
    const [searchEnabled, setSearchEnabled] = useState(false);

    const {modal} = CartState();
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
                />
                <JohnnyCash src={Johnny} alt='JohnnyCash' />
            </HeaderStyle>
            <MidTop/>
            <ShopStyle className='Shop'>
                { shopEnabled && <Shop shop={shop} /> }
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
   height: 100vh;
    @media ${device.desktopR} {
        background-color: #fff;
    }
`
const HeaderStyle = styled.div`
    height: 23vh;
    @media ${device.desktopR} {
        background-color: #fff;
        height: 23vh;
    }
    @media ${device.laptopL} {
        background-color: #000000;
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

    @media (min-width: ${device.desktopR}) {
        width: 7vw;
        height: 6.3vw;
        top: 10%;
        left: 73%;
        z-index: 10;  
    }
`
const FooterStyle = styled.div`
    flex-direction: row ;
    transition: all 1s ease-in-out;
    @media ${device.desktopR} {
        flex-direction: row;   
    }
`
const ShopStyle = styled.div`
    /* margin: auto; */
    z-index:120;
`

