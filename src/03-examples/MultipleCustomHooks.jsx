import { LoadingQuote, Quote } from "../components/";
import { useCounter, useFetch } from "../hooks/";

export const MultipleCustomHooks = () => {
  const dataError = [
    {
      author: "Sin autor",
      quote: "Sin frase por definir",
      quote_id: 1,
      series: "Breaking Bad",
    },
  ];


  const { increment, counter, random } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  /**
   * Desestructuración de la data:
   * Si en data hay datos, que se extraiga de data[0]
   */
  const { author, quote } = !!data ? data[0] : dataError[0];
  // console.log(data, dataError);
  
  return (
    <>
      <h1>Breaking Bad API</h1>
      <hr />
      
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <div>
        <button
          className="btn btn-warning text-center"
          onClick={() => increment(1)}
          disabled={isLoading}
        >
          Siguiente frase
        </button>
        <button
          className="btn btn-success text-center"
          onClick={() => random(1, 102)}
          disabled={isLoading}
        >
          Frase aleatoria
        </button>
      </div>
    </>
  );
};
