import React from 'react'

// Styled Components
import styled from 'styled-components'

const DVD = () => {

    const productos = [
        { 
            id: 1,
            nombre: 'Cassette',
            precio: '$10',
            imagen: 'https://www.movistar.com.ar/wp-content/uploads/2019/05/cassette-1.png',

        },
        {
            id: 2,
            nombre: 'Vinyl',
            precio: '$20',
            imagen: 'https://www.movistar.com.ar/wp-content/uploads/2019/05/vinilo-1.png',
        },
        {
            id: 3,
            nombre: 'CD',
            precio: '$30',
            imagen: 'https://www.movistar.com.ar/wp-content/uploads/2019/05/cd-1.png',
        },
        {
            id: 4,
            nombre: 'DVD',
            precio: '$40',
            imagen: 'https://www.movistar.com.ar/wp-content/uploads/2019/05/dvd-1.png',
        },
    ]

    return (
        <DVDStyle>
            

            {productos.map(producto => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <h3>{producto.precio}</h3>
                    <img src={producto.imagen} alt={producto.nombre}/>

                </div>
            ))}
            

        </DVDStyle>
    )
}

export default DVD


// styled components
const DVDStyle = styled.div`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #f5f5f5;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;

    animation-duration: 1s;
    animation-name: slidein;


@keyframes slidein {
    from {
    height: 0px;
  }

  to {
    height: 500px;
  }
  
}


`
