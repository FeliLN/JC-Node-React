import React from 'react'
import { getContact, updateContact } from '../../../Service/publicApiService'
import Header from '../Header'

const EditContactForm = () => {
  
  const [contact, setContact] = React.useState({})

  React.useEffect(() => {
    getContact().then(data => {
      setContact(data[0])
    })
  }, [])

  return (
    <div>
      <Header />
      <h1>Editar Contacto</h1>
      <form>
        <label>Editar Mail</label>
        <input type="text" placeholder="Mail" value={contact.Mail} onChange={(e) => setContact({...contact, Mail: e.target.value})} />
        <label>Editar Telefono</label>
        <input type="number" placeholder="Telefono" value={contact.Telefono} onChange={(e) => setContact({...contact, Telefono: e.target.value})} />
        <label>Editar Facebook</label>
        <input type="text" placeholder="Facebook" value={contact.Facebook} onChange={(e) => setContact({...contact, Facebook: e.target.value})} />
        <label>Editar Instagram</label>
        <input placeholder="Instagram" value={contact.Instagram} onChange={(e) => setContact({...contact, Instagram: e.target.value})}></input>
        <h2 onClick={() => updateContact(contact.id, contact)}>Actualizar</h2>
      </form>
    </div>
  )
}

export default EditContactForm