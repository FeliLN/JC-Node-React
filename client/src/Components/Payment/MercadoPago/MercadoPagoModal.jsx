import React from 'react'
import MercadoPago from './MercadoPago'
import styled from 'styled-components'

const MercadoPagoModal = () => {
  return (
    <ModalStyle>
        <h1>Datos cargados correctamente</h1>
        <h2>Solo queda realizar el pago. Una vez confirmado el pago, se enviará tu compra a la dirección indicada.</h2>
        <MercadoPago/>
    </ModalStyle>
  )
}

export default MercadoPagoModal

const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 8px solid #0a0a0a;
    background-color: #f5f5f5;
    width: 68%;
    height: 500px;
    box-shadow: none;
    border-radius: 10px;
    font-size: 1.5rem;
    animation: fadeIn 0.5s;
    h1{
        font-size: 3rem;
        font-weight: bold;
        color: #0a0a0a;
        margin-top: 20px;
    }
    h2{
        font-size: 1.5rem;
        font-weight: bold;
        color: #0a0a0a;
        margin-top: 20px;
    }

    @keyframes fadeIn {
        from {
            transform: scale(0.1) translate(-50%, -50%);
            opacity: 0;
        }
        to {
            transform: scale(1) translate(-50%, -50%);
            opacity: 1;
        }
    }


    `