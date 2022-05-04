import React from "react";

function Tiles({headline, image, brandTitle, children}) {

    return(
        <section>
            <h2>{headline}</h2>
            {children}
            {image && <img src={image} alt={brandTitle} />}
        </section>

    );
}

export default Tiles;