import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js')
const author = "Adrian", quote="Hola Mundo";


describe('Pruebas en MultipleCustomHooks', () => { 
    // Definimos mock del useCounter para simular su uso en las pruebas requeridas
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
    
    test('should show the deault component', () => { 
        
        // Regresamos lo que devuelve useFetch por defecto
        useFetch.mockReturnValue({data: null, isLoading: true, hasError: null})

        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Breaking Bad API'))
        expect(screen.getByText('Cargando...'))

        const nextButton = screen.getByRole('button', {name: "Siguiente frase"})
        // Al inicio el botón next es true
        expect( nextButton.disabled ).toBeTruthy();
        // screen.debug();
    
     })

    test('should show quote', () => { 

        // Simular valor de retorno del hook
        useFetch.mockReturnValue({
            data: [{ author, quote}], 
            isLoading: false, 
            hasError: null
        });
        render(<MultipleCustomHooks/>);
        expect( screen.getByText(quote) ).toBeTruthy()
        const nextButton = screen.getByRole('button', {name: "Siguiente frase"})
        expect( nextButton.disabled ).toBeFalsy();


    })

    test('should call increment function', () => { 

        useFetch.mockReturnValue({
            data: [{ author, quote}], 
            isLoading: false, 
            hasError: null
        });

        render(<MultipleCustomHooks/>);
            
        const nextButton = screen.getByRole('button', {name: "Siguiente frase"})
        fireEvent.click( nextButton )
        
        expect(mockIncrement).toHaveBeenCalled();

        screen.debug();
        
    })

 })