import React from "react";

function Button({description, disabled}) {

    return (

       <button onClick={() => console.log(description)}
               disabled={disabled}


       >
           {description}
       </button>
    );
}

export default Button;