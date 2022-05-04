import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import Table from "./Table"

const Vinilos = () => {
    const [vinilos, setVinilos] = React.useState([])
    const product = 'Vinilos'

    React.useEffect(() => {
        getProducts(product).then(data => {
            setVinilos(data)
        })
    }, [])

  return (
    <div>
        <Header/>
        <h1>VINILOS</h1>
        <EditCD>
            <CreateForm product={product} />
        </EditCD>

        <Table items={vinilos} setItems={setVinilos} product={product}/>

    </div>
  )
}

export default Vinilos

const EditCD = styled.div`
    color: #fff;
    background-color: #000;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
