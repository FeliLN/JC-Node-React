import React, { useEffect } from 'react'
import { useMercadopago } from 'react-sdk-mercadopago';
import axios from 'axios'

const Mercadopago = () => {

  const [preference, setPreference] = React.useState({})

  const mercadopago = useMercadopago.v2('TEST-d04550e2-5c20-4213-b424-c12f4eb2683b', {
    locale: 'es-AR',
    sandbox: true
  });

  React.useEffect(() => {
    axios.get('http://localhost:5000/checkout/preference')
      .then(response => {
        setPreference(response.data)
        // console.log(response.data)
      })
  }, [])

  useEffect(() => {
    if (mercadopago) {
        mercadopago.checkout({
            preference: {
                ...preference
            },
            render: {
                container: '.cho-container',
                label: 'Pagar con MercadoPago',
            }
        })
    }
  }, [mercadopago, preference])

  // APP ESTO VA
  // const addToCart = (product) => {
  //   let order = {
  //     title: product.name,
  //     unit_price: product.price,
  //     quantity: 1,
  //   }
  //   axios.post('/order', order)
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }

  // const endPayment = () => {
  //     axios.post('/pay')
  //         .then(response => {
  //           console.log(response);
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  // }
// APP
  return (
    <div> 
       <div className="cho-container" />
    </div>
  )
}

export default Mercadopago




  // React.useEffect(() => {
  //   axios.post('https://api.mercadopago.com/checkout/preferences', {
  //     preference: preference
  //   })
  //     .then(response => {
  //       console.log(response.data)
  //     }
  //     )
  // }, [preference, mercadopago])
