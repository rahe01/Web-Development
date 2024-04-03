import React from "react";

const Input = ({type , placeholder  } , ref ) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} ref={ref}/>
        </div>
    );
};

const InputForworded = React.forwardRef(Input)


export default InputForworded;