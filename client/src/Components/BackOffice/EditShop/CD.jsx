import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import TableMui from "./TableMui"


const CD = () => {
    const [cds, setCds] = React.useState([])
    const product = 'CD'

    React.useEffect(() => {
        getProducts(product).then(data => {
            setCds(data)
        })
    }, [])

  return (
    <div>
        <Header/>
        <h1>CD</h1>
        <EditCD>
            <CreateForm product={product}/>
        </EditCD>
        {/* <Table items={cds} setItems={setCds} product={product} /> */}
        <TableMui items={cds} setItems={setCds} product={product}  />

    </div>
  )
}

export default CD

const EditCD = styled.div`
    color: #fff;
    background-color: #000;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
