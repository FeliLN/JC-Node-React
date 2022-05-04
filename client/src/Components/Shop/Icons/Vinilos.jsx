import React, { useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../../Breakpoints';
//import { ObtainData } from '../../../Service/publicApiService';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../FirebaseConfig';

const Vinilos = (props) => {

    const [Vinilos, setVinyl] = React.useState([]);
    useEffect(() => {
    const obtainData = async () => {
        const data = await getDocs(collection(db, 'productos'));
        console.log(data)
        const Vinyls = data.docs.filter(function(alfa){return alfa.id==='Vinilos'}) 
        setVinyl(Vinyls[0].data());
      };
      obtainData();
    }, []);
    console.log(Vinilos)
    return (
        <VinilosStyle>
            {Object.keys(Vinilos).map(producto => (
                <Card key={Vinilos[producto].ID}>
                    <Img src={Vinilos[producto].Image} alt={producto.nombre}/>
                    <Title>{Vinilos[producto].Banda}</Title>
                    <Price>{Vinilos[producto].Vinilo}</Price>
                    <Button>AÑADIR AL CARRITO</Button> 
                </Card>
            ))}
        </VinilosStyle>
    )
}
export default Vinilos;

const VinilosStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px; 
    animation: cassetteslide 1s 0.3s both;
    z-index:-1; 
    @keyframes cassetteslide {
        from {
            height: 0px;
        }
        to {
            height: 800px;
        }
    }
    @media ${device.laptopL} { 
        width: 100%;
        padding-left: 70px;
    }
`
const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    @media ${device.laptopL} {
    width: 200px;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    }
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
const Title = styled.h1`
    font-size: 1.2em;
    font-weight: bold;
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
