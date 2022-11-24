import {useCounter} from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button onClick={ () => increment(1)} className="btn btn-success">+1</button>
      <button onClick={reset} className="btn btn-warning">Reset</button>
      <button onClick={ () => decrement(1)} className="btn btn-danger">-1</button>
    </>
  );
};
