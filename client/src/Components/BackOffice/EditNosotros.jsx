import React from 'react'
import { getNosotros, updateNosotros } from '../../Service/publicApiService'
import Header from './Header'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditNosotros = () => {
    const [nosotros, setNosotros] = React.useState({
        ID: '',
        Descripcion: '',
    })
    const [edit, setEdit] = React.useState(false)

    React.useEffect(() => {
        getNosotros().then(res => {
            setNosotros(res[0])
        })
    }, [])

  return (
    <div>
        <Header/>
        <h1>Editar Nosotros</h1>
        {edit ? 
            <div>
                <CKEditor
                    editor={ ClassicEditor }
                    data={nosotros.Descripcion}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setNosotros({...nosotros, Descripcion: data})
                    } }
                />
            <button 
                    onClick={() => setEdit(false)}
                >
                    Cancelar
                </button>
                <button 
                    onClick={() => updateNosotros(nosotros.id, nosotros).then(setEdit(false))}
                >
                    Guardar
                </button>
            </div>
        :
            <div>
                <p>{nosotros.Descripcion}</p>
                <button onClick={() => setEdit(true)}>Editar</button>
            </div>
        }
    </div>
  )
}

export default EditNosotros