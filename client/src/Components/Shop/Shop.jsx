import React, {useEffect}  from 'react';
import PayMethod from './PayMethod';
import ShopFilters from './ShopFilters';
import styled from 'styled-components';
import  { device } from '../Breakpoints'
import ProductWindow from './ProductWindow';
import { getProducts } from '../../Service/publicApiService';
 

const Shop = ({shop}) => {
    
    const [products, setProducts] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [ searchItems, setSearchItems ] = React.useState([]);

    const [yearModal, setYearModal] = React.useState(false);
    const [genreModal, setGenreModal] = React.useState(false);
  
    useEffect(() => {
        getProducts(shop).then(data => {
            setProducts(data);
        })
    }, [shop]);

    return (
        <ShopVoid>
            <ShopStyle className='Shop' >
                <ShopFilters
                    yearModal={yearModal}
                    genreModal={genreModal}
                    setYearModal={setYearModal}
                    setGenreModal={setGenreModal}
                    setSearch={setSearch}
                    setSearchItems={setSearchItems}
                    products={products}
                />

                <ProductWindow 
                    shop={shop} 
                    products={products}
                    search={search}
                    setSearch={setSearch}
                    searchItems={searchItems}
                    setSearchItems={setSearchItems}
                    />
                   
                
            </ShopStyle>
            <PayMethod /> 
        </ShopVoid> 
    )
}
export default Shop;

//styled components
const ShopStyle = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 0;
    align-items: center;
    width: 95%;
    background-color: #000;
    padding: 10px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    border: 1px solid #000000; 
    text-align: center;
    animation: slidein 1.5s both;
    flex-direction: column
    height: 100%;
    @keyframes slidein {
        from {
            height: 0px;
            margin-top: 0px;
        }
        to {
            height: 1000px;
            margin-top: 6%;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: ${device.laptopL}) { 
     height: 100%;
    }
    @media (min-width: ${device.desktopR}) {
        height: 100%;
        margin-top: 10%;
        transition: all 0.3s ease-in-out;
    } 

`
const ShopVoid = styled.div`
    flex-direction: column;
    display: flex;
`