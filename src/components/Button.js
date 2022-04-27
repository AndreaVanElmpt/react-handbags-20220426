import React from "react";

function Button({description, setDescription, disabled}) {

    return (

       <button onClick={() => console.log(setDescription)}
               disabled={disabled}


       >
           {description}
       </button>
    );
}

export default Button;