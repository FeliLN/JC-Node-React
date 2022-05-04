import React, { useCallback } from 'react'
import styled from 'styled-components'
import { device } from '../Breakpoints';
import { CartState } from '../../Context';
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons'

const ItemSelected = () => {

    const { addToCart, formatPeso, setModal, modalItem } = CartState()
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setModal(false);
        }
    }, [setModal]);
    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

  return (
    <Modal >
        <Card>
            <Close onClick={() => setModal(false)}><FontAwesomeIcon icon={faTimes} /></Close>
            <ContainerLeft>
                <ReactImageMagnify style={{ marginLeft: '20px'}} {...{
                    
                    smallImage: {
                        alt: '',
                        isFluidWidth: true,
                        src: modalItem.Imagen,
                    },
                    largeImage: {
                        src: modalItem.Imagen,
                        width: 1800,
                        height: 1800
                    }
                }} />
            </ContainerLeft>
            <ContainerRight>
                <Title>{modalItem.Artista}</Title>
                <Album>{modalItem.Album}</Album>
                <Price>{formatPeso(modalItem.Precio)}</Price>
                <Year>Fecha de publicación: {modalItem.Año}</Year>
                <Description>{modalItem.Descripcion}</Description>
                <Tags>{modalItem.Tags}</Tags>
                <Button onClick={() => addToCart(modalItem)}>AÑADIR AL CARRITO</Button>
            </ContainerRight>
        </Card>
    </Modal>
  )
}

export default ItemSelected

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    animation: fadein 1s 1s both;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    color: #000;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }
`

const Card = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    animation: fadein 1s 1s both;
    transition: 0.3s;
    z-index: 1000;
    @media ${device.laptopL} {
        width: 90%;
        height: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
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
const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    .ImageMagnify{
        border-radius: 10px;
    }
    `
const ContainerRight = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5%;
    border-radius: 10px;
    background-color: #d0d0d0;
    margin-left: 20px;
    `
const Title = styled.h1`
    font-size: 3em;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`
const Album = styled.h2`
    font-size: 2.5em;
    color: #000;
    margin-bottom: 10px;
`
const Price = styled.h2`
    font-size: 2.5em;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
    width: 90%;
    display: flex;
    text-align: center;
`
const Year = styled.h2`
    font-size: 2em;
    color: #000;
`

const Description = styled.p`
    font-size: 1.5em;
    color: #000;
    margin-bottom: 10px;
    width: 90%;
    display: flex;
    text-align: center;
    height: 50%;
`
const Tags = styled.p`
    font-size: 1.5em;
    color: #000;
    margin-bottom: 10px;
    width: 90%;
    display: flex;
    text-align: center;

`


const Button = styled.button`
    background-image:linear-gradient(97deg, #b9801d 0%, rgba(179,135,40,1) 26%, rgba(191,149,63,1) 58%, rgba(251,245,183,1) 87%, rgba(252,246,186,1) 100%); 
    background-size: 100% auto;
    color: #000;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px 30px 10px 30px;
    font-size: .9em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-top: auto;
    &:hover {
        background-size: 140% auto;
        color: #fff;
        text-shadow: 0px 0px 5px #000;
    }
`