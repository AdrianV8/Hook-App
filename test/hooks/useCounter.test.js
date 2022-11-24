import { act, render, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {

  test("should return default value", () => {
    const { result } = renderHook(() => useCounter());
    // console.log(result);
    const { increment, decrement, counter, reset } = result.current;

    expect(counter).toBe(1);
    expect(decrement).toEqual(expect.any(Function)); // -> Espera que sea una función
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should generate the counter with the value off 100", () => {

    const { result } = renderHook(() => useCounter(100));
    expect( result.current.counter ).toBe(100)

  });

  test('should increment counter', () => { 

    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act( () =>{
        increment();
        increment(2);
    });
    
    expect( result.current.counter ).toBe(103)
   })

   test('should decrement counter', () => { 

    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act( () =>{
        decrement();
        decrement(2);
    });
    
    expect( result.current.counter ).toBe(97)
   })

   test('should reset counter', () => { 

    const { result } = renderHook(() => useCounter(100));
    const { reset, increment } = result.current;

    act( () =>{
        increment(10) // -> 110
        reset();
    });
    
    expect( result.current.counter ).toBe(100)
   })
});
