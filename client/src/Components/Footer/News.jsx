import React from 'react'
import styled from 'styled-components'
import { deviceW, deviceH } from '../Breakpoints'
import { Carousel } from 'react-bootstrap'
import { getNovedades } from '../../Service/publicApiService'

const News = () => {

    const [novedades, setNovedades] = React.useState(null)

    React.useEffect(() => {
        getNovedades().then(res => {
            setNovedades(res)
        })
    }, [])

  return (
    <CarouselStyle variant="dark">
        {novedades && novedades.map(novedad => (
            <Carousel.Item key={novedad.id}>
                <Image
                    className="d-block w-100"
                    src={novedad.Imagen}
                    alt=''
                />
                <Carousel.Caption>
                    <h3>{novedad.Titulo}</h3>
                    <p>{novedad.Subtitulo}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </CarouselStyle>
  )
}

export default News

const CarouselStyle = styled(Carousel)`
    margin-top: 30px;
    height: 40vh;
    position: block;
    z-index: 0;
    h3, p{
        color: white;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {

    } 
`

const Image = styled.img`
position: block;
    color: white;
    height: 400px;
    object-fit: cover;
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
       height: 340px;
    } 
`
