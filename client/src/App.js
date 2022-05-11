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
import Login from './Components/Auth/Login';
import Auth from './Components/Auth/Auth';

function App() {
  return (
    <AppStyle className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="AcercaDeNosotros" element={<Nosotros />} />
          <Route path="Cart" element={<Cart />} />
          {/* Validar */}
          <Route path="Login" element={<Login />} />
          {Auth() && <Route path="Backoffice" element={<DashBoard />} />}
          {Auth() && <Route path="/backoffice/Shopping" element={<EditShop />} />}
          {Auth() && <Route path="/backoffice/Contacto" element={<EditContacto />} />}
          {Auth() && <Route path="/backoffice/Novedades" element={<EditNovedades />} />}
          {Auth() && <Route path="/backoffice/Shopping/CD" element={<CD />} />}
          {Auth() && <Route path="/backoffice/Shopping/DVD" element={<DVD />} />}
          {Auth() && <Route path="/backoffice/Shopping/Vinilos" element={<Vinilos />}/>}
          {Auth() && <Route path="/backoffice/Shopping/Cassettes" element={<Cassettes />} />}
          {Auth() && <Route path="/backoffice/Shopping/Libros" element={<Libros />} />}
          {Auth() && <Route path="/backoffice/Contacto/Editar" element={<EditContactForm />} />}
          {Auth() && <Route path="/backoffice/Contacto/Mensajes" element={<Messages/>} />}
          {Auth() && <Route path="/backoffice/Novedades/Editar" element={<EditNovedadesForm />} />}
          {Auth() && <Route path="/backoffice/Novedades/Crear" element={<CreateNovedades />} />}
          {Auth() && <Route path="/backoffice/Ventas" element={<Ventas />} />}
          {/* Negar acceso sin productos */}
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
