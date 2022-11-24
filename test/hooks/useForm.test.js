import { act, render, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {

    const initialForm = {
        name: "Adrian",
        email: "adrian@google.com"
    }

  test("should return default values", () => {
    
    const {result} = renderHook( () => useForm( initialForm ) );
    expect( result.current ).toEqual({
        onResetForm: expect.any(Function),
        formState: { name: 'Adrian', email: 'adrian@google.com' },
        onInputChange: expect.any(Function),
        name: 'Adrian',
        email: 'adrian@google.com'
      })
 
  });

  test('should change the form name', () => { 
    
    const newValue = "Juan"
    const {result} = renderHook( () => useForm( initialForm ) );
    const { onInputChange } = result.current

    act( () =>{
        onInputChange({ target: {name: 'name', value: newValue} })
    })
    // console.log(result.current);
    expect( result.current.name ).toBe(newValue)
    expect( result.current.formState.name ).toBe(newValue)

   })

   test('should reset form', () => { 
    
    const newValue = "Juan"
    const {result} = renderHook( () => useForm( initialForm ) );
    const { onInputChange, onResetForm } = result.current

    act( () =>{
        onInputChange({ target: {name: 'name', value: newValue} })
        onResetForm();
    })
    // console.log(result.current);
    expect( result.current.name ).toBe(initialForm.name)
    expect( result.current.formState.name ).toBe(initialForm.name)

   })
});
