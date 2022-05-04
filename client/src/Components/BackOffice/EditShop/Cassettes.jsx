import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import Table from "./Table"


const Cassettes = () => {
    const [cassettes, setCassettes] = React.useState([])
    const product ='Cassettes'

    React.useEffect(() => {
        getProducts(product).then(data => {
            setCassettes(data)
        })
    }, [])
    

  return (
    <div>
        <Header/>
        <h1>CASSETTES</h1>
        <EditCD>
            <CreateForm product={product} />
        </EditCD>

        <Table items={cassettes} setItems={setCassettes} product={product} />

    </div>
  )
}

export default Cassettes

const EditCD = styled.div`
    color: #fff;
    background-color: #000;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`