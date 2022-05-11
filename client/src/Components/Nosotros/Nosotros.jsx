import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

const About = () => {

    return (

        <AboutStyle>
            <Header />
           <h1>Acerca de Nosotros</h1>
        </AboutStyle>
    )
}

export default About

const AboutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0px;
    h1{
        font-size: 2.5rem;
        margin-top: 50px;
    }
    p{
        font-size: 1.5rem;
        margin-top: 50px;
    }
`
