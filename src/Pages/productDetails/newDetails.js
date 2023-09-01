import React from "react"
import {useParams} from "react-router-dom"
import data from "../../data";

function NewDetails() {
    const {itemId} = useParams()
    const thisProduct = data.newProducts.find(item => item.id === itemId)
    
    return (
        <div>
            <h1>{thisProduct.title}</h1>
            <img src={thisProduct.img} alt={thisProduct.title}/>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.desc}</p>
        </div>
    )
}

export default NewDetails;