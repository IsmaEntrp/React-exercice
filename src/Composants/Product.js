import './Product.css'

function Product(props)
{
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
            <button className="Product-button-buy"> Acheter </button>
        </div>
    )

}

export default Product