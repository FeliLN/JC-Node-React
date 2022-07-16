import React, { useCallback } from 'react'
import styled from 'styled-components'
import { deviceW, deviceH } from '../Breakpoints';
import { CartState } from '../../Context';
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ImageCarousel from './ImageCarousel';


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
                        width: 10,
                        height: 1
                    },
                    largeImage: {
                        src: modalItem.Imagen,
                        width: 1800,
                        height: 1800
                    }
                }} />
                <ImageCarousel item={modalItem} />
            </ContainerLeft>
            <ContainerTop>
                <img src={modalItem.Imagen} alt='' className="imgitem"/>
            </ContainerTop>
            <ContainerRight>
                <Title>{modalItem.Artista}</Title>
                <Album>{modalItem.Album}</Album>
                <Price>{formatPeso(modalItem.Precio)}</Price>
                <Year>Fecha de publicación: {modalItem.Año}</Year>
                <Description>{modalItem.Descripcion}</Description>
                <Tags>{modalItem.Tags}</Tags>
                <Button onClick={() => addToCart(modalItem)}>AÑADIR AL CARRITO</Button>
                <section>
                <a href={modalItem.FacebookURL} >
                        <Facebook icon={faFacebookF} className='Facebook'/>
                    </a>
                    <a href={modalItem.InstagramURL} >    
                        <Instagram icon={faInstagram} className='Instagram' />
                    </a>
                    </section>
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
    box-sizing: border-box;
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
   @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        box-sizing: content-box;
        width: 50%;
        height: 50%;
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
    z-index: 100;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    } 
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        flex-direction: column;
    }

    @media ${deviceW.laptopL} {
        flex-direction: row;
        width: 90%;
        height: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
   
`
const ContainerTop = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 400px;
    margin-left: 100px;
    
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: flex;
        width: 360px;
        height: 320px;
        .imgitem{
            object-fit: cover;
            width: 320px;
            height: 320px;
        }
    }

`
const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    .ImageMagnify{
        border-radius: 10px;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: none;
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
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 360px;
        height: 100%;
        
    }
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
    background-image:linear-gradient(97deg, #daa520 0%, #d6a322 26%, #d8a72c 58%, rgba(251,245,183,1) 87%, rgba(252,246,186,1) 100%); 
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

// //FA Icon
const Facebook = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    padding: 5px;
    font-size: 2.3rem;
    margin-top: 20px;
    margin-right: 2rem;
    border: 3px solid #0a0a0a;
    border-radius: 50%;
    background-color:transparent;
    transition: all 0.2s ease-in-out;
    z-index: 1;
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