import React from "react";

function Tiles({headline, descriptionText, descriptionTextTwo, image, brandTitle}) {
    return(
        <section>
            <h2>{headline}</h2>
            <p>{descriptionText}</p>
            <p>{descriptionTextTwo}</p>
            <img src={image} alt={brandTitle} />
        </section>

    );
}

export default Tiles;