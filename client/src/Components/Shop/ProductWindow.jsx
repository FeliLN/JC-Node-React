import React from 'react'
import styled from 'styled-components'
import { device } from '../Breakpoints';
import { CartState } from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'


const ProductWindow = ({products, search, searchItems}) => {

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
                    <Button onClick={() => addToCart(product)}>AÑADIR AL CARRITO</Button> 
                </Card> 
            )) : <div><h1>Sin Resultados</h1></div>)}

            {!search && products.map(producto => (          
                <Card key={producto.id} >
                    <Img src={producto.Imagen} alt={producto.nombre}/>
                    <Title>{producto.Artista}</Title>
                    <Album>{producto.Album}</Album>
                    <Price>{formatPeso(producto.Precio)}</Price>
                    <Button onClick={() => confirmAdd(producto)}>AÑADIR AL CARRITO</Button>
                    <Button onClick={() => { 
                    setModal(true);
                    setModalItem(producto)
                    }}>
                        <FontAwesomeIcon icon={faList} />
                    </Button>
                </Card>
            ))}
            </>
            : <div>Cargando articulos...</div>
            }
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
    animation: productslide .4s 0s both;
    @keyframes productslide {
        from {
            height: 0px;
        }
        to {
            height: 1000px;
        }
    }
    @media (min-width: ${device.laptopL}) { 
    }
    div{
        margin-top: 20px;

    }
`
const Card = styled.li`
    display: flex;
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
    @media  (min-width: ${device.laptopL}){
        width: 250px;
        height: 350px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
    }
    
    @media  (min-width: ${device.desktopR}){
        width: 250px;
        height: 250px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
const Title = styled.h1`
    font-size: 1.2em;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`
const Album = styled.h2`
    font-size: 1em;
    color: #000;
    margin-bottom: 10px;
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
`
const Button = styled.button`
    background-image:linear-gradient(97deg, #b9801d 0%, rgba(179,135,40,1) 26%, rgba(191,149,63,1) 58%, rgba(251,245,183,1) 87%, rgba(252,246,186,1) 100%); 
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
`


