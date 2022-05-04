import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import Table from "./Table"


const DVD = () => {
    const [dvds, setDvds] = React.useState([])
    const product = 'DVD'

    React.useEffect(() => {
        getProducts(product).then(data => {
            setDvds(data)
        })
    }, [])

  return (
    <div>
        <Header/>
        <h1>DVD</h1>
        <EditDVD>
            <CreateForm product={product}/>
        </EditDVD>

        <Table items={dvds} setItems={setDvds} product={product} />

    </div>
  )
}

export default DVD

const EditDVD = styled.div`
    color: #fff;
    background-color: #000;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
