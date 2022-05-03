import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { Badge } from 'react-bootstrap'
import { CartState } from '../../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimes  } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import styled from 'styled-components'
import {device} from '../Breakpoints'


const CartWidget = () => {

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

        <Dropdown.Menu style={{ minWidth: 370 }}>
            
            <span style={{ padding: 10 }}>
                {cartList.length > 0 ? 
                    cartList.map (item => (
                        <div key={item.id}>
                            <Button onClick={() =>  confirmDelete(item.ID)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                            <img src={item.Imagen} alt={item.name} style={{ width: 50, height: 50 }} />
                            <span>{item.Album}</span>
                            <span>{item.Artista}</span>
                            <span>{" "}{formatPeso(item.Precio)}</span>
                        </div>
                    ))  
                : 'No hay productos en el carrito'}
                <h1>{formatPeso(total)}</h1>
                {items === 0 ? null : <StyledLink to='/Cart'>Go to Cart</StyledLink>}
            </span>
            
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default CartWidget

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a0a0a;
    border-radius: 60px;
    border: 0px solid #fff;
    margin: 4px 4px 4px 0 ;   
    width: 40px;
    height: 40px;
    color: #fff;
    .SearchIcon:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0a0a0a;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
    @media ${device.laptopL} { 
        margin-left: 20px;
       }
`