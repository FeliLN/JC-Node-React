import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <HeaderStyle>
      <FontAwesomeIconStyle icon={faArrowCircleLeft} onClick={() => window.history.back()} /> Volver
      <TopbarWrapperStyle>
          <LogoSyle>
            Johnny Cash
          </LogoSyle>
      </TopbarWrapperStyle>  
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
    background-color: #fff;
    height: 50px;
    width: 100%;
    display: flex;
    padding: 0 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    align-items: center;

`
const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
    color: #000;
    font-size: 40px;
    cursor: pointer;
  

`

const TopbarWrapperStyle = styled.div`
    height: 100%;
    padding: 0 40px;
    align-items: center;
    justify-content: space-between;
`

const LogoSyle = styled.span`
font-size: 30px;
font-weight: bold;
color: darkblue;
padding: 0 600px;
cursor: pointer;
&:hover {
    color: #000;
    text-decoration: underline;
    cursor: pointer;
}
`