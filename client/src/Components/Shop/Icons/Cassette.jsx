// import React, { useState, useContext } from 'react';
// import { CartProvider } from '../../Cart/CartProvider';

// import { useNavigate } from 'react-router-dom';

// //Styled Components
// import styled from 'styled-components'
// import { device } from '../../Breakpoints';

// import vinyl from './vinil.png';

// const Cassette = () => {
//     const navigate = useNavigate();

//     const [shopLoading, setShopLoading] = React.useState(false);

//     React.useEffect(() => {
//         setTimeout(() => {
//             setShopLoading(true);
//         }, 2500);
//     }, []);

//     const [initial, setInitial] = useState(1);

//     const myContext = useContext(CartProvider);

//     const addCart = (count, item) => {

//         myContext.addToCart({
//           item: item.title,
//           quantity: count,
//           price: item.price,
//           imageUrl: item.imageUrl,
//           id: item.id,
//           stock: item.stock,
//         });
    
//         setInitial(count);
//         myContext.updateItems();
  
//       };

//     const productos = [
//         { 
//             id: 1,
//             nombre: 'Cassette',
//             precio: '$10',
//             imagen: vinyl,

//         },
//         {
//             id: 2,
//             nombre: 'Vinyl',
//             precio: '$20',
//             imagen: vinyl,
//         },
//         {
//             id: 3,
//             nombre: 'CD',
//             precio: '$30',
//             imagen: vinyl,
//         },
//         {
//             id: 4,
//             nombre: 'DVD',
//             precio: '$40',
//             imagen: vinyl,
//         },
//         { 
//             id: 5,
//             nombre: 'Cassette',
//             precio: '$10',
//             imagen: vinyl,

//         },
//         {
//             id: 6,
//             nombre: 'Vinyl',
//             precio: '$20',
//             imagen: vinyl,
//         },
//         {
//             id: 7,
//             nombre: 'CD',
//             precio: '$30',
//             imagen: vinyl,
//         },
//         {
//             id: 8,
//             nombre: 'DVD',
//             precio: '$40',
//             imagen: vinyl,
//         },
        
//     ]

    
    
    
    
//     return (
//         <div>
//         {shopLoading ? 
//         <CassetteStyle>
            
         
//             {productos.map(producto => (
//                 <Card key={producto.id}>

//                     <Img src={producto.imagen} alt={producto.nombre}/>

//                     <Title>{producto.nombre}</Title>
//                     <Price>{producto.precio}</Price>
//                     <Button>AÑADIR AL CARRITO</Button>
//                 </Card>
//             ))}
          
            
//         </CassetteStyle>   : null }
//         </div>
//     )
// }

// export default Cassette


// // styled components
// const CassetteStyle = styled.div`
//     display: grid;
//     grid-template-columns: auto auto auto auto auto;
//     width: 100%;
//     height: 100%;
//     background-color: #f5f5f5;
//     border-radius: 10px; 
//     animation: cassetteslide 1s 0.3s both;
//     z-index:-1;
    
//     @keyframes cassetteslide {
//         from {
//         height: 0px;
//     }

//     to {
//         height: 800px;
//     }
    

//     }
//     @media ${device.laptopL} { 
//         width: 100%;
//         padding-left: 70px;
        
//     }
// `

// const Card = styled.li`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: #f5f5f5;
//     position: relative;
//     border-radius: 10px;
//     box-shadow: 0px 0px 10px #000000;
    
//     @media ${device.laptopL} { 

//     width: 200px;
//     height: 300px;
//     /* margin-left: 20px; */
//     /* margin-right: 20px; */
//     margin-top: 20px;
//     margin-bottom: 20px;
//     padding: 10px;

//     }

//     animation: fadein 1s 1s both;
//     @keyframes fadein {
//         from {
//             opacity: 0;
           
//         }

//         to {
//             opacity: 1;
            
//         }
//     }


// `

// const Title = styled.h1`
//     font-size: 1.5em;
//     font-weight: bold;
//     color: #000;
//     margin-bottom: 10px;
// `

// const Price = styled.h2`

//     font-size: 1.5em;
//     font-weight: bold;
//     color: #000;
//     margin-bottom: 10px;
// `

// const Img = styled.img`
    
//     width: 150px;
//     height: 150px;
//     border-radius: 10px;
    
// `

// const Button = styled.button`
//     background-image:linear-gradient(97deg, #b9801d 0%, rgba(179,135,40,1) 26%, rgba(191,149,63,1) 58%, rgba(251,245,183,1) 87%, rgba(252,246,186,1) 100%); 
//     background-size: 100% auto;
//     color: #000;
//     border: 1px solid #000;
//     width: 90%;
//     border-radius: 10px;
//     padding: 10px;
//     margin-top: 10px;
//     font-size: .9em;
//     font-weight: bold;
//     cursor: pointer;
//     transition: all 0.5s ease-in-out;

//     &:hover {
//         background-size: 140% auto;
//         color: #fff;
//         text-shadow: 0px 0px 5px #000;
//     }
    


// `