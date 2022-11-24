import { useState } from "react"

export const useReset = (event) => {

    const [fields, setFields] = useState('');

    const handleChange = event => {
        console.log(event.target.value);
        // setMessage(event.target.value);
    };
    const handleClick = () => {
        setFields('');
      };
}