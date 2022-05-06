import React, { useEffect } from 'react'
import ImagePreview from './ImagePreview'
import { Formik, Form, Field } from 'formik'
import { uploadImage, getImages, createProduct } from '../../../Service/publicApiService'
import Swal from 'sweetalert2'
import styled from 'styled-components'

const CreateForm = ({ product }) => {

    const [newItem, setNewItem] = React.useState({
        ID: '',
        Album: '',
        Artista: '',
        Año: '',
        Stock: false,
        Genero: '',
        Descripcion: '',
        Precio: '',
        Imagen: [],
        Tags: '',
    })
    const [submit, setSubmit] = React.useState(false)	
    const [loaded, setLoaded] = React.useState(false)

    const validate = () => {}

    useEffect(() => {
        if(submit){
            setSubmit(false)
            setTimeout(() => {
                Swal.fire({
                    title: 'Creando producto...',
                })
                Swal.showLoading()
                setLoaded(true)
            }, 1000)
        }
        if (loaded) {
            setTimeout(() => {
                createProduct(newItem, product)
            }, 500)
            setLoaded(false)
        }
    }, [submit, newItem, loaded, product])

    return (
        <Formik
            initialValues={newItem}
            validate={validate}
            onSubmit={ async (values, { setSubmitting }) => {
                setSubmitting(false);
                uploadImage(values.file, product)
                Swal.fire({
                    title: 'Subiendo Imagen...',
                })
                Swal.showLoading()
                setTimeout( async () => {
                    await getImages(values.file, product).then(res => {
                        setNewItem({
                            ...values, 
                            Imagen: res, 
                            file: null
                        })
                        Swal.fire({
                            title: 'Subido!',
                            text: 'La imagen se ha subido correctamente',
                            type: 'success',
                            timer: 500
                            })
                    })
                    setSubmit(true)
                }, 3000)
                
            }}
        >

        {({ values, handleChange, setFieldValue, isSubmitting }) => (
            <FormStyle>
            {values.file ? <ImagePreview file={values.file} /> : <section>No hay imagen </section> } 
                <div className='First-group'>
                <label>ID </label>
                <Field type="number" name="ID" value={values.ID} onChange={handleChange}/>
                
                <label>Album </label>
                <Field type="text" name="Album" value={values.Album} onChange={handleChange}/>

                <label>artista </label>
                <Field type="text" name="Artista" value={values.Artista} onChange={handleChange}/>
                </div>
                <div className='Second-group'>
                <label>año </label>
                <Field type="number" name="Año" value={values.Año} onChange={handleChange}/>

                <label>Precio </label>
                <Field type="number" name="Precio" value={values.Precio} onChange={handleChange}/>

               
                <label>Stock </label>
                <Field type="checkbox" name="Stock" checked={values.Stock} onPress={() => setFieldValue('check', !values.Stock)}/>
                </div>
                <div className='Second-group'>
                <label>Imagen </label>
                <input type="file" onChange={(event) => setFieldValue('file', event.target.files[0])}/>

                <label> Genero </label>
                <Field type="text" name="Genero" value={values.Genero} onChange={handleChange}/>

                <label>Descripcion </label>
                <textarea type="textarea" name="Descripcion" value={values.Descripcion} onChange={handleChange}/>
                </div>
                <div className='Second-group'>
                <label>Tags </label>
                <Field type="text" name="Tags" value={values.Tags} onChange={handleChange}/>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                        
            </FormStyle>
            )}
        </Formik>
    )
}

export default CreateForm

const FormStyle = styled(Form)`
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    /* background-color: #fff; */
    /* box-shadow: 0px 0px 10px #ccc;
    .First-group, .Second-group, .Third-group, .Fourth-group{ {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }
    input, textarea, select {
        width: 200px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        background-color: #fff;

        &:focus {
            outline: none;
        }
    }
    button {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;

        &:focus {
            outline: none;
        }

        &:hover {
            cursor: pointer;
        }
    }
    label {
        font-size: 20px;
        font-weight: bold;
        margin: 10px;
    }
    textarea {
        height: 100px;
    }
    section {
        width: 100%;
        height: 100px;

        &:focus {
            outline: none;
        }
    } */ */
`
