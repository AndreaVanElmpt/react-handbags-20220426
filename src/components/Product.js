import React from "react";

function Product({image, highlightText, title, description, price}) {
    return (
    <article>
        <span>{highlightText}</span>
        <img src={image} alt={title}/>
        <p>
            {description}
        </p>
        <h4>
            {price}
        </h4>
    </article>

    );
}

export default Product;


