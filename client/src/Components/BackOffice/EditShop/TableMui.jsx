import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Swal from 'sweetalert2'
import { deleteProduct } from '../../../Service/publicApiService'




const columns = [
  { field: 'ID', headerName: 'ID', width: 30, align: 'center', },
  { field: 'Album', headerName: 'Album', width: 200, editable: true  },
  { field: 'Artista', headerName: 'Artista', width: 130, editable: true },
  {
    field: 'Price',
    headerName: 'Precio',
    type: 'number',
    width: 30,
    editable: true 
  },
  {
    field: 'Año',
    headerName: 'Año',
    width: 60,
    editable: true 
  },
  { field: 'Genero', headerName: 'Genero', width: 130, editable: true  },
  { field: 'Stock', headerName: 'Stock', width: 50, align: 'center', renderCell: (row) => <>{row ? 'SI' : 'NO'}</> },
  { field: 'Imagen', headerName: 'Imagen', width: 70, renderCell: (params) => <img src={params.value} alt='' style={{width:'50px', height: '50px'}} />, },
  { field: 'Tags', headerName: 'Tags', width: 400, editable: true  },
];
  

const DataTable = ({items, product, setItems}) => {
  // const [itemTable, setItemTable] = React.useState(items)
  console.log(items)
  // const [ itemEdit, setItemEdit ] = React.useState({
  //   ID: '',
  //   Album: '',
  //   Artista: '',
  //   Año: '',
  //   Stock: false,
  //   Genero: '',
  //   Descripcion: '',
  //   Precio: '',
  //   Imagen: [],
  //   Tags: '',
  // })
  // const [edit, setEdit] = React.useState(false)
  // const confirmDelete = (id) => {
  //   Swal.fire({
  //     title: '¿Estas seguro?',
  //     text: "No podras revertir esto!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Si, borrarlo!',
  //     cancelButtonText: 'Cancelar'
  //   }).then((result) => {
  //     if (result.value) {
  //       deleteProduct(id, product)
  //       Swal.fire(
  //         'Borrado!',
  //         'El producto ha sido borrado.',
  //         'success'
  //       )
  //       setItems(items.filter(item => item.id !== id))
  //     }
  //   })
  // }


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
       
      />
      <button onClick={() => {
                    // setItemEdit(item)
                    // setEdit(true)
                  }}>Editar</button>
                  {/* <button onClick={() => confirmDelete(item.id)}>Eliminar</button> */}
    </div>
    
  );
}


export default DataTable;