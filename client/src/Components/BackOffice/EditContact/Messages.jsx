import React from 'react'
import { getMessages, deleteMessage } from '../../../Service/publicApiService'
import Header from '../Header'
import Swal from 'sweetalert2'

const Messages = () => {

    const [messages, setMessages] = React.useState([])

    React.useEffect(() => {
        getMessages().then(res => {
            setMessages(res)
            console.log(res)
        })
    }, [])

    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrarlo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                deleteMessage(id).then(() => {
                    setMessages(messages.filter(message => message.id !== id))
                    Swal.fire(
                        'Borrado!',
                        'El mensaje ha sido borrado.',
                        'success'
                    )
                })
            }
        })
    }

  return (
    <div>
      <Header/>
        <h1>Mensajes</h1>
        <>
            {messages.map(message => {
                return (
                    <div key={message.id}>
                        <h2>{message.Nombre}</h2>
                        <p>{message.Mail}</p> 
                        <p>{message.Telefono}</p>
                        <p>{message.Mensaje}</p>
                        <button onClick={() => confirmDelete(message.id)}>Eliminar</button>
                    </div>
                )
            })}
            </>

    </div>
  )
}

export default Messages