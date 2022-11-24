import React from 'react'


export const ShowIncrement = React.memo( ({increment}) => {
    console.log('Renderizado');
  return (
    <>
        <button 
        className="btn btn-primary"
        onClick={() => {increment()}}
        >
            Incrementar
        </button>
    </>
  )
})


export const ShowIncrementV2 = React.memo( ({increment}) => {
    console.log('Renderizado V2');
  return (
    <>
        <button 
        className="btn btn-primary"
        onClick={() => {increment(5)}}
        >
            Incrementar
        </button>
    </>
  )
})
