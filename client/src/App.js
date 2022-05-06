import React from 'react'
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
//Router
import { Routes, Route } from "react-router-dom";
import  Home  from './Components/Home/Home';
import  Contact  from './Components/Contact/Contact';
import Nosotros from './Components/Nosotros/Nosotros';
import Cart from './Components/Cart/Cart';
import DashBoard from './Components/BackOffice/DashBoard';
import EditShop from './Components/BackOffice/EditShop';
import EditContacto from './Components/BackOffice/EditContacto';
import EditNovedades from './Components/BackOffice/EditNovedades';
import EditNosotros from './Components/BackOffice/EditNosotros';
import EditContactForm from './Components/BackOffice/EditContact/EditContactForm';
import Messages from './Components/BackOffice/EditContact/Messages';
import EditNovedadesForm from './Components/BackOffice/EditNovedades/EditNovedadesForm';
import CreateNovedades from './Components/BackOffice/EditNovedades/CreateNovedades';
import Payment from './Components/Payment/Payment';
import Ventas from './Components/BackOffice/Ventas/Ventas';
import CD from './Components/BackOffice/EditShop/CD'
import DVD from './Components/BackOffice/EditShop/DVD';
import Vinilos from './Components/BackOffice/EditShop/Vinilos';
import Cassettes from './Components/BackOffice/EditShop/Cassettes';
import Libros from './Components/BackOffice/EditShop/Libros';


function App() {
  return (
    <AppStyle className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="AcercaDeNosotros" element={<Nosotros />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Backoffice" element={<DashBoard />} />
          <Route path="/backoffice/Shopping" element={<EditShop />} />
          <Route path="/backoffice/Contacto" element={<EditContacto />} />
          <Route path="/backoffice/Novedades" element={<EditNovedades />} />
          <Route path="/backoffice/Nosotros" element={<EditNosotros />} />
          <Route path="/backoffice/Shopping/CD" element={<CD />} />
          <Route path="/backoffice/Shopping/DVD" element={<DVD />} />
          <Route path="/backoffice/Shopping/Vinilos" element={<Vinilos />} />
          <Route path="/backoffice/Shopping/Cassettes" element={<Cassettes />} />
          <Route path="/backoffice/Shopping/Libros" element={<Libros />} />
          <Route path="/backoffice/Contacto/Editar" element={<EditContactForm />} />
          <Route path="/backoffice/Contacto/Mensajes" element={<Messages/>} />
          <Route path="/backoffice/Novedades/Editar" element={<EditNovedadesForm />} />
          <Route path="/backoffice/Novedades/Crear" element={<CreateNovedades />} />
          <Route path="/backoffice/Ventas" element={<Ventas />} />
          <Route path="Cart/Payment" element={<Payment />} />
        </Routes>
        <ToastContainer />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  font-family: 'Oswald', sans-serif;
`
