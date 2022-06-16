import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import JohnnyCash from '../Images/johnny-cash.png'
import { Link } from 'react-router-dom'
import CartWidget from '../Cart/CartWidget'
import { deviceH, deviceW } from '../Breakpoints'

const Header = () => {
  return (
    <HeaderStyle> 
        <ContainerLeft>
            <Arrow icon={faArrowLeft} 
            onClick={() => window.history.back()}
            />

            <Image src={JohnnyCash} alt="Johnny Cash"/>
        </ContainerLeft>

        <ContainerRight>
            <StyledLinks to='/'>
                <h3>Inicio</h3>
            </StyledLinks>
            <StyledLinks to='/Contact'>
                <h3>Contacto</h3>
            </StyledLinks>
            <StyledLinks to='/AcercaDeNosotros'>
                <h3>Acerca de</h3>
            </StyledLinks>
            <CartWidget />

        </ContainerRight>
        
    </HeaderStyle>
  )
}

export default Header


const HeaderStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #0a0a0a;
    color: #fff;
    `

const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    padding-left: 20px;
    `

const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    margin-right: 20px;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
       margin-right: 0px;
    }
    `

const Arrow = styled(FontAwesomeIcon)`
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    margin-left: 10px;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 1rem;
    }
    `

const Image = styled.img`
    display: flex;
    width: 200px;
    height: 100px;
    margin-right: 10px;
    padding: 10px;
    @media ${deviceW.mobileS} and ${deviceH.mobileS} {
        display: none;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        display: flex;
    }

`   

const StyledLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    margin: 0 20px 0 10px;
    h3{
        color: #fff;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        margin: 10px 10px 0 0;
        h3{
            width: 50px;
        font-size: .8rem;
       }
    }
    `