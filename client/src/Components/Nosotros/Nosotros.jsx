import React from 'react'
import Header from '../Header/Header'
import { getNosotros } from '../../Service/publicApiService'
import styled from 'styled-components'
import  { useState, useEffect } from 'react';


const About = () => {
    const [nosotros, setNosotros] = useState({})
    useEffect(() => {
        getNosotros().then(data => {
            setNosotros(data[0])
        })
    }, [])

    let convertedText = ''

    if (nosotros) {
        convertedText = nosotros.Descripcion
            .replaceAll('<p>', '').replaceAll('</p>', '')
            .replaceAll('<strong>', '').replaceAll('</strong>', '')
            .replaceAll('&nbsp;', <br/>)
            .replaceAll('&gt', <br/>)
            .replaceAll('[object Object]', '')
    }

    return (

        <AboutStyle>
            <Header />
           <h1>Acerca de Nosotros</h1>
            <p>{convertedText}</p>
            
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
