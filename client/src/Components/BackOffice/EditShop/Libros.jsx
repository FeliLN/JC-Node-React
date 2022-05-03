import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import Table from "./Table"

const Libros = () => {
    const [libros, setLibros] = React.useState([])
    const product = 'Libros'

    React.useEffect(() => {
        getProducts(product).then(data => {
            setLibros(data)
        })
    }, [])

  return (
    <div>
        <Header/>
        <h1>LIBROS</h1>
        <EditCD>
            <CreateForm product={product}/>
        </EditCD>

        <Table items={libros} setItems={setLibros} product={product} />

    </div>
  )
}

export default Libros

const EditCD = styled.div`
    color: #fff;
    background-color: #000;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
