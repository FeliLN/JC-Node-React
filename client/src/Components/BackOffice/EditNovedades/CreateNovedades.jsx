import React from 'react'
import Header from '../Header'
import { Formik, Form, Field } from 'formik'
import { uploadImage, getImages, createNovedades } from '../../../Service/publicApiService'
import Swal from 'sweetalert2'


const CreateNovedades = () => {
    const [newNovedad, setNewNovedad] = React.useState({
        ID: '',
        Titulo: '',
        Subtitulo: '',
        Imagen: [],
        file: null
    })
    const [submit, setSubmit] = React.useState(false)	
    const [loaded, setLoaded] = React.useState(false)



    React.useEffect(() => {
        if(submit){
            setSubmit(false)
            setTimeout(() => {
                Swal.fire({
                    title: 'Creando novedad...',
                })
                Swal.showLoading()
                setLoaded(true)
            }, 1000)
        }
        if (loaded) {
            setTimeout(() => {
                createNovedades(newNovedad)
            }, 500)
            setLoaded(false)
        }
    }, [submit, newNovedad, loaded])
  return (
    <Formik 
        initialValues={newNovedad}
        onSubmit={ async (values, { setSubmitting }) => {
            setSubmitting(false);
            uploadImage(values.file, 'Novedades')
            Swal.fire({
                title: 'Subiendo Imagen...',
            })
            Swal.showLoading()
            setTimeout( async () => {
                await getImages(values.file, 'Novedades').then(res => {
                    setNewNovedad({
                        ...values,
                        Imagen: res,
                        file: null
                    })
                })
                setSubmit(true)
            }, 1000)
           
        }}
    >
        
    {({ values, handleChange, setFieldValue, isSubmitting }) => (
        <Form>
            <Header/>
            <div className="form-group">
                <label htmlFor="Titulo">Titulo</label>
                <Field type="text" name="Titulo" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Subtitulo">Subtitulo</label>
                <Field type="text" name="Subtitulo" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="file">Imagen</label>
                <input type="file" className="form-control" onChange={e => setFieldValue('file', e.target.files[0])} />
            </div>
            <button type="submit" className="btn btn-primary">Crear</button>
        </Form>
    )}
    </Formik>
  )
}

export default CreateNovedades