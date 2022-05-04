import React from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../Breakpoints'
import { CartState } from '../../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Cart = () => {

    const { deleteItem, formatPeso, total } = CartState()
    const cartItems = localStorage.getItem('cart')
    const [cartList, setCartList] = React.useState(cartItems ? JSON.parse(cartItems) : [])

    console.log(cartItems)
    const navigate = useNavigate();

    const  confirmDelete = (ID) => {
        deleteItem(ID)
        setCartList(cartList.filter(item => item.ID !== ID))
    }

  return (
    <CartStyle>
        <Header/>


      <CartWindow>
        <Title>Objetos seleecionados</Title>
        <CartItems>  
        <table>
          <THead>
            <th>Imagen</th>
            <th>Album</th>
            <th>Artista</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </THead>
        
        {cartList.length > 0 ? 
                    cartList.map (item => (
                        <tr key={item.id}>
                            {console.log(item.id)}
                            <td><img src={item.Imagen} alt={item.name} style={{ width: 50, height: 50 }} /></td>
                            <td>{item.Album}</td>
                            <td>{item.Artista}</td>
                            <td>{" "}{formatPeso(item.Precio)}</td>
                          <td>
                            <Button icon={faTimes} onClick={() => confirmDelete(item.ID)}/>
                          </td>
                        
                        </tr>
   
                    ))  
                : 'No hay productos en el carrito'}
        </table>
        </CartItems>
        <Total>
            <span>Total: {formatPeso(total)}</span>
            <button onClick={() => {
                navigate('./Payment');
               
            }}>Realizar Compra</button>
        </Total>
      </CartWindow>
    
    
    
    </CartStyle>
  )
}

export default Cart


const CartStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    
    flex-direction: column;
    background-color: #ffffff;
    color: #0a0a0a;
    button{
        background-color: #0a0a0a;
        color: #fff;
        border: none;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }
`

const CartWindow = styled.div`
  display: flex;
    flex-direction: column;
    z-index: 0;
    align-items: center;
    width: 95%;
    height: 0px;
    background-color: #000;
    padding: 10px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    border: 1px solid #000000; 
    text-align: center;
    animation: slidein 3s both;
    @keyframes slidein {
        from {
            height: 0px;
            margin-top: 0px;
        }
        to {
            height: 800px;
            margin-top: 2%;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media ${device.laptopL} { 
    }
    @media ${device.desktopR} {
        transition: all 0.3s ease-in-out;
    }
        flex-direction: column
    }   
`

const Title = styled.div`
 font-size: 2rem;
  font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    width: 100%;
    padding: 10px;
    z-index: 10;
    @media ${device.laptopL} {
        
        margin-bottom: 10px;
        height: 50px;
    }
    @media ${device.desktopR} {
        margin-bottom: 10px;
        height: 50px;
    
    }


`
    const CartItems = styled.div`

    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px; 
    animation: cassetteslide 1s 0.3s both;
    z-index:-10; 
    table {	
        
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        border-spacing: 15px;
        border-collapse: separate;
      
    }
    tr { font-size: 1.2rem;}

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
    }
`
const THead = styled.thead`
    border-bottom: 1px solid #000000;
    font-size: 1.5rem;
  
    color: #fff;
    
    width: 100%;
    height: 50px;
    th {
      border-radius: 10px;  
      background-color: #000000;
    }
    
    `


const Total = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    width: 100%;
    z-index: 10;
    @media ${device.laptopL} {
      margin-top: 10px;
        height: 50px;
    }
    @media ${device.desktopR} {
        height: 50px;
    }
    span{
        font-size: 1.5rem;
        margin-left: 20px;
    }
    `
const Button = styled(FontAwesomeIcon)`
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`