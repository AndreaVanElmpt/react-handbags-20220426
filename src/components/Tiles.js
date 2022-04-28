import React from "react";

function Tiles({headline, paragraph, image, brandTitle}) {
    const paragraphs = Array.isArray(paragraph)?paragraph:[paragraph];
    return(
        <section>
            <h2>{headline}</h2>
            {
                paragraphs.map((text => <p>{text}</p> ))
            }
            <img src={image} alt={brandTitle} />
        </section>

    );
}

export default Tiles;