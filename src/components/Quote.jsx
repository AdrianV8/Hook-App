import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({author, quote}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    // -> getBoundingClientRect() Obtener la información del componente html
    const {width, height} = pRef.current.getBoundingClientRect();
    setBoxSize({width, height});

  }, [quote])


  return (
    <>
      <blockquote 
        ref={pRef}
        className="blockquote text-end"
        style={{display: 'flex'}}>

        <p className="mb-3">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>
        {
          JSON.stringify(boxSize)
        }
      </code>
    </>
  );
};
