
import React, {useContext} from 'react'
import Product from './Product'
import './Productpage.css'
import {ListProductContext} from '../Context/context'
const Productpage = ()=>
{
    const [ [Listproduct, useListproduct]]= useContext(ListProductContext);
    
    return(
        <div className= "Productpage-container">
            {Listproduct.map(product => {
                        return(
                        <Product 
                        key={product.id}
                        name ={product.name} 
                        price = {product.price}
                        img= {product.img}
                        enstock = {product.enstock}
                         />
                        )}
            )}
        </div>
    )
}

export default Productpage