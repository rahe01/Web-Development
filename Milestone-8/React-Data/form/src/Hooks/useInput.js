import { useState } from "react";

const useInput = (defaultValue ='') => {

    const [value, setValue] = useState(defaultValue);


    const handleChange = val =>{
        setValue(val.target.value);

    }

    return [value, handleChange];
}

export default useInput;