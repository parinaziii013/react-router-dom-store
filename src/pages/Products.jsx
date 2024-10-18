import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const PRODUCTS_LIST_API = 'https://fakestoreapi.com/products'
export const Products = () => {
    const [productsList, setProductsList] = useState([])
    
    useEffect (()=> {
        fetch (PRODUCTS_LIST_API)
        .then(data => data.json())
        .then(data => setProductsList(data))
        // .then(data => console.log(data))

    })
    // console.log(productsList)
    return (
        <div className="flex flex-wrap">
            {
                productsList.map(({id, title, price, image}) => (
                    <div key={id} className="w-1/3">
                        <Link to={`details/${id}`}>
                        <div>
                        <img width={200} height={200} src={image} alt="" />
                        <p>{title}</p>
                        <p>{price}</p>
                    </div>

                        </Link>
                        
                    </div>
                ))
            }
        </div>
    )
}