import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { Badge } from 'react-bootstrap'
import { CartState } from '../../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimes  } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import axios from 'axios'

import styled from 'styled-components'
// import {device} from '../Breakpoints'


const CartWidget = () => {

    const navigate = useNavigate();

    const { items, deleteItem, formatPeso, total } = CartState() 
    let cartItems = localStorage.getItem('cart')
    const [cartList, setCartList] = React.useState(cartItems ? JSON.parse(cartItems) : [])

    React.useEffect(() => {

        setCartList(cartItems ? JSON.parse(cartItems) : [])
 
        
    }, [cartItems])

    const  confirmDelete = (ID) => {
        deleteItem(ID)
        setCartList(cartList.filter(item => item.ID !== ID))
        Swal.fire({
            type: 'success',
            title: 'Producto eliminado',
            text: 'El producto se ha eliminado del carrito'
        })

    }

  return (
     
    <Dropdown onClick={() => setCartList(cartItems ? JSON.parse(cartItems) : [])}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" >
            <FontAwesomeIcon icon={faShoppingCart} />
            <Badge>{items}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ minWidth: 500}}>
            
            <Menu>
                {cartList.length > 0 ? 
                    cartList.map (item => (
                        <div key={item.id}>
                            <span className='close'>
                                <Button onClick={() =>  confirmDelete(item.ID)}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            </span>
                            <span className='img-span'>
                                <img src={item.Imagen} alt={item.name} style={{ width: 50, height: 50 }} />
                            </span>
                            <span>{item.Album}</span>
                            <span>{item.Artista}</span>
                            <span className='precio'>{" "}{formatPeso(item.Precio)}</span>
                        </div>
                    ))  
                : <h1>No hay productos en el carrito</h1>}
                <h1>Total: {formatPeso(total)}</h1>
                {items === 0 ? null : 
                <button onClick={() => {
                    navigate('./Cart');
                    axios.post('http://localhost:5000/pay')
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
                }>
                    Ir al Carrito
                </button>
                }
            </Menu>
            
        </Dropdown.Menu>
    </Dropdown>
    )
}

export default CartWidget


const Menu = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #0a0a0a;
    color: #0a0a0a;
    font-size: 1rem;
    font-weight: bold;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
        margin: 10px 0;
    }
    h1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin-top: 10px;
        font-size: 1.7rem;
        font-weight: bold;
        color: #0a0a0a;
        background-color: #fff;
        border-radius: 10px;
    }
    span{
        width: 100%;
    }
    .close{
        width: 40px;
        margin-right: 10px;
    }
    .img-span{
        width: 40px;
        margin-right: 30px;
    }
    .precio{
        width: 100px;
        margin-left: 10px;
    }
    `
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: #0a0a0a;
border-radius: 60px;
border: 0px solid #fff;
margin: 4px 4px 4px 0 ;   
width: 30px;
height: 30px;
color: #fff;
.SearchIcon:hover {
    transform: scale(1.2);
    cursor: pointer;
}
`