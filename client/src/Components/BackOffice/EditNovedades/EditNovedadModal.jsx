import React from 'react'
import { updateNovedades, uploadImage, getImages } from '../../../Service/publicApiService'
import Swal from 'sweetalert2'
import {Formik, Form, Field } from 'formik'

const EditNovedadModal = ({setEdit, novedadEdit, setNovedadEdit}) => {

    const [isUploading, setIsUploading] = React.useState(false)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const product = 'Novedades'

    React.useEffect(() => {
        if(isUploading){
            setTimeout(() => {
            Swal.fire({
                title: 'Actualizando banner...',
            })
            Swal.showLoading()
            setIsLoaded(true)
        }, 1000)
        }
        if (isLoaded) {
            setTimeout(() => {
                updateNovedades(novedadEdit.id, novedadEdit)
            }, 500)
            setIsLoaded(false)
        }
    }, [isUploading, isLoaded, novedadEdit, setEdit, setNovedadEdit]);



    const confirmUpdate = (values, id) => {
        // e.preventDefault()
        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, editar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                uploadImage(values.file, product)
                console.log(id)
                Swal.fire({
                    title: 'Subiendo Imagen...',
                })
                Swal.showLoading()
                setTimeout( async () => {
                    await getImages(values.file, product).then(res => {
                        setNovedadEdit({
                            ...novedadEdit,
                            Imagen: res,
                            file: null
                        })
                        Swal.fire({
                            title: 'Imagen subida correctamente',
                            icon: 'success',
                            timer: 500
                        })
                    setIsUploading(true)
                })}, 3000)
            }
        })
    }


  return (
    <Formik initialValues={novedadEdit}
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            confirmUpdate(values, novedadEdit.id)
        }}
    >
        {({values, handleChange, setFieldValue, isSubmitting}) => (
            <Form key={novedadEdit.id}>
                <div className="form-group">
                    <label>Titulo</label>
                    <Field type="text" name='Titulo' className="form-control" value={values.Titulo} 
                    onChange={handleChange}
                    />
                    <label>Subtitulo</label>
                    <Field type="text" name='Subtitulo' className="form-control" value={values.Subtitulo} 
                    onChange={handleChange}
                    />
                    <label>Imagen</label>
                    <input type="file" className="form-control"
                    onChange={(e) => setFieldValue('file', e.target.files[0])}
                    />
                    {console.log(values.file)}
                    <button type='submit' disabled={isSubmitting} >Actualizar</button>
                    <button onClick={() => setEdit(false)}>Cancelar</button>
                </div>
            </Form> 
        )}
    </Formik>
  )
}

export default EditNovedadModal