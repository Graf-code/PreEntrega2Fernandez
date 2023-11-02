import { useEffect, useState } from "react"
import { getProductById } from "../asynMock/asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },  [itemId])

        return(
            <div className='ItemDetailContainer' >
                <ItemDetail {...products} />
            </div>
        )
    }

export default ItemDetailContainer
