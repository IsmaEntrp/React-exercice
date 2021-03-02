import './Chekoutpage.css'
import React , {useContext} from 'react'
import {ListProductContext} from '../Context/context'
import Product from './Product';

function Chekoutpage()
{
    const [,[Panier, usePanier]]= useContext(ListProductContext);

    function subtotalprice()
    {
        var totalprice = 0
        for(var i =0; i<Panier.length; i++)
        {
            totalprice = totalprice + Panier[i].price
        }
        return totalprice
    }

    return(
        <div className="Chckout-container">
            <div className="chekout-list-product">
                {Panier.map((product)=>{return(
                        <Product 
                        key= {product.id}
                        name ={product.name} 
                        price = {product.price}
                        img= {product.img}
                        enstock = {product.enstock}
                        id = {product.id}
                        checkout />
                        )})}
            </div>
            <div className="Checkoutpage-subtotal">
                <p className="Checkoutpage-subtotal-total">Totale : {subtotalprice()}</p>
                <button className="Checkoutpage-subtotal-button">Valider et acheter</button>
            </div>
        </div>
    )
}

export default Chekoutpage