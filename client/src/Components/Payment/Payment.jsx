import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom'
import { CartState } from '../../Context';
// import Mercadopago from 'mercadopago/lib/mercadopago';
import MercadoPago from './MercadoPago/MercadoPago'
// import CreditCard from './CreditCard'
// import mercadopago from 'mercadopago';
// import useScript from './MercadoPago/useScript';



const validate = values => {
    const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Direccion Invalida';
          } if (!values.direccion) {
            errors.direccion = 'Required';
          }  else if (values.direccion.length < 2) {
            errors.team = 'Direccion Invalida!';
          } 
          return errors;
        }

const Payment = () => {

    const { total, cart, formatPeso } = CartState()
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        name: '',   // sin numeros ni caracteres especiales, minimo 4 caracteres
        email: '',
        telefono: '', // que contenga 10 digitos
        direccion: '', 
        ciudad: '',
        provincia: '',
        codigoPostal: '', // que contenga 4 digitos
        nroTarjeta: '', // que contenga 16 digitos
        vencimiento: '',    // que contenga 4 digitos y una "/"
        codSeguridad: '',   // que contenga 3 digitos
    });

    return (
        <Formik
            initialValues={values}
            validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate('/mercadopago')
          }, 400);
          
        }}
        >
        {({ isSubmitting }) => (
            <Form>
              {/* Mercado envio */}
                <label>Nombre y Apellido</label>
                <Field type="text" name="name" placeholder="Nombre y Apellido" />

                <label>Correo Electronico</label>
                <Field type="email" name="email" placeholder="Correo Electronico" />
                <ErrorMessage name="email" component="div" />

                <label>Telefono</label>
                <Field type="number" name="telefono" />
                <ErrorMessage name="telefono" component="div" />

                <label>Direccion</label>
                <Field type="text" name="direccion" />
                <ErrorMessage name="direccion" component="div" />

                <label>Ciudad</label>
                <Field type="text" name="ciudad" />
                <ErrorMessage name="ciudad" component="div" />

                <label>Provincia</label>
                <Field as="select" name="provincia" >
                    <option value="BA">Buenos Aires</option>
                    <option value="CA">Catamarca</option>
                    <option value="CHA">Chaco</option>
                    <option value="CHU">Chubut</option>
                    <option value="CBA">Córdoba</option>
                    <option value="COR">Corrientes</option>
                    <option value="EERR">Entre Ríos</option>
                    <option value="FO">Formosa</option>
                    <option value="JU">Jujuy</option>
                    <option value="LP">La Pampa</option>
                    <option value="LR">La Rioja</option>
                    <option value="MZA">Mendoza</option>
                    <option value="MIS">Misiones</option>
                    <option value="NQN">Neuquén</option>
                    <option value="RNE">Río Negro</option>
                    <option value="SA">Salta</option>
                    <option value="SC">Santa Cruz</option>
                    <option value="SF">Santa Fe</option>
                    <option value="SE">Santiago del Estero</option>
                    <option value="TDF">Tierra del Fuego</option>
                    <option value="TU">Tucuman</option>
                </Field>
                <ErrorMessage name="provincia" component="div" />

                <label>Codigo Postal</label>
                <Field type="number" name="codigoPostal" />
                <ErrorMessage name="codigoPostal" component="div" />

                {/* Mercado pago */}
                <label>Numero de Tarjeta</label>
                <Field type="number" name="nroTarjeta" />
                <ErrorMessage name="nroTarjeta" component="div" />

                <label>Vencimiento</label>
                <Field type="text" name="vencimiento" />
                <ErrorMessage name="vencimiento" component="div" />

                <label>Codigo de Seguridad</label>
                <Field type="number" name="codSeguridad" />
                <ErrorMessage name="codSeguridad" component="div" />
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
              
              <h1>Total: {formatPeso(total)}</h1>
              <MercadoPago/>
              {/* <CreditCard/> */}
              
            </Form>
       )}
        
      </Formik>
    )
}

export default Payment
