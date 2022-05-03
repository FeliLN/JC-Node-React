import React from 'react'
import Header from '../Header'
import { getNovedades } from '../../../Service/publicApiService'
import EditNovedadModal from './EditNovedadModal'
import Swal from 'sweetalert2'

const EditNovedadesForm = () => {
    const [novedades, setNovedades] = React.useState(null)
    const [novedadEdit, setNovedadEdit] = React.useState({})
    const [edit, setEdit] = React.useState(false)

    React.useEffect(() => {
        getNovedades().then(data => {
            setNovedades(data)
            console.log(data)
        })
    }, [])
 
    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Eliminando...',
                })
                Swal.showLoading()
                setTimeout(() => {
                    Swal.fire({
                        title: 'Eliminado correctamente',
                        icon: 'success',
                        timer: 500
                    })
                    setNovedades(novedades.filter(novedad => novedad.id !== id))
                }, 500)
            }
        })
    }


  return (
    <div>
        <Header/>
        <h1>Editar Novedades</h1>
        {novedades && novedades.map(novedad => (
            <div key={novedad.id}>
                <h2>{novedad.Titulo}</h2>
                <p>{novedad.Subtitulo}</p>
                <img src={novedad.Imagen} alt='' style={{width: '200px', height: '100%', objectFit: 'cover'}}/>
                <button onClick={() => {
                    setNovedadEdit(novedad)
                    setEdit(true)
                }}>Editar</button>
                <button onClick={() => confirmDelete(novedad.id)}>Eliminar</button>

            </div>
        ))}
        {edit && <EditNovedadModal 
                    setEdit={setEdit} 
                    novedadEdit={novedadEdit} 
                    setNovedadEdit={setNovedadEdit}
                />
        }
    </div>
  )
}

export default EditNovedadesForm


