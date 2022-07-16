import React from 'react'
import styled from 'styled-components'
import { CartState } from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import {deviceW, deviceH} from '../Breakpoints'


const ProductWindow = ({products, search, searchItems,page, setPages}) => {

    const { addToCart, formatPeso, setModal, setModalItem, loading, setLoading } = CartState()

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000)
    }, [setLoading])

    const confirmAdd = (product) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'))
        let duplicateItem = cartItems.find(item => item.ID === product.ID)
        if(duplicateItem) {
            Swal.fire({
                type: 'error',
                title: 'No se pudo agregar el producto',
                text: 'El producto ya se encuentra en el carrito',
                timer: 2000
            })
        } else {
            addToCart(product)
            Swal.fire({
                type: 'success',
                title: 'Producto agregado',
                text: 'El producto se ha agregado al carrito',
                timer: 2000
            })
        }
    }

    const pagesCount = Math.ceil(products.length / 12)
    setPages(pagesCount)
    
    let totalPages = []

    for(let i = 1; i <= pagesCount; i++) {
        let pageContainer = []
        for(let j = (i - 1) * 12; j < i * 12; j++) {
            if(products[j]) {
                pageContainer.push(products[j])
            }
        }
        totalPages.push(pageContainer)
    }
    
    return (
        <ProductWindowStyle>
            {loading ?
            <>
            {search && (searchItems.length > 0 ? searchItems.map(product => (
                <Card key={product.id}>
                    <Img src={product.Imagen} alt=""/>
                    <Title>{product.Artista}</Title>
                    <Album>{product.Album}</Album>
                    <Price>{formatPeso(product.Precio)}</Price>
                    <Button onClick={() => confirmAdd(product)}>AÑADIR AL CARRITO</Button> 
                    <Button onClick={() => {
                        setModal(true);
                        setModalItem(product)
                    }}>
                        <FontAwesomeIcon  icon={faList} />
                    </Button>
                </Card> 
            )) : <div><h1>Sin Resultados</h1></div>)}
            </>
            : <div>Cargando articulos...</div>
            }
            {loading &&
            <>
            {!search && totalPages[page-1] && totalPages[page-1].map(product => (
                <Card key={product.id} >
                    <Img src={product.Imagen} alt={product.nombre}/>
                    <Title>{product.Artista}</Title>
                    <Album>{product.Album}</Album>
                    <Price>{formatPeso(product.Precio)}</Price>
                    <Button onClick={() => confirmAdd(product)}>AÑADIR AL CARRITO</Button>
                    <Button onClick={() => {
                        setModal(true);
                        setModalItem(product)
                    }}>
                        <FontAwesomeIcon  icon={faList} />
                    </Button>
                </Card>
            ))}
            </>}
        </ProductWindowStyle>
    )
}
export default ProductWindow;

const ProductWindowStyle = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: auto auto auto auto auto auto;
    background-color: #f5f5f5;
    border-radius: 10px; 
    padding: 30px;
    animation: productslide .4s 0s both;
    @keyframes productslide {
        from {
            height: 0px;
        }
        to {
            min-height: 1000px;
        }
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        grid-template-columns: auto auto;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        grid-template-columns: auto auto auto auto ;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        grid-template-columns: auto auto auto auto auto auto;
    }

`
const Card = styled.li`
    display: flex;
    height: 380px;
    width: 250px;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
    border-radius: 10px;
    margin: 0 20px 0 20px;
    box-shadow: 0px 0px 10px #000000;
    animation: fadein .5s .5s both;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }


    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 140px;
        height: 320px;
        margin: 0 10px 10px 10px;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        width: 160px;
        height: 320px;
        margin: 0 10px 10px 10px;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        width: 200px;
        height: 320px;
        margin: 0 10px 10px 10px;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 200px;
        height: 320px;
        margin: 0 10px 10px 10px;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        width: 180px;
        height: 300px;
        margin: 0 15px 0 15px;
    }
`
const Title = styled.h1`
    font-size: 1.2em;
    font-weight: bold;
    color: #000;
    margin-top: 10px;
    margin-bottom: 10px;
    

`
const Album = styled.h2`
    font-size: 1em;
    color: #000;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-decoration: none;
   
`
const Price = styled.h2`
    font-size: 1em;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 100px;
        height: 100px;
     }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        width: 130px;
        height: 130px;
    }
`
const Button = styled.button`
    background-image:linear-gradient(97deg, #daa520 0%, #d6a322 26%, #d8a72c 58%, rgba(251,245,183,1) 87%, rgba(252,246,186,1) 100%); 
    background-size: 100% auto;
    color: #000;
    border: 1px solid #000;
    width: 90%;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    font-size: .9em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-size: 140% auto;
        color: #fff;
        text-shadow: 0px 0px 5px #000;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: .8em;
        padding: 5px;
        margin-top: 5px;
     }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
       padding: 6px;
       margin-top: 6px;
    }
`