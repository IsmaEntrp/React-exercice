import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props)
{
  

    return(
        <div className="Navbar-container">
            <Link className="Navbar-productpage" to="/">
                <h3>Exercice Boutique </h3>
            </Link>
            <div className="Navbar-search-div">
                <input type='text' name="search"></input>
                <button>Search</button>
            </div>
            <Link className="Navbar-productpage" to="/Produtpage">
               <p >Products</p> 
            </Link>
            
            <Link className="Navbar-productpage" to="/Checkout">
                <div className="Navbar-Panier">
                    <p>Panier : {0}</p>
                </div>
            </Link>
            
        </div>
    )

}

export default Navbar