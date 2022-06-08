import React from 'react'
import { createVenta, getNotifiaciones, updateNotificacion } from '../../Service/publicApiService'
import { CartState } from '../../Context'

const PayDone = () => {

    const { total, cart, userData} = CartState()
    const [notificacion, setNotificacion] = React.useState([])

    React.useEffect(() => {
        getNotifiaciones().then(data => {
            setNotificacion(data[0])
        }
        )
    }, [])

    React.useEffect(() => {
    
    const confirmVenta = () => { createVenta({cart, userData, total})
            setNotificacion({
                ...notificacion,
                Compras: notificacion.Compras++
            })
        }
        confirmVenta()

    }, [cart, userData, total, notificacion])



            // updateNotificacion(notificacion.id, notificacion)
  return (
    <div>PayDone</div>
  )
}

export default PayDone