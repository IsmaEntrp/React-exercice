import React, { useState, createContext} from 'react'


export  const ListProductContext = createContext();

export const ListProductProvider = (props)=>
{
    const [Panier , usePanier] = useState([])
    const [Listproduct, useListProduct] = useState([
        {
            name : "HOMCOM Tapis de Course Fitness électrique Pliable - 1 à 10 Km/h - écran LCD Multifonctions - Puissance 500 W - Gris foncé Noir",
            price: 279.12,
            img : "https://images-na.ssl-images-amazon.com/images/I/61Huc%2B2gPML._AC_SL1500_.jpg",
            enstock : 150,
            id : 15436343546874563554368,
        },
        {
            name : "Philips BRI949/00 Lumea Prestige Epilateur à lumière pulsée avec 4 Embouts Corps/Visage/Maillot/Aisselles",
            price: 359.99 ,
            img : "https://images-na.ssl-images-amazon.com/images/I/71h2-SD-gSL._AC_SL1500_.jpg",
            enstock : 243 ,
            id : 431646464654364681448646,
        },
        {
            name :"B.K.Licht ruban LED multicolore 5m, guirlande lumineuse dimmable avec télécommande, auto-adhésif, lumière décorative blanche et multicolore, éclairage intérieur, 24W, longueur 5m" ,
            price: 13.59 ,
            img : "https://images-na.ssl-images-amazon.com/images/I/81fhHQ3yLGL._AC_SL1500_.jpg",
            enstock : 50,
            id : 786986937165435648654684,
        },
        {
            name : "BaoFeng Talkie Walkie VHF UHF FM Radio avec Double Bande Radio, Noir (2 pcs)",
            price: 46.12,
            img : "https://images-na.ssl-images-amazon.com/images/I/61imgiZoeIL._AC_SL1000_.jpg",
            enstock : 23,
            id : 67426828668876387468176868,
        },
        {
            name : "BEAUTURAL Lampe Toilette Veilleuse, Stérilisateur UV Portable Automatique avec Câble de Chargement USB pour les cuvettes de toilette, poubelles, tiroirs et armoires" ,
            price: 31.99,
            img : "https://images-na.ssl-images-amazon.com/images/I/61mMleDImtL._AC_SL1500_.jpg",
            enstock : 500,
            id : 6787689786986986371996786689837,
        }
    ])
    return(
        <ListProductContext.Provider value={[ [Listproduct, useListProduct],   [Panier , usePanier]]}>
            {props.children}
        </ListProductContext.Provider>

    )
}

