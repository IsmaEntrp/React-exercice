import './Product.css'
import React, {useContext} from 'react'
import {ListProductContext} from '../Context/context'

function Product(props)
{
    
    const [ , [Panier, usePanier]] = useContext(ListProductContext);
    function AddPanier()
    {
        usePanier([...Panier, {name : props.name, 
                                img: props.img, 
                                enstock: props.enstock, 
                                price: props.price,
                                id:props.id}])
    }
    function titlecut(title, n )
    {
        var newtitle = title.substr(0,n) + '...';
        return newtitle
    }

    return(
        <div className="Product-container">
            <img className="Product-img" src={props.img} alt={props.name}/>
            <p className="Product-title"> {titlecut(props.name,50)} </p>
            <p className="Product-enstock">En stock : {props.enstock}</p>
            <p className="Product-price">{props.price} $</p>
            <button className="Product-button-buy" onClick={AddPanier}> Ajouter au panier </button>
        </div>
    )

}

export default Product